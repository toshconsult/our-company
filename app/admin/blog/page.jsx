"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import { useEffect, useState } from "react";

import { API_BASE_URL } from "@/lib/site-config";

const API_URL = `${API_BASE_URL}/blogs`;

export default function AdminBlogPage() {
  const router = useRouter(); 

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("All Post");
  const [savedPosts, setSavedPosts] = useState([]);

  /* =========================================================
     GET BLOGS FROM API
  ========================================================= */
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("admin_token"); 

      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      });

      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem("admin_token");
          router.replace("/admin?redirect=/admin/blog"); 
          return;
        }
        throw new Error(`Failed to load blogs: ${response.status}`);
      }

      const data = await response.json();
      let blogData = data;

      if (!Array.isArray(blogData)) {
        if (Array.isArray(data?.blogs)) blogData = data.blogs;
        else if (Array.isArray(data?.data)) blogData = data.data;
        else if (Array.isArray(data?.results)) blogData = data.results;
      }

      if (!Array.isArray(blogData)) {
        throw new Error("Invalid blog data received from server.");
      }

      setBlogs(blogData);
    } catch (err) {
      console.error("BLOG API ERROR:", err);
      setError(err.message || "Unable to load blogs.");
    } finally {
      setLoading(false);
    }
  };

  /* =========================================================
     CHECK AUTH ON MOUNT
  ========================================================= */
  useEffect(() => {
    const token = localStorage.getItem("admin_token");

    if (!token) {
      router.replace("/admin?redirect=/admin/blog");
      return;
    }

    setIsAuthenticated(true);
    fetchBlogs();
  }, []);

  /* =========================================================
     HELPERS
  ========================================================= */
  const getTitle = (blog) => {
    return (
      blog?.title ||
      blog?.name ||
      blog?.headline ||
      "Wanna Break Into Software Engineering In 2023? Think Twice"
    );
  };

  const cleanText = (content) => {
    if (!content) return "";
    return String(content)
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<[^>]*>/g, " ")
      .replace(/&nbsp;/gi, " ")
      .replace(/&amp;/gi, "&")
      .replace(/&quot;/gi, '"')
      .replace(/&#39;/gi, "'")
      .replace(/\s+/g, " ")
      .trim();
  };

  const getPreview = (blog) => {
    const content =
      blog?.content ||
      blog?.description ||
      blog?.excerpt ||
      blog?.body ||
      blog?.text ||
      "";

    const text = cleanText(content);

    if (!text) {
      return "It Won’t Be Smooth Sailing For You — I Am A Refugee. I Didn’t Come From A Background In Data Science, Computer Science, Math, Or Statistics. But I’ve Successfully Transitioned Into A Data Science Job. Some Friends...";
    }

    if (text.length > 190) return `${text.substring(0, 190).trim()}...`;
    return text;
  };

  const getImageUrl = (blog) => {
    const possibleImage =
      blog?.image ||
      blog?.image_url ||
      blog?.imageUrl ||
      blog?.featured_image ||
      blog?.featuredImage ||
      blog?.cover_image ||
      blog?.coverImage ||
      blog?.thumbnail ||
      blog?.thumbnail_url ||
      blog?.photo ||
      blog?.picture ||
      "";

    if (!possibleImage) return "/images/blog1.png";

    if (
      typeof possibleImage === "string" &&
      possibleImage.startsWith("/")
    ) {
      return `https://toshconsultblogfastapi.onrender.com${possibleImage}`;
    }

    return possibleImage;
  };

  const getAuthor = (blog) => {
    return (
      blog?.author_name ||
      blog?.authorName ||
      blog?.author ||
      blog?.username ||
      "Toshmoney"
    );
  };

  const getDate = (blog) => {
    const dateValue =
      blog?.created_at ||
      blog?.createdAt ||
      blog?.date ||
      blog?.published_at ||
      blog?.publishedAt;

    if (!dateValue) return "Jan 11, 2023";

    try {
      const date = new Date(dateValue);
      if (Number.isNaN(date.getTime())) return "Jan 11, 2023";
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      });
    } catch {
      return "Jan 11, 2023";
    }
  };

  const getReadTime = (blog) => {
    if (blog?.read_time) return blog.read_time;
    if (blog?.readTime) return blog.readTime;

    const content = cleanText(
      blog?.content || blog?.description || blog?.excerpt || blog?.body || ""
    );

    if (!content) return "5min Read";

    const words = content.split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return `${minutes}min Read`;
  };

  const toggleSaved = (id) => {
    setSavedPosts((previous) => {
      if (previous.includes(id)) return previous.filter((item) => item !== id);
      return [...previous, id];
    });
  };

  const displayedBlogs =
    activeTab === "Saved"
      ? blogs.filter((blog, index) => savedPosts.includes(blog?.id ?? index))
      : blogs;

  if (!isAuthenticated && loading) {
    return (
      <main className="min-h-screen w-full bg-white flex items-center justify-center">
        <div className="h-[40px] w-[40px] animate-spin rounded-full border-[4px] border-[#eeeeee] border-t-[#ff9900]" />
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full bg-white text-[#111111]">
      <div className="h-[2px] w-full bg-[#111111]" />

      {/* ================= HEADER ================= */}
      <header className="w-full bg-white">
        <div className="mx-auto flex h-[80px] w-full max-w-[1400px] items-center justify-between px-[40px]">
          <Link href="/admin" className="block h-[50px] w-[90px] shrink-0">
            <Image
              src="/images/logo.png"
              alt="Toshconsult Technologies"
              width={90}
              height={50}
              priority
              className="h-full w-full object-contain"
            />
          </Link>

          <nav className="flex items-center gap-[45px]">
            <Link href="/admin/blog" className="text-[14px] font-normal text-[#666666] hover:text-[#111111] transition-colors">
              Blog
            </Link>
            <Link href="/admin/contact_notification" className="text-[14px] font-normal text-[#666666] hover:text-[#111111] transition-colors">
              Contact
            </Link>
            <Link href="/admin/applicationss" className="text-[14px] font-normal text-[#666666] hover:text-[#111111] transition-colors">
              Application
            </Link>
            <Link href="/admin/applicationss" className="text-[14px] font-normal text-[#666666] hover:text-[#111111] transition-colors">
              Career
            </Link>
          </nav>

          <button
            type="button"
            aria-label="Admin profile"
            className="h-[45px] w-[45px] shrink-0 overflow-hidden rounded-full bg-transparent p-0 border border-[#eeeeee]"
          >
            <Image
              src="/images/profile.png"
              alt="Admin profile"
              width={45}
              height={45}
              priority
              className="h-full w-full object-cover"
            />
          </button>
        </div>
      </header>

      {/* ================= MAIN CONTENT ================= */}
      <div className="mx-auto w-full max-w-[1400px] px-[40px] pb-[80px]">
        
        {/* ================= TITLE ================= */}
        <section className="mt-[40px]">
          <h1 className="text-[32px] font-bold leading-[40px] text-[#111111]">
            Blog Post
          </h1>
          <div className="mt-[10px] flex items-center gap-[10px]">
            <Link href="/" className="text-[12px] font-normal text-[#777777] hover:text-[#111111]">
              Home
            </Link>
            <span className="text-[12px] text-[#aaaaaa]">&gt;</span>
            <span className="text-[12px] font-normal text-[#777777]">Blog</span>
          </div>
        </section>

        {/* ================= FILTERS (CREATE POST REMOVED) ================= */}
        <section className="mt-[40px] flex items-center justify-between">
          <div className="flex items-center gap-[15px]">
            <button
              type="button"
              onClick={() => setActiveTab("All Post")}
              className={`flex h-[44px] items-center justify-center rounded-[12px] px-[30px] text-[14px] font-medium transition-all duration-200 ${
                activeTab === "All Post"
                  ? "bg-[#ff9900] text-white shadow-lg shadow-orange-200"
                  : "border border-[#e5e5e5] bg-white text-[#777777] hover:border-[#999]"
              }`}
            >
              All Post
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("Popular")}
              className={`flex h-[44px] items-center justify-center rounded-[12px] px-[30px] text-[14px] font-medium transition-all duration-200 ${
                activeTab === "Popular"
                  ? "bg-[#ff9900] text-white shadow-lg shadow-orange-200"
                  : "border border-[#e5e5e5] bg-white text-[#777777] hover:border-[#999]"
              }`}
            >
              Popular
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("Saved")}
              className={`flex h-[44px] items-center justify-center rounded-[12px] px-[30px] text-[14px] font-medium transition-all duration-200 ${
                activeTab === "Saved"
                  ? "bg-[#ff9900] text-white shadow-lg shadow-orange-200"
                  : "border border-[#e5e5e5] bg-white text-[#777777] hover:border-[#999]"
              }`}
            >
              Saved
            </button>
          </div>
        </section>

        {/* ================= LOADING ================= */}
        {loading && blogs.length === 0 && !error && (
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="text-center">
              <div className="mx-auto h-[40px] w-[40px] animate-spin rounded-full border-[4px] border-[#eeeeee] border-t-[#ff9900]" />
              <p className="mt-[15px] text-[14px] text-[#777777]">Loading blogs...</p>
            </div>
          </div>
        )}

        {/* ================= ERROR ================= */}
        {!loading && error && (
          <div className="mt-[50px] rounded-[12px] border border-[#eeeeee] bg-[#fafafa] p-[40px] text-center">
            <p className="text-[14px] text-[#777777]">{error}</p>
            <button
              type="button"
              onClick={fetchBlogs}
              className="mt-[20px] rounded-[10px] bg-[#ff9900] px-[30px] py-[12px] text-[14px] font-medium text-white hover:bg-[#f28f00] transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {/* ================= BLOG LIST ================= */}
        {!loading && !error && displayedBlogs.length > 0 && (
          <section className="mt-[50px]">
            {displayedBlogs.map((blog, index) => {
              const blogId = blog?.id ?? index;
              const isSaved = savedPosts.includes(blogId);

              return (
                <article
                  key={blogId}
                  className="w-full border-b border-[#e2e2e2] pb-[40px] mb-[40px]"
                >
                  <div className="grid grid-cols-[1fr_250px] gap-[60px] max-[900px]:grid-cols-[1fr_200px] max-[700px]:grid-cols-1">
                    <div className="min-w-0">
                      <div className="flex items-center gap-[12px]">
                        <div className="h-[30px] w-[30px] shrink-0 overflow-hidden rounded-full bg-[#eeeeee]">
                          <Image
                            src="/images/profile.png"
                            alt="Author"
                            width={30}
                            height={30}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <span className="text-[14px] font-medium text-[#111111]">
                          {getAuthor(blog)}
                        </span>
                        <span className="flex h-[22px] min-w-[50px] items-center justify-center rounded-full bg-[#ffd58d] px-[10px] text-[10px] font-medium text-[#ffffff]">
                          Admin
                        </span>
                      </div>

                      <Link href={`/admin/blog/edit/${blogId}`} className="mt-[15px] block max-w-[600px]">
                        <h2 className="text-[22px] font-bold leading-[30px] text-[#111111] hover:text-[#ff9900] transition-colors">
                          {getTitle(blog)}
                        </h2>
                      </Link>

                      <p className="mt-[12px] max-w-[600px] text-[14px] font-normal leading-[22px] text-[#777777]">
                        {getPreview(blog)}
                      </p>

                      <div className="mt-[25px] flex items-center gap-[25px]">
                        <span className="text-[11px] font-normal text-[#777777]">
                          {getDate(blog)}
                        </span>
                        <span className="text-[11px] font-normal text-[#777777]">
                          {getReadTime(blog)}
                        </span>
                        <button
                          type="button"
                          onClick={() => toggleSaved(blogId)}
                          aria-label={isSaved ? "Remove from saved" : "Save blog"}
                          className="flex h-[20px] w-[20px] items-center justify-center hover:opacity-70"
                        >
                          <svg
                            width="12"
                            height="15"
                            viewBox="0 0 8 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1.2C1 .758 1.358.4 1.8.4h4.4c.442 0 .8.358.8.8v7.6L4 7.3 1 8.8V1.2Z"
                              stroke={isSaved ? "#ff9900" : "#777777"}
                              strokeWidth="0.7"
                              fill={isSaved ? "#ff9900" : "none"}
                            />
                          </svg>
                        </button>
                        <Link
                          href={`/admin/blog/edit/${blogId}`}
                          className="flex items-center gap-[6px] text-[11px] font-medium text-[#ff9900] hover:underline"
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 8 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.85.65a.7.7 0 0 1 .99.99L2.1 6.37.5 6.8l.43-1.6L5.85.65Z"
                              stroke="#ff9900"
                              strokeWidth="0.7"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>Edit</span>
                        </Link>
                      </div>
                    </div>

                    <Link
                      href={`/admin/blog/edit/${blogId}`}
                      className="block h-[180px] w-[250px] overflow-hidden rounded-[12px] bg-[#eeeeee] max-[900px]:h-[160px] max-[900px]:w-[200px] max-[700px]:mt-[20px] max-[700px]:h-[220px] max-[700px]:w-full"
                    >
                      <Image
                        src={getImageUrl(blog)}
                        alt={getTitle(blog)}
                        width={250}
                        height={180}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                        unoptimized
                      />
                    </Link>
                  </div>
                </article>
              );
            })}
          </section>
        )}

        {/* ================= NO BLOGS ================= */}
        {!loading && !error && displayedBlogs.length === 0 && (
          <div className="mt-[80px] text-center">
            <h2 className="text-[20px] font-semibold text-[#111111]">
              {activeTab === "Saved" ? "No Saved Posts" : "No Blog Posts Found"}
            </h2>
            <p className="mt-[10px] text-[14px] text-[#777777]">
              {activeTab === "Saved"
                ? "You have not saved any blog posts yet."
                : "There are currently no blog posts available."}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}