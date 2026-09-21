"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { API_BASE_URL } from "@/lib/site-config";

const API_URL = `${API_BASE_URL}/blogs`;

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();
  const blogId = params?.id;

  // Form state
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(true);
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [existingImageUrl, setExistingImageUrl] = useState(null);

  // Load state
  const [fetching, setFetching] = useState(true);
  const [fetchError, setFetchError] = useState("");

  // Submit state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      router.push(`/admin?redirect=/admin/blog/edit/${blogId}`);
      return;
    }
    if (!blogId) return;

    const loadBlog = async () => {
      try {
        const response = await fetch(`${API_URL}/${blogId}`, {
          method: "GET",
          headers: { Accept: "application/json" },
        });

        if (!response.ok) {
          throw new Error(`Unable to load this post (${response.status}).`);
        }

        const data = await response.json();
        setTitle(data?.title || "");
        setContent(data?.content || data?.description || data?.body || "");
        setPublished(data?.published ?? true);
        setExistingImageUrl(data?.image || data?.image_url || data?.imageUrl || null);
      } catch (err) {
        setFetchError(err.message || "Unable to load this blog post.");
      } finally {
        setFetching(false);
      }
    };

    loadBlog();
  }, [blogId, router]);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("admin_token");
      if (!token) {
        router.push("/admin");
        return;
      }

      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("published", String(published));
      if (image) {
        formData.append("image", image);
      }

      const response = await fetch(`${API_URL}/${blogId}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem("admin_token");
          router.push("/admin");
          return;
        }
        throw new Error(`Failed to update post: ${response.status}`);
      }

      router.push("/admin/blog");
      router.refresh();
    } catch (err) {
      setError(err.message || "Unable to update this blog post.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen w-full bg-white text-[#111111]">
      <div className="h-[2px] w-full bg-[#111111]" />

      <header className="w-full bg-white border-b border-[#f0f0f0]">
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
            <Link href="/admin/blog" className="text-[14px] font-normal text-[#ff9900]">
              Blog
            </Link>
            <Link href="/admin/contact_notification" className="text-[14px] font-normal text-[#666666] hover:text-[#111111]">
              Contact
            </Link>
            <Link href="/admin/applicationss" className="text-[14px] font-normal text-[#666666] hover:text-[#111111]">
              Application
            </Link>
          </nav>

          <div className="h-[45px] w-[45px] shrink-0 overflow-hidden rounded-full border border-[#eeeeee]">
            <Image
              src="/images/profile.png"
              alt="Admin profile"
              width={45}
              height={45}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </header>

      <div className="mx-auto w-full max-w-[1400px] px-[40px] py-[40px]">

        <div className="flex items-center justify-between mb-[30px]">
          <div>
            <h1 className="text-[32px] font-bold leading-[40px] text-[#111111]">
              Edit Blog Post
            </h1>
            <div className="mt-[10px] flex items-center gap-[10px]">
              <Link href="/admin/blog" className="text-[12px] font-normal text-[#777777] hover:text-[#111111]">
                Blog
              </Link>
              <span className="text-[12px] text-[#aaaaaa]">&gt;</span>
              <span className="text-[12px] font-normal text-[#ff9900]">Edit</span>
            </div>
          </div>

          <Link
            href="/admin/blog"
            className="flex h-[40px] items-center justify-center rounded-[10px] border border-[#e5e5e5] bg-white px-[20px] text-[12px] font-medium text-[#777777] hover:border-[#999] transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>

        {fetching ? (
          <div className="flex h-[300px] items-center justify-center text-[14px] text-[#777777]">
            Loading post...
          </div>
        ) : fetchError ? (
          <div className="rounded-[10px] border border-red-200 bg-red-50 p-[20px] text-[13px] text-red-600">
            {fetchError}
          </div>
        ) : (
          <div className="grid grid-cols-[1fr_450px] gap-[40px] max-[1100px]:grid-cols-1">

            <form onSubmit={handleSubmit} className="space-y-[25px] bg-white">

              <div>
                <label htmlFor="title" className="block text-[14px] font-medium text-[#111111] mb-[8px]">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  placeholder="Enter your blog title here..."
                  className="w-full h-[50px] rounded-[10px] border border-[#e5e5e5] bg-white px-[15px] text-[14px] text-[#111111] placeholder:text-[#999999] focus:outline-none focus:border-[#ff9900] focus:ring-1 focus:ring-[#ff9900]"
                />
              </div>

              <div>
                <label htmlFor="content" className="block text-[14px] font-medium text-[#111111] mb-[8px]">
                  Content <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  rows={10}
                  placeholder="Write your blog content here..."
                  className="w-full rounded-[10px] border border-[#e5e5e5] bg-white p-[15px] text-[14px] text-[#111111] placeholder:text-[#999999] focus:outline-none focus:border-[#ff9900] focus:ring-1 focus:ring-[#ff9900] resize-none"
                />
              </div>

              <div>
                <label htmlFor="image" className="block text-[14px] font-medium text-[#111111] mb-[8px]">
                  Blog Image
                </label>
                <div className="flex items-center gap-[15px]">
                  <label
                    htmlFor="image"
                    className="cursor-pointer flex h-[45px] items-center justify-center rounded-[10px] border border-[#e5e5e5] bg-white px-[20px] text-[12px] font-medium text-[#777777] hover:border-[#ff9900] hover:text-[#ff9900] transition-colors"
                  >
                    {image ? "Change Image" : existingImageUrl ? "Replace Image" : "Upload Image"}
                  </label>
                  <input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  {image && (
                    <span className="text-[12px] text-[#777777]">{image.name}</span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-[15px]">
                <label className="text-[14px] font-medium text-[#111111]">
                  Published
                </label>
                <button
                  type="button"
                  onClick={() => setPublished(!published)}
                  className={`relative inline-flex h-[26px] w-[46px] items-center rounded-full transition-colors ${
                    published ? "bg-[#ff9900]" : "bg-[#dddddd]"
                  }`}
                >
                  <span
                    className={`inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg transition-transform ${
                      published ? "translate-x-[22px]" : "translate-x-[2px]"
                    }`}
                  />
                </button>
                <span className="text-[12px] text-[#777777]">
                  {published ? "Visible to everyone" : "Hidden as Draft"}
                </span>
              </div>

              {error && (
                <div className="rounded-[10px] border border-red-200 bg-red-50 p-[15px] text-[12px] text-red-600">
                  {error}
                </div>
              )}

              <div className="flex items-center gap-[15px] pt-[10px]">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex h-[48px] w-[180px] items-center justify-center rounded-[12px] bg-[#ff9900] text-[14px] font-medium text-white shadow-lg shadow-orange-200 transition-all duration-200 hover:bg-[#f28f00] active:scale-[0.97] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="h-[20px] w-[20px] animate-spin rounded-full border-[2px] border-white border-t-transparent" />
                  ) : (
                    "Save Changes"
                  )}
                </button>

                <Link
                  href="/admin/blog"
                  className="flex h-[48px] items-center justify-center rounded-[12px] border border-[#e5e5e5] bg-white px-[30px] text-[14px] font-medium text-[#777777] hover:border-[#999] transition-colors"
                >
                  Cancel
                </Link>
              </div>
            </form>

            <div className="sticky top-[20px] self-start">
              <h2 className="text-[18px] font-bold text-[#111111] mb-[20px]">
                Live Preview
              </h2>

              <div className="rounded-[16px] border border-[#e5e5e5] bg-white overflow-hidden shadow-sm">
                <div className="h-[250px] w-full bg-[#eeeeee] relative">
                  {previewUrl ? (
                    <Image
                      src={previewUrl}
                      alt="New image preview"
                      width={450}
                      height={250}
                      className="h-full w-full object-cover"
                      unoptimized
                    />
                  ) : existingImageUrl ? (
                    <Image
                      src={existingImageUrl}
                      alt={title || "Current blog image"}
                      width={450}
                      height={250}
                      className="h-full w-full object-cover"
                      unoptimized
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-[14px] text-[#999999]">
                      Image Preview Here
                    </div>
                  )}
                </div>

                <div className="p-[25px]">
                  <h3 className="text-[20px] font-bold leading-[28px] text-[#111111]">
                    {title || "Your Blog Title Will Appear Here"}
                  </h3>

                  <p className="mt-[10px] text-[13px] font-normal leading-[20px] text-[#777777]">
                    {content ? `${content.substring(0, 220)}...` : "Your content preview will appear here..."}
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </main>
  );
}
