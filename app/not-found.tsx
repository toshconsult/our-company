import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[70vh] w-full flex-col items-center justify-center px-8 pt-[100px] text-center">
        <p className="text-[13px] font-medium text-[#f6a000]">404</p>
        <h1 className="mt-4 text-[28px] font-medium text-black sm:text-[34px]">
          We couldn&apos;t find that page
        </h1>
        <p className="mx-auto mt-4 max-w-[480px] text-[14px] leading-[1.7] text-[#777777]">
          The page you&apos;re looking for may have moved or no longer
          exists. Here are a few places to try instead.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="flex h-[44px] items-center justify-center rounded-[9px] bg-[#f6a000] px-6 text-[13px] font-medium text-white no-underline transition-colors hover:bg-[#e99500]"
          >
            Go to Homepage
          </Link>
          <Link
            href="/services"
            className="flex h-[44px] items-center justify-center rounded-[9px] border border-[#e0e0e0] px-6 text-[13px] font-medium text-[#333333] no-underline transition-colors hover:border-[#c83db6] hover:text-[#c83db6]"
          >
            View Services
          </Link>
          <Link
            href="/contact"
            className="flex h-[44px] items-center justify-center rounded-[9px] border border-[#e0e0e0] px-6 text-[13px] font-medium text-[#333333] no-underline transition-colors hover:border-[#c83db6] hover:text-[#c83db6]"
          >
            Contact Us
          </Link>
        </div>
      </main>
    </>
  );
}
