import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import { FaArrowRight, FaHeart } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-base-200">
      {/* Background Decorations */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#FBBF24]/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="container relative mx-auto grid min-h-150 items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
        {/* Banner Content */}
        <div className="max-w-xl">
          <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-2xl border border-emerald-500/20 bg-base-100 px-4 py-3 text-sm font-semibold leading-6 text-emerald-700 shadow-sm dark:text-emerald-300 sm:rounded-full">
            <FaHeart className="shrink-0 text-[#FBBF24]" />
            <span>প্রতিটি ভালো কাজ শুরু হোক একজনের পাশে দাঁড়িয়ে</span>
          </div>

          <h1 className="text-4xl font-bold leading-tight text-base-content sm:text-5xl lg:text-6xl">
            একসাথে গড়ি
            <span className="relative mx-2 inline-block text-emerald-700 dark:text-emerald-400">
              সুন্দর
              <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[#FBBF24]/70" />
            </span>
            <br />
            আগামীর সমাজ
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-base-content/70 sm:text-lg">
            একটি ছোট উদ্যোগও বদলে দিতে পারে একটি জীবন। মানুষের পাশে দাঁড়ানো,
            অসহায়দের সহায়তা করা এবং ভালোবাসায় একটি সুন্দর সমাজ গড়াই আমাদের
            লক্ষ্য।
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/upcoming-events"
              className="group flex items-center gap-3 rounded-2xl bg-[#FBBF24] py-2 pl-6 pr-2 text-base font-semibold text-[#1F2937] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FCD34D]"
            >
              আমাদের কার্যক্রম
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-neutral text-neutral-content">
                <FaArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </Link>

            <Link
              href="/about"
              className="rounded-2xl border border-base-300 bg-base-100 px-6 py-3.5 font-semibold text-base-content transition-all duration-200 hover:border-emerald-600 hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              আমাদের সম্পর্কে
            </Link>
          </div>
        </div>

        {/* Banner Visual */}

        {/* Banner Visual */}
        <div className="relative mx-auto w-full max-w-lg">
          {/* Yellow Decorative Background */}
          <div className="absolute inset-0 rotate-6 rounded-[2.5rem] bg-[#FBBF24]/40" />

          {/* Photo Card */}
          <div className="relative min-h-105 overflow-hidden rounded-[2.5rem] border border-base-300 shadow-2xl sm:min-h-125">
            {/* Background Photo */}
            <Image
              src="/images/banner-volunteers.jpg"
              alt="Volunteers helping their community"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-emerald-950/90 via-emerald-950/30 to-transparent" />

            {/* Photo Content */}
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-10">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FBBF24] text-emerald-950 shadow-lg">
                <Image src={logo} alt="logo" width={40} height={60}></Image>
              </div>

              <h2 className="text-3xl font-bold sm:text-4xl">পাশে আছি</h2>

              <p className="mt-3 max-w-sm leading-7 text-white/85">
                আপনার একটু সহযোগিতা, কারও জীবনে হতে পারে নতুন আশার আলো।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
