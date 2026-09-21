"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { API_BASE_URL } from "@/lib/site-config";

const API_URL = `${API_BASE_URL}/blogs`;

export default function BlogPostPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("All Post");
  const [savedPosts, setSavedPosts] = useState([]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        cache: "no-store",
      });

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

      setError(
        err?.message ||
          "Unable to load blogs. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const getTitle = (blog) => {
    return (
      blog?.title ||
      blog?.name ||
      blog?.headline ||
      "Untitled Blog Post"
    );
  };

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
      return "Read this article to learn more about the latest insights, ideas, technology and information from Toshconsult.";
    }

    if (text.length > 190) {
      return `${text.substring(0, 190).trim()}...`;
    }

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

    if (!dateValue) {
      return "Jan 11, 2023";
    }

    try {
      const date = new Date(dateValue);

      if (Number.isNaN(date.getTime())) {
        return "Jan 11, 2023";
      }

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

    const words = content.split(/\s+/).length;

    const minutes = Math.max(
      1,
      Math.ceil(words / 200)
    );

    return `${minutes}min Read`;
  };

  const getBlogId = (blog, index) => {
    return blog?.id ?? index;
  };

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

  const displayedBlogs =
    activeTab === "Saved"
      ? blogs.filter((blog, index) =>
          savedPosts.includes(
            getBlogId(blog, index)
          )
        )
      : blogs;

  return (
    <main className="min-h-screen w-full bg-white text-[#111111]">

      {/* NAVBAR */}

      {/* MAIN CONTENT */}
      <div className="mx-auto w-full max-w-[1400px] px-[40px] pb-[80px]">

        {/* BLOG HEADER */}
        <section className="pt-[65px]">

          {/* BREADCRUMB */}
          <div className="flex items-center gap-[10px] text-[14px] text-[#777777]">

            <Link
              href="/"
              className="transition hover:text-black"
            >
              Home
            </Link>

            <span>›</span>

            <span className="text-[#111111]">
              Blog
            </span>

          </div>

          {/* TITLE */}
          <h1 className="mt-[18px] text-[34px] font-[700] leading-[1.2] tracking-[-1px] text-[#111111] md:text-[40px]">
            Our Blog
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-[12px] max-w-[700px] text-[15px] leading-[24px] text-[#777777]">
            Discover our latest articles, insights,
            ideas, technology updates and stories.
          </p>

        </section>

        {/* FILTER BUTTONS */}
        <div className="mt-[40px] flex flex-wrap items-center gap-[10px]">

          <button
            type="button"
            onClick={() => setActiveTab("All Post")}
            className={`rounded-[12px] px-[22px] py-[12px] text-[14px] font-[600] transition ${
              activeTab === "All Post"
                ? "bg-[#ff9900] text-white"
                : "bg-[#f4f4f4] text-[#555555] hover:bg-[#eeeeee]"
            }`}
          >
            All Post
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("Popular")}
            className={`rounded-[12px] px-[22px] py-[12px] text-[14px] font-[600] transition ${
              activeTab === "Popular"
                ? "bg-[#ff9900] text-white"
                : "bg-[#f4f4f4] text-[#555555] hover:bg-[#eeeeee]"
            }`}
          >
            Popular
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("Saved")}
            className={`rounded-[12px] px-[22px] py-[12px] text-[14px] font-[600] transition ${
              activeTab === "Saved"
                ? "bg-[#ff9900] text-white"
                : "bg-[#f4f4f4] text-[#555555] hover:bg-[#eeeeee]"
            }`}
          >
            Saved
          </button>

        </div>

        {/* LOADING */}
        {loading && (
          <div className="flex min-h-[350px] items-center justify-center">

            <div className="text-center">

              <div className="mx-auto h-[42px] w-[42px] animate-spin rounded-full border-[4px] border-[#eeeeee] border-t-[#ff9900]" />

              <p className="mt-[16px] text-[14px] text-[#777777]">
                Loading blogs...
              </p>

            </div>

          </div>
        )}

        {/* ERROR */}
        {!loading && error && (
          <div className="mt-[50px] rounded-[12px] border border-red-200 bg-red-50 p-[25px] text-center">

            <p className="text-[15px] font-[500] text-red-600">
              {error}
            </p>

            <button
              type="button"
              onClick={fetchBlogs}
              className="mt-[15px] rounded-[10px] bg-[#ff9900] px-[22px] py-[11px] text-[14px] font-[600] text-white transition hover:bg-[#e88a00]"
            >
              Try Again
            </button>

          </div>
        )}

        {/* BLOG POSTS */}
        {!loading &&
          !error &&
          displayedBlogs.length > 0 && (
            <section className="mt-[50px]">

              {displayedBlogs.map(
                (blog, index) => {

                  const blogId =
                    getBlogId(blog, index);

                  const imageUrl =
                    getImageUrl(blog);

                  const isSaved =
                    savedPosts.includes(blogId);

                  return (
                    <article
                      key={blogId}
                      className="mb-[40px] border-b border-[#e2e2e2] pb-[40px]"
                    >

                      <div className="grid grid-cols-1 gap-[35px] md:grid-cols-[1fr_250px] md:gap-[60px]">

                        {/* LEFT SIDE */}
                        <div className="min-w-0">

                          {/* AUTHOR */}
                          <div className="flex items-center gap-[10px]">

                            <div className="flex items-center gap-[8px]">

                              <span className="text-[13px] font-[600] text-[#222222]">
                                {getAuthor(blog)}
                              </span>

                              <span className="rounded-[5px] bg-[#fff1dc] px-[7px] py-[3px] text-[10px] font-[600] text-[#ff9900]">
                                Admin
                              </span>

                            </div>

                          </div>

                          {/* BLOG TITLE */}
                          <Link
                            href={`/blog/${blogId}`}
                            className="group block"
                          >

                            <h2 className="mt-[18px] max-w-[750px] text-[22px] font-[700] leading-[30px] tracking-[-0.4px] text-[#111111] transition group-hover:text-[#ff9900]">
                              {getTitle(blog)}
                            </h2>

                          </Link>

                          {/* BLOG PREVIEW */}
                          <p className="mt-[12px] max-w-[650px] text-[14px] leading-[23px] text-[#777777]">
                            {getPreview(blog)}
                          </p>

                          {/* META */}
                          <div className="mt-[22px] flex flex-wrap items-center gap-[12px] text-[12px] text-[#888888]">

                            <span>
                              {getDate(blog)}
                            </span>

                            <span>•</span>

                            <span>
                              {getReadTime(blog)}
                            </span>

                            <span>•</span>

                            {/* SAVE */}
                            <button
                              type="button"
                              onClick={() =>
                                toggleSaved(blogId)
                              }
                              aria-label={
                                isSaved
                                  ? "Remove from saved"
                                  : "Save blog"
                              }
                              className={`flex items-center gap-[5px] transition ${
                                isSaved
                                  ? "text-[#ff9900]"
                                  : "text-[#888888] hover:text-[#ff9900]"
                              }`}
                            >

                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill={
                                  isSaved
                                    ? "currentColor"
                                    : "none"
                                }
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                              </svg>

                              <span>
                                {isSaved
                                  ? "Saved"
                                  : "Save"}
                              </span>

                            </button>

                          </div>

                        </div>

                        {/* RIGHT SIDE IMAGE */}
                        <Link
                          href={`/blog/${blogId}`}
                          className="group block"
                        >

                          <div className="relative h-[220px] w-full overflow-hidden rounded-[8px] bg-[#f3f3f3] md:h-[180px]">

                            <Image
                              src={imageUrl}
                              alt={getTitle(blog)}
                              fill
                              sizes="(max-width: 768px) 100vw, 250px"
                              unoptimized
                              className="object-cover transition duration-500 group-hover:scale-[1.04]"
                            />

                          </div>

                        </Link>

                      </div>

                    </article>
                  );
                }
              )}

            </section>
          )}

        {/* EMPTY STATE */}
        {!loading &&
          !error &&
          displayedBlogs.length === 0 && (
            <div className="flex min-h-[350px] items-center justify-center">

              <div className="text-center">

                <div className="mx-auto flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#f5f5f5]">

                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-[#999999]"
                  >
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>

                </div>

                <h3 className="mt-[18px] text-[18px] font-[700] text-[#222222]">
                  {activeTab === "Saved"
                    ? "No saved posts"
                    : "No blog posts found"}
                </h3>

                <p className="mt-[8px] text-[14px] text-[#888888]">
                  {activeTab === "Saved"
                    ? "Posts you save will appear here."
                    : "There are currently no blog posts available."}
                </p>

              </div>

            </div>
          )}

      </div>

      {/* FOOTER */}

    </main>
  );
}