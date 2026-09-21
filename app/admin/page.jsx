"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import useAuthStore from "@/store/authStore";
import { API_BASE_URL } from "@/lib/site-config";

const API_URL = `${API_BASE_URL}/auth/admin-login`;

function AdminLoginForm() {
  const searchParams = useSearchParams();

  const login = useAuthStore((state) => state.login);

  const redirectTo =
    searchParams.get("redirect") || "/admin/dashboard";

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!password.trim()) {
      setError("Please enter your password.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          password: password,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        if (response.status === 422 && data?.detail) {
          if (Array.isArray(data.detail)) {
            const validationMessage = data.detail
              .map((item) => {
                if (typeof item === "string") {
                  return item;
                }

                return item?.msg || "";
              })
              .filter(Boolean)
              .join(", ");

            setError(
              validationMessage ||
                "Please check the information you entered."
            );
          } else {
            setError(String(data.detail));
          }

          return;
        }

        setError(
          data?.detail ||
            data?.message ||
            data?.error ||
            "Invalid admin email or password."
        );

        return;
      }

      // =====================================================
      // GET TOKEN
      // =====================================================

      let token = null;

      if (typeof data === "string") {
        token = data;
      } else if (data?.token) {
        token = data.token;
      } else if (data?.access_token) {
        token = data.access_token;
      } else if (data?.accessToken) {
        token = data.accessToken;
      } else if (data?.data?.token) {
        token = data.data.token;
      } else if (data?.data?.access_token) {
        token = data.data.access_token;
      }

      // =====================================================
      // NO TOKEN
      // =====================================================

      if (!token) {
        console.error(
          "No token returned by admin login:",
          data
        );

        setError(
          "Login succeeded, but the server did not return an admin token."
        );

        return;
      }

      // =====================================================
      // SAVE TOKEN
      // =====================================================

      login(token);

      // Also save it directly so other pages can access it.
      try {
        localStorage.setItem("admin_token", token);
      } catch (storageError) {
        console.error(
          "Could not save admin token:",
          storageError
        );
      }

      setSuccess("Admin login successful!");

      // =====================================================
      // REDIRECT
      // =====================================================

      setTimeout(() => {
        window.location.href = redirectTo;
      }, 700);
    } catch (err) {
      console.error("LOGIN FETCH ERROR:", err);

      if (
        err instanceof TypeError &&
        err.message === "Failed to fetch"
      ) {
        setError(
          "Unable to connect to the login server. Please make sure your API is running and that CORS allows this website."
        );
      } else {
        setError(
          "Unable to connect to the server. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen w-full bg-white">

      <div className="flex min-h-screen w-full items-start justify-center px-5 py-12 sm:px-8 md:py-20 lg:px-10 lg:py-24">

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full max-w-[600px]"
        >

          {/* =================================================
              LOGO
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="mb-10 flex justify-center sm:mb-12 md:mb-14 lg:mb-[60px]"
          >

            <img
              src="/images/logo.png"
              alt="Toshconsult Technologies"
              className="h-auto w-[110px] object-contain sm:w-[125px] md:w-[140px]"
           
              loading="lazy"
              decoding="async"
            />

          </motion.div>

          {/* =================================================
              TITLE
          ================================================= */}

          <motion.h1
            initial={{
              opacity: 0,
              x: -25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.25,
            }}
            className="mb-9 text-[28px] font-bold leading-[36px] text-[#111111] sm:mb-10 sm:text-[31px] sm:leading-[40px] md:mb-[50px] md:text-[34px] md:leading-[42px]"
          >
            Sign In As An Admin
          </motion.h1>

          {/* =================================================
              FORM
          ================================================= */}

          <form onSubmit={handleSubmit}>

            {/* EMAIL */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.35,
              }}
              className="mb-7 sm:mb-8 md:mb-[35px]"
            >

              <label
                htmlFor="email"
                className="mb-3 block text-[14px] font-medium leading-[20px] text-[#666666] sm:text-[15px] md:mb-[15px] md:text-[16px] md:leading-[22px]"
              >
                EMAIL ADDRESS
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="James.Mike@Gmail.Com"
                autoComplete="email"
                disabled={loading}
                className="
                  h-[58px]
                  w-full
                  rounded-[14px]
                  border
                  border-[#dddddd]
                  bg-white
                  px-[18px]
                  text-[16px]
                  font-normal
                  text-[#444444]
                  outline-none
                  placeholder:text-[#888888]
                  transition-all
                  duration-200
                  focus:border-[#cccccc]
                  focus:ring-2
                  focus:ring-[#ff9900]/10
                  disabled:cursor-not-allowed
                  disabled:bg-[#fafafa]

                  sm:h-[62px]
                  sm:rounded-[15px]
                  sm:px-[21px]
                  sm:text-[17px]

                  md:h-[68px]
                  md:rounded-[16px]
                  md:px-[24px]
                  md:text-[18px]
                "
              />

            </motion.div>

            {/* PASSWORD */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.45,
              }}
              className="mb-7 sm:mb-8 md:mb-[32px]"
            >

              <label
                htmlFor="password"
                className="mb-3 block text-[14px] font-medium leading-[20px] text-[#666666] sm:text-[15px] md:mb-[15px] md:text-[16px] md:leading-[22px]"
              >
                PASSWORD
              </label>

              <div className="relative w-full">

                <input
                  id="password"
                  name="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder="••••••••••••••••"
                  autoComplete="current-password"
                  disabled={loading}
                  className="
                    h-[58px]
                    w-full
                    rounded-[14px]
                    border
                    border-[#dddddd]
                    bg-white
                    px-[18px]
                    pr-[65px]
                    text-[16px]
                    font-normal
                    tracking-[1px]
                    text-[#444444]
                    outline-none
                    placeholder:text-[#888888]
                    transition-all
                    duration-200
                    focus:border-[#cccccc]
                    focus:ring-2
                    focus:ring-[#ff9900]/10
                    disabled:cursor-not-allowed
                    disabled:bg-[#fafafa]

                    sm:h-[62px]
                    sm:rounded-[15px]
                    sm:px-[21px]
                    sm:pr-[68px]
                    sm:text-[17px]

                    md:h-[68px]
                    md:rounded-[16px]
                    md:px-[24px]
                    md:pr-[70px]
                    md:text-[18px]
                  "
                />

                {/* SHOW / HIDE PASSWORD */}

                <motion.button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      (previous) => !previous
                    )
                  }
                  disabled={loading}
                  whileTap={{
                    scale: 0.85,
                  }}
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                  className="
                    absolute
                    right-[12px]
                    top-1/2
                    flex
                    h-[38px]
                    w-[38px]
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    bg-transparent
                    p-0
                    text-[#777777]
                    transition-colors
                    duration-200
                    hover:text-[#333333]
                    disabled:cursor-not-allowed

                    sm:right-[15px]
                    sm:h-[40px]
                    sm:w-[40px]

                    md:right-[18px]
                    md:h-[42px]
                    md:w-[42px]
                  "
                >

                  <AnimatePresence mode="wait">

                    {showPassword ? (
                      <motion.svg
                        key="hide"
                        initial={{
                          opacity: 0,
                          scale: 0.7,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.7,
                        }}
                        transition={{
                          duration: 0.15,
                        }}
                        width="27"
                        height="27"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >

                        <path
                          d="M3 3L21 21"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                        />

                        <path
                          d="M10.6 10.6C10.24 10.96 10.04 11.45 10.04 12C10.04 13.08 10.92 13.96 12 13.96C12.55 13.96 13.04 13.76 13.4 13.4"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                        />

                        <path
                          d="M9.88 5.08C10.55 4.87 11.26 4.76 12 4.76C18.5 4.76 22 12 22 12C22 12 20.83 14.42 18.6 16.44"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        <path
                          d="M6.61 6.61C3.7 8.55 2 12 2 12C2 12 5.5 19.24 12 19.24C13.64 19.24 15.13 18.84 16.44 18.16"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                      </motion.svg>
                    ) : (
                      <motion.svg
                        key="show"
                        initial={{
                          opacity: 0,
                          scale: 0.7,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.7,
                        }}
                        transition={{
                          duration: 0.15,
                        }}
                        width="27"
                        height="27"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >

                        <path
                          d="M2 12C2 12 5.5 5 12 5C18.5 5 22 12 22 12C22 12 18.5 19 12 19C5.5 19 2 12 2 12Z"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        <circle
                          cx="12"
                          cy="12"
                          r="3"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />

                      </motion.svg>
                    )}

                  </AnimatePresence>

                </motion.button>

              </div>

            </motion.div>

            {/* ERROR */}

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="mb-6 overflow-hidden rounded-[14px] border border-red-100 bg-red-50 px-[18px] py-[14px] sm:px-[20px] sm:py-[16px] md:mb-[28px]"
                >

                  <p className="text-[14px] leading-[21px] text-red-600 sm:text-[15px] sm:leading-[22px]">
                    {error}
                  </p>

                </motion.div>
              )}
            </AnimatePresence>

            {/* SUCCESS */}

            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="mb-6 overflow-hidden rounded-[14px] border border-green-100 bg-green-50 px-[18px] py-[14px] sm:px-[20px] sm:py-[16px] md:mb-[28px]"
                >

                  <p className="text-[14px] leading-[21px] text-green-600 sm:text-[15px] sm:leading-[22px]">
                    {success}
                  </p>

                </motion.div>
              )}
            </AnimatePresence>

            {/* LOGIN BUTTON */}

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={
                !loading
                  ? { scale: 1.01 }
                  : {}
              }
              whileTap={
                !loading
                  ? { scale: 0.98 }
                  : {}
              }
              className="
                h-[58px]
                w-full
                rounded-[14px]
                bg-[#ff9900]
                text-[16px]
                font-semibold
                text-white
                shadow-sm
                transition-all
                duration-200
                hover:bg-[#f28f00]
                hover:shadow-md
                disabled:cursor-not-allowed
                disabled:opacity-70

                sm:h-[62px]
                sm:rounded-[15px]
                sm:text-[17px]

                md:h-[68px]
                md:rounded-[16px]
                md:text-[18px]
              "
            >

              {loading ? (
                <span className="flex items-center justify-center gap-3">

                  <motion.span
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="h-5 w-5 rounded-full border-2 border-white border-t-transparent"
                  />

                  Logging in...

                </span>
              ) : (
                "Login"
              )}

            </motion.button>

          </form>

        </motion.div>

      </div>

    </main>
  );
}

export default function AdminPage() {
  return (
    <Suspense fallback={null}>
      <AdminLoginForm />
    </Suspense>
  );
}