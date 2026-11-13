import Link from "next/link";
import {
  FaArrowRight,
  FaBookOpen,
  FaBroom,
  FaCalendarPlus,
  FaChartLine,
  FaHandsHelping,
  FaHeartbeat,
  FaMapMarkerAlt,
  FaTint,
  FaTree,
  FaUserPlus,
  FaHeart,
  FaUsers,
  FaShieldAlt,
  FaSyncAlt,
} from "react-icons/fa";

const steps = [
  {
    no: "০১",
    icon: FaCalendarPlus,
    title: "ইভেন্ট তৈরি করুন",
    text: "আপনার এলাকার প্রয়োজন বুঝে একটি কর্মসূচির পরিকল্পনা করুন। তারিখ, স্থান আর কতজন স্বেচ্ছাসেবক দরকার, তা ঠিক করে দিন।",
  },
  {
    no: "০২",
    icon: FaUserPlus,
    title: "যোগ দিন",
    text: "কাছের কোনো ইভেন্ট পছন্দ হলে এক ক্লিকে অংশ নিন। আপনার যোগদান সংগঠক ও অন্যান্য সদস্যরা সাথে সাথে দেখতে পান।",
  },
  {
    no: "০৩",
    icon: FaChartLine,
    title: "অগ্রগতি দেখুন",
    text: "কত মানুষ যোগ দিলেন, কাজ কতদূর এগোলো, সবকিছু এক জায়গায় ট্র্যাক করুন এবং শেষে ফলাফল সবার সাথে ভাগ করুন।",
  },
];

const values = [
  {
    icon: FaMapMarkerAlt,
    title: "শুরু হোক নিজের এলাকা থেকে",
    text: "পাড়ার সমস্যা পাড়ার মানুষই সবচেয়ে ভালো বোঝে। তাই আমরা স্থানীয় উদ্যোগকে সবার আগে রাখি।",
  },
  {
    icon: FaShieldAlt,
    title: "স্বচ্ছতা",
    text: "কে কী করছে, কাজ কতদূর এগোলো, সবাই দেখতে পারেন। লুকানোর মতো কিছু নেই।",
  },
  {
    icon: FaUsers,
    title: "সবার জন্য খোলা",
    text: "বয়স, পেশা বা পরিচয় নয়, ইচ্ছাটাই আসল। যে কেউ ইভেন্ট তৈরি করতে বা যোগ দিতে পারেন।",
  },
  {
    icon: FaSyncAlt,
    title: "ধারাবাহিকতা",
    text: "একদিনের উদ্যোগ নয়, আমরা চাই নিয়মিত ভালো কাজের একটি অভ্যাস গড়ে উঠুক।",
  },
];

const categories = [
  { name: "রক্তদান", icon: FaTint },
  { name: "বৃক্ষরোপণ", icon: FaTree },
  { name: "শিক্ষা সহায়তা", icon: FaBookOpen },
  { name: "পরিচ্ছন্নতা অভিযান", icon: FaBroom },
  { name: "ত্রাণ বিতরণ", icon: FaHandsHelping },
  { name: "স্বাস্থ্য ক্যাম্প", icon: FaHeartbeat },
];

