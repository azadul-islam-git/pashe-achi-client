import Link from "next/link";
import {
  FaCalendarAlt,
  FaHandsHelping,
  FaHeart,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: FaCalendarAlt,
    title: "কার্যক্রম খুঁজুন",
    description:
      "আপনার এলাকার বিভিন্ন সামাজিক ও মানবিক কার্যক্রম খুঁজে নিন এবং অংশগ্রহণ করুন।",
    href: "/upcoming-events",
  },
  {
    id: 2,
    icon: FaHandsHelping,
    title: "স্বেচ্ছাসেবক হিসেবে যোগ দিন",
    description:
      "আপনার সময় ও দক্ষতা দিয়ে মানুষের পাশে দাঁড়ান এবং ইতিবাচক পরিবর্তনে ভূমিকা রাখুন।",
    href: "/upcoming-events",
  },
  {
    id: 3,
    icon: FaHeart,
    title: "নিজেই উদ্যোগ নিন",
    description:
      "আপনার মানবিক উদ্যোগ তৈরি করুন এবং অন্যদের একসঙ্গে কাজ করার সুযোগ দিন।",
    href: "/create-event",
  },
  {
    id: 4,
    icon: FaUsers,
    title: "মানবিক কমিউনিটি গড়ুন",
    description: "একটি সহানুভূতিশীল সমাজ গড়তে আমাদের সঙ্গে যুক্ত হোন।",
    href: "/about",
  },
];

const FeatureSection = () => {
  return (
    <section className="bg-base-100 py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
            আমাদের কার্যক্রম
          </span>

          <h2 className="mb-4 text-3xl font-bold text-base-content md:text-4xl">
            একসাথে গড়ি{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              মানবিক সমাজ
            </span>
          </h2>

          <p className="text-base leading-7 text-base-content/70">
            মানুষের পাশে দাঁড়ানো থেকে শুরু করে সামাজিক উদ্যোগে অংশগ্রহণ— আপনার
            ছোট্ট অবদানও হতে পারে বড় পরিবর্তনের কারণ।
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="group rounded-2xl border border-base-300 bg-base-200 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/40 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white dark:text-emerald-400">
                  <Icon className="text-2xl" />
                </div>

                <h3 className="mb-3 text-xl font-bold text-base-content">
                  {feature.title}
                </h3>

                <p className="mb-6 text-sm leading-6 text-base-content/70">
                  {feature.description}
                </p>

                <Link
                  href={feature.href}
                  className="inline-flex items-center gap-2 font-semibold text-emerald-600 transition-colors duration-200 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                >
                  আরও জানুন
                  <FaArrowRight className="text-sm transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
