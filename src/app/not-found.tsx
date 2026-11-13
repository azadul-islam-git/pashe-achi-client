import Link from "next/link";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCompass,
  FaHeart,
  FaHome,
  FaHandsHelping,
} from "react-icons/fa";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-base-200 px-5 py-16 text-base-content">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
        {/* Illustration */}
        <div className="relative mx-auto mb-8 flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64">
          <div className="absolute inset-0 rounded-full border border-emerald-500/20 bg-emerald-500/5" />
          <div className="absolute inset-5 rounded-full border border-dashed border-emerald-500/30" />

          <div className="relative flex h-36 w-36 rotate-[-8deg] items-center justify-center rounded-[2.5rem] border border-base-300 bg-base-100 shadow-2xl sm:h-40 sm:w-40">
            <FaCompass className="text-7xl text-emerald-600 dark:text-emerald-400 sm:text-8xl" />
            <span className="absolute -right-3 -top-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FBBF24] text-emerald-950 shadow-lg">
              <FaHeart className="text-xl" />
            </span>
          </div>

          <div className="absolute -bottom-1 left-1 flex h-14 w-14 items-center justify-center rounded-2xl border border-base-300 bg-base-100 text-emerald-600 shadow-lg dark:text-emerald-400">
            <FaHandsHelping className="text-2xl" />
          </div>

          <div className="absolute right-0 top-5 h-4 w-4 rounded-full bg-[#FBBF24]" />
          <div className="absolute bottom-9 right-2 h-3 w-3 rounded-full bg-emerald-500" />
        </div>

        {/* 404 heading */}
        <div className="mb-3">
          <h1 className="text-8xl font-black leading-none tracking-tight text-[#111827] dark:text-[#F9FAFB] sm:text-9xl">
            404
          </h1>
        </div>

        <div className="mx-auto mb-5 h-1.5 w-20 rounded-full bg-[#FBBF24]" />

        <h2 className="text-2xl font-bold sm:text-3xl">
          ওহ! পৃষ্ঠাটি খুঁজে পাওয়া যায়নি
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-8 text-base-content/65 sm:text-base">
          মনে হচ্ছে আপনি ভুল পথে চলে এসেছেন! চিন্তার কিছু নেই, আমরা আপনাকে আবার
          সঠিক পথে ফিরিয়ে নিয়ে যাব।
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#FBBF24] px-7 py-3.5 font-semibold text-base text-[#1F2937] shadow-lg shadow-emerald-700/20 transition-all duration-200 hover:-translate-y-1 hover:bg-[#FCD34D] hover:shadow-xl sm:w-auto"
          >
            <FaHome />
            হোমপেজে ফিরে যান
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/about"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-base-300 bg-base-100 px-7 py-3.5 font-semibold text-base-content transition-all duration-200 hover:-translate-y-1 hover:border-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400 sm:w-auto"
          >
            <FaArrowLeft />
            আমাদের সম্পর্কে
          </Link>
        </div>

        {/* Bottom message */}
        <div className="mt-12 inline-flex items-center gap-2 rounded-full border border-emerald-500/15 bg-base-100/70 px-5 py-3 text-sm text-base-content/65 shadow-sm">
          <FaHeart className="text-[#FBBF24]" />
          <span>প্রতিটি ভালো কাজ শুরু হোক একজনের পাশে দাঁড়িয়ে।</span>
        </div>
      </div>
    </main>
  );
}