const AboutPage = () => {
  return (
    <main className="overflow-hidden bg-base-100 text-base-content">
      {/* Our Story */}
      <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-bold text-emerald-700 dark:text-emerald-400">
              <FaHeart className="text-[#FBBF24]" />
              আমাদের পরিচয়
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
              আমাদের গল্প
              <span className="mt-2 block h-1.5 w-16 rounded-full bg-[#FBBF24]" />
            </h2>
          </div>

          <div className="space-y-6 text-base leading-9 text-base-content/70 sm:text-lg">
            <p>
              অনেক মানুষ সমাজের জন্য কিছু করতে চান। কিন্তু কোথায় যাবেন, কার
              সাথে কাজ করবেন, কীভাবে শুরু করবেন, এই প্রশ্নেই অনেক ভালো উদ্যোগ
              থেমে যায়।
            </p>
            <p>
              পাশে আছি তৈরি হয়েছে এই দূরত্ব কমাতে। এখানে যিনি কিছু শুরু করতে
              চান, তিনি তাঁর সঙ্গী খুঁজে পান। আর যিনি সাহায্য করতে চান, তিনি
              খুঁজে পান নিজের এলাকার সঠিক কাজটি।
            </p>

            <div className="rounded-2xl border-l-4 border-[#FBBF24] bg-base-200 p-6">
              <p className="font-bold leading-8 text-base-content">
                আমাদের লক্ষ্য একটাই: প্রতিটি ভালো উদ্যোগ যেন সঠিক মানুষের কাছে
                পৌঁছায়।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#F0F7F1] to-[#E4F0E8] dark:from-[#101F25] dark:to-[#142D2B]">
        <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-700/10 px-4 py-2 text-sm font-bold text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-300">
              <FaChartLine />
              সহজ ও কার্যকর
            </span>
            <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
              কীভাবে কাজ করে
            </h2>
            <p className="mt-4 leading-8 text-base-content/65 sm:text-lg">
              তিনটি সহজ ধাপে আপনি একজন দর্শক থেকে হয়ে উঠতে পারেন পরিবর্তনের
              অংশ।
            </p>
          </div>

          <ol className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <li
                key={step.no}
                className="group rounded-3xl border border-emerald-900/10 bg-white/70 p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-700 text-white shadow-lg shadow-emerald-700/20 transition-transform group-hover:rotate-6 dark:bg-emerald-600">
                    <step.icon className="text-2xl" />
                  </div>
                  <span className="text-5xl font-black text-emerald-700/10 dark:text-emerald-300/15">
                    {step.no}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-8 text-base-content/65 sm:text-base">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Our Values */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-bold text-emerald-700 dark:text-emerald-400">
            <FaHeart className="text-[#FBBF24]" />
            আমাদের ভিত্তি
          </span>
          <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
            যা আমরা বিশ্বাস করি
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-8 text-base-content/65">
            আমাদের প্রতিটি উদ্যোগ পরিচালিত হয় কিছু সহজ কিন্তু গুরুত্বপূর্ণ
            মূল্যবোধকে সামনে রেখে।
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {values.map((value, index) => (
            <article
              key={value.title}
              className="group rounded-3xl border border-base-300 bg-base-100 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl sm:p-8"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-2xl text-emerald-700 transition-colors group-hover:bg-emerald-700 group-hover:text-white dark:text-emerald-400 dark:group-hover:bg-emerald-500">
                  <value.icon />
                </div>
                <div>
                  <span className="text-xs font-bold tracking-widest text-emerald-700 dark:text-emerald-400">
                    VALUE 0{index + 1}
                  </span>
                  <h3 className="mt-1 text-xl font-bold">{value.title}</h3>
                  <p className="mt-3 text-sm leading-8 text-base-content/65 sm:text-base">
                    {value.text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Activity Categories */}
      <section className="relative isolate overflow-hidden bg-linear-to-br from-[#102B2A] via-[#123B35] to-[#1F2937] text-white">
        <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-emerald-400/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-[#FBBF24]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-200">
            <FaHandsHelping className="text-[#FBBF24]" />
            একসাথে ভালো কাজ
          </span>

          <h2 className="mt-6 max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
            যেসব কাজে আপনি
            <span className="text-emerald-300"> পাশে থাকতে পারেন</span>
          </h2>

          <p className="mt-4 max-w-xl leading-8 text-white/65">
            আপনার সময়, সামর্থ্য ও ইচ্ছা দিয়ে অংশ নিতে পারেন বিভিন্ন মানবিক ও
            সমাজসেবামূলক উদ্যোগে।
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <li
                key={category.name}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/10"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FBBF24]/15 text-xl text-[#FBBF24]">
                  <category.icon />
                </span>
                <span className="font-semibold text-white">
                  {category.name}
                </span>
                <FaArrowRight className="ml-auto text-sm text-white/35" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-linear-to-r from-[#FBBF24] via-[#FCD34D] to-[#FBBF24]">
        <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border-40 border-white/15" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-center md:py-20">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#1F2937]/10 px-4 py-2 text-sm font-bold text-[#1F2937]">
              <FaHeart />
              আপনিও হতে পারেন পরিবর্তনের অংশ
            </div>

            <h2 className="text-3xl font-extrabold leading-tight text-[#1F2937] sm:text-4xl">
              আজই আপনার এলাকার একটি কাজে যোগ দিন
            </h2>
            <p className="mt-4 text-base leading-8 text-[#1F2937]/75 sm:text-lg">
              একসাথে ছোট ছোট উদ্যোগই গড়ে তুলতে পারে সুন্দর একটি সমাজ।
            </p>
          </div>

          <Link
            href="/upcoming-events"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#1F2937] py-2 pl-7 pr-2 font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-[#111827] hover:shadow-xl active:scale-95"
          >
            শুরু করুন
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FBBF24] text-[#1F2937]">
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
