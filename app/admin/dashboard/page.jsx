"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { API_BASE_URL } from "@/lib/site-config";

const API_URL = `${API_BASE_URL}/blogs`;

export default function AdminDashboardPage() {
  const router = useRouter();

  /* =========================================================
     AUTHENTICATION STATE
  ========================================================= */
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authChecking, setAuthChecking] = useState(true);

  /* =========================================================
     BLOG STATE
  ========================================================= */
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* =========================================================
     FILTER STATE
  ========================================================= */
  const [activeTab, setActiveTab] = useState("All Post");

  /* =========================================================
     SAVED POSTS
  ========================================================= */
  const [savedPosts, setSavedPosts] = useState([]);

  /* =========================================================
     SIDEBAR STATE
  ========================================================= */
  const [sidebarOpen, setSidebarOpen] = useState(false);

  /* =========================================================
     GET BLOGS FROM API
  ========================================================= */
  const fetchBlogs = useCallback(
    async (token) => {
      try {
        setLoading(true);
        setError("");

        if (!token) {
          localStorage.removeItem("admin_token");
          router.replace("/admin?redirect=/admin/dashboard");
          return;
        }

        const response = await fetch(API_URL, {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          cache: "no-store",
        });

        if (
          response.status === 401 ||
          response.status === 403
        ) {
          localStorage.removeItem("admin_token");
          setIsAuthenticated(false);
          router.replace("/admin?redirect=/admin/dashboard");
          return;
        }

        if (!response.ok) {
          throw new Error(
            `Failed to load blogs: ${response.status}`
          );
        }

        const data = await response.json();

        let blogData = data;

        if (!Array.isArray(blogData)) {
          if (Array.isArray(data?.blogs)) {
            blogData = data.blogs;
          } else if (Array.isArray(data?.data)) {
            blogData = data.data;
          } else if (Array.isArray(data?.results)) {
            blogData = data.results;
          }
        }

        if (!Array.isArray(blogData)) {
          throw new Error(
            "Invalid blog data received from server."
          );
        }

        setBlogs(blogData);
      } catch (err) {
        console.error("BLOG API ERROR:", err);

        if (err?.name === "AbortError") {
          return;
        }

        setError(
          err?.message ||
            "Unable to load blogs. Please try again."
        );
      } finally {
        setLoading(false);
      }
    },
    [router]
  );

  /* =========================================================
     CHECK ADMIN LOGIN
  ========================================================= */
  useEffect(() => {
    let mounted = true;

    const checkAuthentication = async () => {
      try {
        const token =
          localStorage.getItem("admin_token");

        if (!token) {
          if (mounted) {
            setIsAuthenticated(false);
            setAuthChecking(false);
            setLoading(false);
          }
          router.replace(
            "/admin?redirect=/admin/dashboard"
          );
          return;
        }

        if (mounted) {
          setIsAuthenticated(true);
          setAuthChecking(false);
        }

        await fetchBlogs(token);
      } catch (err) {
        console.error(
          "AUTHENTICATION ERROR:",
          err
        );
        localStorage.removeItem("admin_token");
        if (mounted) {
          setIsAuthenticated(false);
          setAuthChecking(false);
          setLoading(false);
        }
        router.replace(
          "/admin?redirect=/admin/dashboard"
        );
      }
    };

    checkAuthentication();

    return () => {
      mounted = false;
    };
  }, [fetchBlogs, router]);

  /* =========================================================
     GET BLOG TITLE
  ========================================================= */
  const getTitle = (blog) => {
    return (
      blog?.title ||
      blog?.name ||
      blog?.headline ||
      "Wanna Break Into Software Engineering In 2023? Think Twice"
    );
  };

  /* =========================================================
     CLEAN HTML
  ========================================================= */
  const cleanText = (content) => {
    if (!content) {
      return "";
    }

    return String(content)
      .replace(
        /<script[\s\S]*?<\/script>/gi,
        ""
      )
      .replace(
        /<style[\s\S]*?<\/style>/gi,
        ""
      )
      .replace(/<[^>]*>/g, " ")
      .replace(/&nbsp;/gi, " ")
      .replace(/&amp;/gi, "&")
      .replace(/&quot;/gi, '"')
      .replace(/&#39;/gi, "'")
      .replace(/\s+/g, " ")
      .trim();
  };

  /* =========================================================
     GET BLOG PREVIEW
  ========================================================= */
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
      return "It Won't Be Smooth Sailing For You — I Am A Refugee. I Didn't Come From A Background In Data Science, Computer Science, Math, Or Statistics. But I've Successfully Transitioned Into A Data Science Job. Some Friends...";
    }

    if (text.length > 190) {
      return `${text
        .substring(0, 190)
        .trim()}...`;
    }

    return text;
  };

  /* =========================================================
     GET BLOG IMAGE
  ========================================================= */
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

    if (!possibleImage) {
      return "/images/blog1.png";
    }

    if (
      typeof possibleImage === "string" &&
      possibleImage.startsWith("/")
    ) {
      return `https://toshconsultblogfastapi.onrender.com${possibleImage}`;
    }

    return possibleImage;
  };

  /* =========================================================
     GET AUTHOR
  ========================================================= */
  const getAuthor = (blog) => {
    return (
      blog?.author_name ||
      blog?.authorName ||
      blog?.author ||
      blog?.username ||
      "Toshmoney"
    );
  };

  /* =========================================================
     GET DATE
  ========================================================= */
  const getDate = (blog) => {
    const dateValue =
      blog?.created_at ||
      blog?.createdAt ||
      blog?.date ||
      blog?.published_at ||
      blog?.publishedAt;

    if (!dateValue) {
      return "Jan 11, 2023";
    }

    try {
      const date = new Date(dateValue);

      if (Number.isNaN(date.getTime())) {
        return "Jan 11, 2023";
      }

      return date.toLocaleDateString(
        "en-US",
        {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }
      );
    } catch {
      return "Jan 11, 2023";
    }
  };

  /* =========================================================
     GET READ TIME
  ========================================================= */
  const getReadTime = (blog) => {
    if (blog?.read_time) {
      return blog.read_time;
    }

    if (blog?.readTime) {
      return blog.readTime;
    }

    const content = cleanText(
      blog?.content ||
        blog?.description ||
        blog?.excerpt ||
        blog?.body ||
        ""
    );

    if (!content) {
      return "5min Read";
    }

    const words =
      content.split(/\s+/).length;

    const minutes = Math.max(
      1,
      Math.ceil(words / 200)
    );

    return `${minutes}min Read`;
  };

  /* =========================================================
     SAVE / UNSAVE BLOG
  ========================================================= */
  const toggleSaved = (id) => {
    setSavedPosts((previous) => {
      if (previous.includes(id)) {
        return previous.filter(
          (item) => item !== id
        );
      }

      return [...previous, id];
    });
  };

  /* =========================================================
     FILTER BLOGS
  ========================================================= */
  const displayedBlogs =
    activeTab === "Saved"
      ? blogs.filter((blog, index) =>
          savedPosts.includes(
            blog?.id ?? index
          )
        )
      : blogs;

  /* =========================================================
     AUTH CHECK SCREEN
  ========================================================= */
  if (authChecking) {
    return (
      <main className="flex min-h-screen w-full items-center justify-center bg-white">
        <div className="text-center">
          <div
            className="
              mx-auto
              h-[40px]
              w-[40px]
              animate-spin
              rounded-full
              border-[4px]
              border-[#eeeeee]
              border-t-[#C026D3]
            "
          />
          <p className="mt-[15px] text-[12px] text-[#777777]">
            Checking authentication...
          </p>
        </div>
      </main>
    );
  }

  /* =========================================================
     NOT AUTHENTICATED
  ========================================================= */
  if (!isAuthenticated) {
    return null;
  }

  /* =========================================================
     DASHBOARD WITH SIDEBAR
  ========================================================= */
  return (
    <div className="flex min-h-screen w-full bg-[#faf7ff]">
      {/* =====================================================
          SIDEBAR OVERLAY (Mobile)
      ===================================================== */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* =====================================================
          SIDEBAR - LIGHT PURPLE THEME
      ===================================================== */}
      <aside
        className={`
          fixed
          left-0
          top-0
          z-50
          h-full
          w-[280px]
          bg-[#FDF4FF]
          shadow-xl
          transition-transform
          duration-300
          ease-in-out
          lg:translate-x-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Sidebar Header */}
        <div className="flex h-[80px] items-center border-b border-[#F3D8FF] px-[24px]">
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
        </div>

        {/* Sidebar Navigation - LIGHT PURPLE THEME */}
        <nav className="mt-[30px] px-[16px]">
          {/* Blog Posts (was Dashboard) */}
          <Link
            href="/admin/dashboard"
            className="
              flex
              items-center
              gap-[14px]
              rounded-[12px]
              bg-[#EDE9FE]
              px-[16px]
              py-[12px]
              text-[14px]
              font-medium
              text-[#A21CAF]
              transition-colors
            "
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 4H20V20H4V4Z"
                stroke="#A21CAF"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M8 8H16M8 12H14M8 16H12"
                stroke="#A21CAF"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span>Blog Posts</span>
          </Link>

          {/* Create Post */}
          <Link
            href="/admin/createblog"
            className="
              mt-[8px]
              flex
              items-center
              gap-[14px]
              rounded-[12px]
              px-[16px]
              py-[12px]
              text-[14px]
              font-medium
              text-[#A21CAF]
              transition-colors
              hover:bg-[#EDE9FE]
            "
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 5V19M5 12H19"
                stroke="#A21CAF"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span>Create Post</span>
          </Link>

          {/* Contact */}
          <Link
            href="/admin/contact_notification"
            className="
              mt-[8px]
              flex
              items-center
              gap-[14px]
              rounded-[12px]
              px-[16px]
              py-[12px]
              text-[14px]
              font-medium
              text-[#A21CAF]
              transition-colors
              hover:bg-[#EDE9FE]
            "
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 15C21 15.5523 20.5523 16 20 16H9L3 21V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V15Z"
                stroke="#A21CAF"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <span>Contact</span>
          </Link>

          {/* Application */}
          <Link
            href="/admin/applicationss"
            className="
              mt-[8px]
              flex
              items-center
              gap-[14px]
              rounded-[12px]
              px-[16px]
              py-[12px]
              text-[14px]
              font-medium
              text-[#A21CAF]
              transition-colors
              hover:bg-[#EDE9FE]
            "
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 4H20V20H4V4Z"
                stroke="#A21CAF"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M8 8H16M8 12H14M8 16H12"
                stroke="#A21CAF"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span>Application</span>
          </Link>

          {/* Career */}
          <Link
            href="/admin/applicationss"
            className="
              mt-[8px]
              flex
              items-center
              gap-[14px]
              rounded-[12px]
              px-[16px]
              py-[12px]
              text-[14px]
              font-medium
              text-[#A21CAF]
              transition-colors
              hover:bg-[#EDE9FE]
            "
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="#A21CAF"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="#A21CAF"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="#A21CAF"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <span>Career</span>
          </Link>

          {/* Logout */}
          <button
            onClick={() => {
              localStorage.removeItem("admin_token");
              router.replace("/admin");
            }}
            className="
              mt-[30px]
              flex
              w-full
              items-center
              gap-[14px]
              rounded-[12px]
              px-[16px]
              py-[12px]
              text-[14px]
              font-medium
              text-[#ff4444]
              transition-colors
              hover:bg-[#fff0f0]
            "
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                stroke="#ff4444"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 17L21 12L16 7"
                stroke="#ff4444"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 12H9"
                stroke="#ff4444"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Logout</span>
          </button>
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-[#F3D8FF] p-[20px]">
          <div className="flex items-center gap-[12px]">
            <div className="h-[40px] w-[40px] overflow-hidden rounded-full bg-[#D946EF] flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <div>
              <p className="text-[13px] font-medium text-[#111111]">Admin</p>
              <p className="text-[11px] text-[#777777]">admin@toshconsult.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}
      <main className="flex-1 lg:ml-[280px]">
        {/* ===================================================
            HEADER
        =================================================== */}
        <header className="sticky top-0 z-30 bg-white shadow-sm">
          <div className="flex h-[80px] items-center justify-between px-[40px] max-[700px]:px-[20px]">
            {/* Left Section */}
            <div className="flex items-center gap-[16px]">
              {/* Hamburger Button (Mobile) */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden"
                aria-label="Toggle sidebar"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 12H21M3 6H21M3 18H21"
                    stroke="#111111"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              <h1 className="text-[20px] font-bold text-[#111111] max-[600px]:text-[16px]">
                Blog Posts
              </h1>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-[20px]">
              {/* Profile - Light Purple Avatar */}
              <button className="h-[40px] w-[40px] overflow-hidden rounded-full border border-[#F3D8FF] bg-[#D946EF] flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </button>
            </div>
          </div>
        </header>

        {/* ===================================================
            PAGE CONTENT
        =================================================== */}
        <div className="px-[40px] pb-[80px] pt-[30px] max-[700px]:px-[20px]">
          {/* =================================================
              BREADCRUMB
          ================================================= */}
          <div className="flex items-center gap-[10px]">
            <Link
              href="/"
              className="text-[12px] font-normal text-[#777777] hover:text-[#111111]"
            >
              Home
            </Link>
            <span className="text-[12px] text-[#aaaaaa]">&gt;</span>
            <span className="text-[12px] font-normal text-[#777777]">
              Blog Posts
            </span>
          </div>

          {/* =================================================
              STATISTICS CARDS
          ================================================= */}
          <section className="mt-[30px]">
            <div className="grid grid-cols-2 gap-[20px] max-[500px]:grid-cols-1">
              <div className="rounded-[16px] border border-[#E9D5FF] bg-white p-[20px] transition-all duration-200 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[13px] font-normal text-[#777777]">
                      Total Posts
                    </p>
                    <h3 className="mt-[5px] text-[28px] font-bold text-[#111111]">
                      {blogs.length}
                    </h3>
                  </div>
                  <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[12px] bg-[#FDF4FF]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 4H20V20H4V4Z"
                        stroke="#C026D3"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 8H16M8 12H14M8 16H12"
                        stroke="#C026D3"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="rounded-[16px] border border-[#E9D5FF] bg-white p-[20px] transition-all duration-200 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[13px] font-normal text-[#777777]">
                      Saved Posts
                    </p>
                    <h3 className="mt-[5px] text-[28px] font-bold text-[#111111]">
                      {savedPosts.length}
                    </h3>
                  </div>
                  <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[12px] bg-[#FDF4FF]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z"
                        stroke="#C026D3"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =================================================
              FILTERS
          ================================================= */}
          <section className="mt-[40px] flex items-center justify-between gap-[20px] max-[600px]:items-start">
            <div className="flex items-center gap-[15px] max-[600px]:flex-wrap">
              <button
                type="button"
                onClick={() => setActiveTab("All Post")}
                className={`
                  flex
                  h-[44px]
                  items-center
                  justify-center
                  rounded-[12px]
                  px-[30px]
                  text-[14px]
                  font-medium
                  transition-all
                  duration-200
                  ${
                    activeTab === "All Post"
                      ? "bg-[#C026D3] text-white shadow-lg shadow-purple-200"
                      : "border border-[#E9D5FF] bg-white text-[#777777] hover:border-[#C026D3]"
                  }
                `}
              >
                All Post
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("Popular")}
                className={`
                  flex
                  h-[44px]
                  items-center
                  justify-center
                  rounded-[12px]
                  px-[30px]
                  text-[14px]
                  font-medium
                  transition-all
                  duration-200
                  ${
                    activeTab === "Popular"
                      ? "bg-[#C026D3] text-white shadow-lg shadow-purple-200"
                      : "border border-[#E9D5FF] bg-white text-[#777777] hover:border-[#C026D3]"
                  }
                `}
              >
                Popular
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("Saved")}
                className={`
                  flex
                  h-[44px]
                  items-center
                  justify-center
                  rounded-[12px]
                  px-[30px]
                  text-[14px]
                  font-medium
                  transition-all
                  duration-200
                  ${
                    activeTab === "Saved"
                      ? "bg-[#C026D3] text-white shadow-lg shadow-purple-200"
                      : "border border-[#E9D5FF] bg-white text-[#777777] hover:border-[#C026D3]"
                  }
                `}
              >
                Saved
              </button>
            </div>

            <Link
              href="/admin/createblog"
              className="
                flex
                h-[44px]
                w-[150px]
                shrink-0
                items-center
                justify-center
                gap-[8px]
                rounded-[12px]
                bg-[#C026D3]
                text-[14px]
                font-medium
                text-white
                shadow-lg
                shadow-purple-200
                transition-all
                duration-200
                hover:bg-[#A21CAF]
                hover:shadow-xl
                active:scale-[0.97]
                max-[600px]:w-[130px]
                max-[430px]:h-[40px]
                max-[430px]:text-[12px]
              "
            >
              <span className="text-[20px] font-normal leading-none">+</span>
              <span>Create Post</span>
            </Link>
          </section>

          {/* =================================================
              LOADING BLOGS
          ================================================= */}
          {loading && blogs.length === 0 && !error && (
            <div className="flex min-h-[400px] items-center justify-center">
              <div className="text-center">
                <div className="mx-auto h-[40px] w-[40px] animate-spin rounded-full border-[4px] border-[#eeeeee] border-t-[#C026D3]" />
                <p className="mt-[15px] text-[14px] text-[#777777]">
                  Loading blogs...
                </p>
              </div>
            </div>
          )}

          {/* =================================================
              ERROR
          ================================================= */}
          {!loading && error && (
            <div className="mt-[50px] rounded-[12px] border border-[#E9D5FF] bg-[#FDF4FF] p-[40px] text-center">
              <p className="text-[14px] text-[#777777]">{error}</p>
              <button
                type="button"
                onClick={() => {
                  const token = localStorage.getItem("admin_token");
                  if (!token) {
                    router.replace("/admin?redirect=/admin/dashboard");
                    return;
                  }
                  fetchBlogs(token);
                }}
                className="mt-[20px] rounded-[10px] bg-[#C026D3] px-[30px] py-[12px] text-[14px] font-medium text-white transition-colors hover:bg-[#A21CAF]"
              >
                Try Again
              </button>
            </div>
          )}

          {/* =================================================
              BLOG LIST
          ================================================= */}
          {!loading && !error && displayedBlogs.length > 0 && (
            <section className="mt-[50px]">
              {displayedBlogs.map((blog, index) => {
                const blogId = blog?.id ?? index;
                const isSaved = savedPosts.includes(blogId);

                return (
                  <article
                    key={blogId}
                    className="mb-[40px] w-full border-b border-[#E9D5FF] pb-[40px]"
                  >
                    <div className="grid grid-cols-[1fr_250px] gap-[60px] max-[1000px]:grid-cols-[1fr_220px] max-[800px]:grid-cols-[1fr_190px] max-[650px]:grid-cols-1">
                      {/* LEFT SIDE */}
                      <div className="min-w-0">
                        {/* AUTHOR */}
                        <div className="flex items-center gap-[12px]">
                          <div className="h-[30px] w-[30px] shrink-0 overflow-hidden rounded-full bg-[#D946EF] flex items-center justify-center">
                            <span className="text-white font-bold text-xs">
                              {getAuthor(blog).charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <span className="text-[14px] font-medium text-[#111111]">
                            {getAuthor(blog)}
                          </span>
                          <span className="flex h-[22px] min-w-[50px] items-center justify-center rounded-full bg-[#C026D3] px-[10px] text-[10px] font-medium text-white">
                            Admin
                          </span>
                        </div>

                        {/* TITLE */}
                        <Link
                          href={`/admin/blog/${blogId}`}
                          className="mt-[15px] block max-w-[600px]"
                        >
                          <h2 className="text-[22px] font-bold leading-[30px] text-[#111111] transition-colors hover:text-[#C026D3] max-[650px]:text-[20px] max-[650px]:leading-[27px]">
                            {getTitle(blog)}
                          </h2>
                        </Link>

                        {/* DESCRIPTION */}
                        <p className="mt-[12px] max-w-[600px] text-[14px] font-normal leading-[22px] text-[#777777]">
                          {getPreview(blog)}
                        </p>

                        {/* META INFORMATION */}
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
                            className="flex h-[20px] w-[20px] items-center justify-center transition-opacity hover:opacity-60"
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
                                stroke={isSaved ? "#C026D3" : "#777777"}
                                strokeWidth="0.7"
                                fill={isSaved ? "#C026D3" : "none"}
                              />
                            </svg>
                          </button>
                          <Link
                            href={`/admin/blog/edit/${blogId}`}
                            className="flex items-center gap-[6px] text-[11px] font-medium text-[#A21CAF] hover:underline"
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
                                stroke="#A21CAF"
                                strokeWidth="0.7"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span>Edit</span>
                          </Link>
                        </div>
                      </div>

                      {/* RIGHT BLOG IMAGE */}
                      <Link
                        href={`/admin/blog/${blogId}`}
                        className="block h-[180px] w-[250px] overflow-hidden rounded-[12px] bg-[#FDF4FF] max-[1000px]:h-[170px] max-[1000px]:w-[220px] max-[800px]:h-[150px] max-[800px]:w-[190px] max-[650px]:mt-[20px] max-[650px]:h-[250px] max-[650px]:w-full"
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

          {/* =================================================
              NO BLOGS
          ================================================= */}
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
              {activeTab !== "Saved" && (
                <Link
                  href="/admin/createblog"
                  className="mt-[25px] inline-flex h-[44px] items-center justify-center rounded-[12px] bg-[#C026D3] px-[30px] text-[14px] font-medium text-white transition-colors hover:bg-[#A21CAF]"
                >
                  Create Post
                </Link>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}