import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCamera, FaHeart } from "react-icons/fa";

const galleryItems = [
  {
    id: 1,
    title: "শীতার্তদের মাঝে শীতবস্ত্র বিতরণ",
    category: "মানবিক সহায়তা",
    image: "/images/gallery/winter-clothes.jpg",
    size: "large",
  },
  {
    id: 2,
    title: "পরিচ্ছন্নতা অভিযান",
    category: "পরিবেশ সচেতনতা",
    image: "/images/gallery/cleaning-campaign.jpg",
    size: "small",
  },
  {
    id: 3,
    title: "বৃক্ষরোপণ কর্মসূচি",
    category: "পরিবেশ সংরক্ষণ",
    image: "/images/gallery/tree-plantation.jpg",
    size: "small",
  },
  {
    id: 4,
    title: "অসহায় পরিবারের মাঝে খাদ্য বিতরণ",
    category: "সামাজিক সহায়তা",
    image: "/images/gallery/food-distribution.jpg",
    size: "small",
  },
  {
    id: 5,
    title: "স্বেচ্ছাসেবকদের মিলনমেলা",
    category: "কমিউনিটি",
    image: "/images/gallery/volunteer-meetup.jpg",
    size: "small",
  },
  {
    id: 6,
    title: "স্বেচ্ছায় রক্তদান কর্মসূচি",
    category: "স্বাস্থ্যসেবা",
    image: "/images/gallery/blood-donation.jpg",
    size: "small",
  },
];

const GallerySection = () => {
  return (
    <section className="relative overflow-hidden bg-base-200 py-20 sm:py-24">
      {/* Decorative Background */}
      <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="container relative mx-auto px-5 lg:px-8">
        {/* Section Heading */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-100 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm dark:text-emerald-400">
              <FaCamera className="text-[#FBBF24]" />
              আমাদের স্মৃতির অ্যালবাম
            </div>

            <h2 className="text-3xl font-bold leading-tight text-base-content sm:text-4xl lg:text-5xl">
              ভালোবাসার কিছু
              <span className="mt-2 block text-emerald-700 dark:text-emerald-400">
                সুন্দর মুহূর্ত
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-base-content/70 sm:text-lg">
              প্রতিটি ছবির পেছনে রয়েছে একটি গল্প, একটি উদ্যোগ এবং মানুষের মুখে
              হাসি ফোটানোর এক সুন্দর প্রচেষ্টা।
            </p>
          </div>

          <Link
            href="/gallery"
            className="group inline-flex shrink-0 items-center gap-3 rounded-2xl bg-[#FBBF24] py-2 pl-6 pr-2 text-base font-semibold text-[#1F2937] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FCD34D]"
          >
            সব ছবি দেখুন
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-neutral text-neutral-content">
              <FaArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid auto-rows-60 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-70">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-3xl bg-base-300 shadow-sm ${
                item.size === "large"
                  ? "sm:row-span-2 sm:row-start-1 lg:col-span-2"
                  : ""
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes={
                  item.size === "large"
                    ? "(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 66vw"
                    : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                }
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[#1F2937]/90 via-[#1F2937]/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Category Badge */}
              <div className="absolute left-5 top-5">
                <span className="rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                  {item.category}
                </span>
              </div>

              {/* Image Content */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                <div>
                  <h3 className="text-lg font-bold text-white sm:text-xl">
                    {item.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-sm text-white/80">
                    <FaHeart className="text-[#FBBF24]" />
                    মানবতার সেবায় পাশে আছি
                  </div>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#FBBF24] group-hover:text-[#1F2937]">
                  <FaArrowRight />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center">
          <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
            <FaHeart className="text-[#FBBF24]" />
            <span className="text-sm font-semibold">
              প্রতিটি ভালো কাজই একটি সুন্দর পরিবর্তনের শুরু
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
