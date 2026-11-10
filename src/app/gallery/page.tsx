import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCamera, FaHeart } from "react-icons/fa";

type Layout = "large" | "wide" | "small";

const galleryItems: {
  id: number;
  title: string;
  category: string;
  image: string;
  layout: Layout;
}[] = [
  {
    id: 1,
    title: "শীতার্তদের মাঝে শীতবস্ত্র বিতরণ",
    category: "মানবিক সহায়তা",
    image: "/images/gallery/winter-clothes.jpg",
    layout: "large",
  },
  {
    id: 2,
    title: "পরিচ্ছন্নতা অভিযান",
    category: "পরিবেশ সচেতনতা",
    image: "/images/gallery/cleaning-campaign.jpg",
    layout: "small",
  },
  {
    id: 3,
    title: "বৃক্ষরোপণ কর্মসূচি",
    category: "পরিবেশ সংরক্ষণ",
    image: "/images/gallery/tree-plantation.jpg",
    layout: "small",
  },
  {
    id: 4,
    title: "অসহায় পরিবারের মাঝে খাদ্য বিতরণ",
    category: "সামাজিক সহায়তা",
    image: "/images/gallery/food-distribution.jpg",
    layout: "wide",
  },
  {
    id: 5,
    title: "স্বেচ্ছাসেবকদের মিলনমেলা",
    category: "কমিউনিটি",
    image: "/images/gallery/volunteer-meetup.jpg",
    layout: "wide",
  },
  {
    id: 6,
    title: "স্বেচ্ছায় রক্তদান কর্মসূচি",
    category: "স্বাস্থ্যসেবা",
    image: "/images/gallery/blood-donation.jpg",
    layout: "wide",
  },
];

const layoutClasses: Record<Layout, string> = {
  large: "sm:col-span-2 lg:row-span-2",
  wide: "sm:col-span-2",
  small: "",
};

const imageSizes: Record<Layout, string> = {
  large: "(max-width: 640px) 100vw, 50vw",
  wide: "(max-width: 640px) 100vw, 50vw",
  small: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
};

const GalleryPage = () => {
  return (
    <section className="relative overflow-hidden bg-base-200 py-20 sm:py-24">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(16,185,129,0.18)_1px,transparent_1px)] bg-size-[24px_24px] mask-[linear-gradient(to_bottom,black,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-amber-500/15 blur-3xl"
      />

      <div className="container relative mx-auto px-5 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-100 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm dark:text-emerald-400">
            <FaCamera className="text-[#FBBF24]" />
            আমাদের স্মৃতির অ্যালবাম
          </div>

          <h2 className="text-3xl font-bold leading-[1.4] text-base-content sm:text-4xl lg:text-5xl">
            ভালোবাসার কিছু{" "}
            <span className="relative inline-block text-emerald-700 dark:text-emerald-400">
              সুন্দর মুহূর্ত
              <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[#FBBF24]/60" />
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-base-content/70 sm:text-lg">
            প্রতিটি ছবির পেছনে রয়েছে একটি গল্প, একটি উদ্যোগ এবং মানুষের মুখে
            হাসি ফোটানোর এক সুন্দর প্রচেষ্টা।
          </p>
        </div>

        {/* Bento gallery grid */}
        <div className="grid auto-rows-65 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:auto-rows-70 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <article
              key={item.id}
              className={`group relative overflow-hidden rounded-3xl bg-linear-to-br from-emerald-700 to-[#1F2937] shadow-md ring-1 ring-black/5 transition-shadow duration-500 hover:shadow-2xl ${layoutClasses[item.layout]}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority={index === 0}
                sizes={imageSizes[item.layout]}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[#1F2937]/90 via-[#1F2937]/25 to-transparent transition-opacity duration-300" />

              {/* Category badge */}
              <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/15 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                {item.category}
              </span>

              {/* Index number */}
              <span className="absolute right-5 top-4 text-2xl font-extrabold text-white/30 transition-colors duration-300 group-hover:text-[#FBBF24]">
                {(index + 1).toLocaleString("bn-BD", {
                  minimumIntegerDigits: 2,
                })}
              </span>

              {/* Caption */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                <div>
                  <h3
                    className={`font-bold leading-snug text-white ${
                      item.layout === "large"
                        ? "text-xl sm:text-2xl lg:text-3xl"
                        : "text-lg sm:text-xl"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Tagline reveals on hover */}
                  <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-10 group-hover:opacity-100">
                    <div className="mt-3 flex items-center gap-2 text-sm text-white/80">
                      <FaHeart className="text-[#FBBF24]" />
                      মানবতার সেবায় পাশে আছি
                    </div>
                  </div>
                </div>
              </div>

              {/* Accent line */}
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-[#FBBF24] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-14 overflow-hidden rounded-3xl bg-linear-to-br from-emerald-700 via-emerald-800 to-[#1F2937] px-6 py-10 text-center shadow-xl sm:px-12">
          <div
            aria-hidden="true"
            className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-20 border-white/10"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-16 -left-12 h-48 w-48 rounded-full bg-[#FBBF24]/10"
          />

          <div className="relative">
            <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-[#FBBF24]">
              <FaHeart />
              প্রতিটি ভালো কাজই একটি সুন্দর পরিবর্তনের শুরু
            </div>

            <h3 className="text-2xl font-bold leading-[1.4] text-white sm:text-3xl">
              পরের গল্পটির অংশ হতে চান?
            </h3>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/events"
                className="group/btn flex items-center gap-3 rounded-2xl bg-[#FBBF24] py-2 pl-6 pr-2 font-semibold text-[#1F2937] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FCD34D]"
              >
                ইভেন্টে যোগ দিন
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#1F2937] text-white transition-transform duration-200 group-hover/btn:translate-x-0.5">
                  <FaArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>

              <Link
                href="/create-event"
                className="rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
              >
                ইভেন্ট তৈরি করুন
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
