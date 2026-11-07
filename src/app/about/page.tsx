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
  FaRegCalendarAlt,
  FaTint,
  FaTree,
  FaUserPlus,
} from "react-icons/fa";

const steps = [
  {
    no: "১",
    icon: FaCalendarPlus,
    title: "ইভেন্ট তৈরি করুন",
    text: "আপনার এলাকার প্রয়োজন বুঝে একটি কর্মসূচির পরিকল্পনা করুন। তারিখ, স্থান আর কতজন স্বেচ্ছাসেবক দরকার, তা ঠিক করে দিন।",
  },
  {
    no: "২",
    icon: FaUserPlus,
    title: "যোগ দিন",
    text: "কাছের কোনো ইভেন্ট পছন্দ হলে এক ক্লিকে অংশ নিন। আপনার যোগদান সংগঠক ও অন্যান্য সদস্যরা সাথে সাথে দেখতে পান।",
  },
  {
    no: "৩",
    icon: FaChartLine,
    title: "অগ্রগতি দেখুন",
    text: "কত মানুষ যোগ দিলেন, কাজ কতদূর এগোলো, সবকিছু এক জায়গায় ট্র্যাক করুন এবং শেষে ফলাফল সবার সাথে ভাগ করুন।",
  },
];

const values = [
  {
    title: "শুরু হোক নিজের এলাকা থেকে",
    text: "পাড়ার সমস্যা পাড়ার মানুষই সবচেয়ে ভালো বোঝে। তাই আমরা স্থানীয় উদ্যোগকে সবার আগে রাখি।",
  },
  {
    title: "স্বচ্ছতা",
    text: "কে কী করছে, কাজ কতদূর এগোলো, সবাই দেখতে পারেন। লুকানোর মতো কিছু নেই।",
  },
  {
    title: "সবার জন্য খোলা",
    text: "বয়স, পেশা বা পরিচয় নয়, ইচ্ছাটাই আসল। যে কেউ ইভেন্ট তৈরি করতে বা যোগ দিতে পারেন।",
  },
  {
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

const primaryBtn =
  "group inline-flex items-center gap-3 rounded-full bg-[#FBBF24] py-2 pl-6 pr-2 text-base font-semibold text-[#1F2937] shadow-md shadow-[#FBBF24]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FCD34D] hover:shadow-lg hover:shadow-[#FBBF24]/40 active:translate-y-0 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F2937]";

const AboutPage = () => {
  return (
    <main className="bg-base-100 text-base-content">
      {/* ───────── Hero ───────── */}
      <section className="bg-[#1F2937] text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <h1 className="text-4xl font-bold leading-[1.3] sm:text-5xl lg:text-[56px]">
              একসাথে দাঁড়ালে, বদলে যায় পাড়া-মহল্লা
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
              পাশে আছি ফাউন্ডেশন একটি কমিউনিটি প্ল্যাটফর্ম, যেখানে আপনি আপনার
              এলাকার সমাজসেবামূলক কর্মসূচি তৈরি করতে, তাতে যোগ দিতে এবং তার
              অগ্রগতি দেখতে পারেন।
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/upcoming-events" className={primaryBtn}>
                ইভেন্ট দেখুন
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1F2937] text-[#FBBF24]">
                  <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </Link>

              <Link
                href="/"
                className="rounded-full border border-white/25 px-6 py-3 font-medium text-white transition-colors hover:border-white/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FBBF24]"
              >
                ইভেন্ট তৈরি করুন
              </Link>
            </div>
          </div>

          {/* Example event card */}
          <div className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden
              className="absolute -inset-3 z-0 rotate-3 rounded-3xl bg-[#08796F]/40"
            />
            <article className="relative rounded-3xl bg-base-100 p-6 text-base-content shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 rounded-full bg-base-200 px-3 py-1 text-sm font-medium text-primary">
                  <FaTree className="h-3.5 w-3.5" />
                  বৃক্ষরোপণ
                </span>
                <span className="text-xs text-gray-500">উদাহরণ ইভেন্ট</span>
              </div>

              <h3 className="mt-5 text-2xl font-bold leading-snug">
                পাড়ার মাঠে শতাধিক গাছ লাগানো
              </h3>

              <ul className="mt-4 space-y-2.5 text-[15px] text-gray-600">
                <li className="flex items-center gap-3">
                  <FaRegCalendarAlt className="text-[#08796F]" />
                  শুক্রবার, সকাল ৯টা
                </li>
                <li className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-[#08796F]" />
                  এলাকার খেলার মাঠ
                </li>
              </ul>

              <div className="mt-6">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">২৪ জন যোগ দিয়েছেন</span>
                  <span className="text-gray-500">লক্ষ্য ৪০ জন</span>
                </div>
                <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full w-[60%] rounded-full bg-[#08796F]" />
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-[#1F2937] py-3 text-center font-semibold text-white">
                যোগ দিন
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ───────── Story ───────── */}
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <h2 className="text-3xl font-bold leading-[1.4] sm:text-4xl">
          আমাদের গল্প
        </h2>

        <div className="space-y-6 text-lg leading-9 text-base-content/70">
          <p>
            অনেক মানুষ সমাজের জন্য কিছু করতে চান। কিন্তু কোথায় যাবেন, কার সাথে
            কাজ করবেন, কীভাবে শুরু করবেন, এই প্রশ্নেই অনেক ভালো উদ্যোগ থেমে
            যায়।
          </p>
          <p>
            পাশে আছি তৈরি হয়েছে এই দূরত্ব কমাতে। এখানে যিনি কিছু শুরু করতে চান,
            তিনি তাঁর সঙ্গী খুঁজে পান। আর যিনি সাহায্য করতে চান, তিনি খুঁজে পান
            নিজের এলাকার সঠিক কাজটি।
          </p>
          <p className="font-semibold text-base-content">
            আমাদের লক্ষ্য একটাই: প্রতিটি ভালো উদ্যোগ যেন সঠিক মানুষের কাছে
            পৌঁছায়।
          </p>
        </div>
      </section>

      {/* ───────── How it works ───────── */}
      <section className="bg-base-200">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
          <h2 className="max-w-2xl text-3xl font-bold leading-[1.4] sm:text-4xl">
            কীভাবে কাজ করে
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-8 text-base-content/70">
            তিনটি সহজ ধাপে আপনি একজন দর্শক থেকে হয়ে উঠতে পারেন পরিবর্তনের অংশ।
          </p>

          <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step) => (
              <li key={step.no} className="relative">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#08796F] text-white">
                    <step.icon className="h-6 w-6" />
                  </span>
                  <span className="text-5xl font-bold leading-none text-[#FBBF24]">
                    {step.no}
                  </span>
                </div>
                <Link href={"/"}>
                  <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
                </Link>
                <p className="mt-3 leading-8 text-base-content/70">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────── Values ───────── */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <h2 className="text-3xl font-bold leading-[1.4] sm:text-4xl">
          যা আমরা বিশ্বাস করি
        </h2>

        <dl className="mt-12 grid gap-x-16 md:grid-cols-2">
          {values.map((v) => (
            <div
              key={v.title}
              className="border-t border-base-300 py-8 first:border-t-0 md:first:border-t md:nth-2:border-t"
            >
              <dt className="flex items-center gap-3 text-xl font-bold">
                <span className="h-3 w-3 rounded-full bg-[#FBBF24]" />
                {v.title}
              </dt>
              <dd className="mt-3 pl-6 leading-8 text-base-content/70">
                {v.text}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ───────── Categories ───────── */}
      <section className="bg-[#1F2937] text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
          <h2 className="max-w-2xl text-3xl font-bold leading-[1.4] sm:text-4xl">
            যেসব কাজে আপনি পাশে থাকতে পারেন
          </h2>

          <ul className="mt-10 flex flex-wrap gap-3">
            {categories.map((c) => (
              <li
                key={c.name}
                className="flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-base text-gray-100"
              >
                <c.icon className="h-4 w-4 text-[#FBBF24]" />
                {c.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="bg-[#FBBF24]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold leading-[1.4] text-[#1F2937] sm:text-4xl">
              আজই আপনার এলাকার একটি কাজে যোগ দিন
            </h2>
            <p className="mt-3 text-lg leading-8 text-[#1F2937]/80">
              একাউন্ট খুলতে এক মিনিটও লাগে না।
            </p>
          </div>

          <Link
            href="/login"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#1F2937] py-2 pl-7 pr-2 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#111827] hover:shadow-xl active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F2937] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBBF24]"
          >
            শুরু করুন
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FBBF24] text-[#1F2937]">
              <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
