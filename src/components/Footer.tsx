import Link from "next/link";
import Image from "next/image";

import navLogo from "../../public/assets/logo.png";

import {
  FaArrowRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";

const quickLinks = [
  { name: "হোম", href: "/" },
  { name: "আমাদের সম্পর্কে", href: "/about" },
  { name: "আসন্ন ইভেন্ট", href: "/upcoming-events" },
];

const categories = [
  "রক্তদান",
  "বৃক্ষরোপণ",
  "শিক্ষা সহায়তা",
  "পরিচ্ছন্নতা অভিযান",
  "ত্রাণ বিতরণ",
  "স্বাস্থ্য ক্যাম্প",
];

const socials = [
  { label: "ফেসবুক", href: "https://www.facebook.com", icon: FaFacebookF },
  {
    label: "ইনস্টাগ্রাম",
    href: "https://www.instagram.com/",
    icon: FaInstagram,
  },
  { label: "ইউটিউব", href: "https://youtube.com/", icon: FaYoutube },
  { label: "লিংকডইন", href: "https://linkedin.com", icon: FaLinkedinIn },
];

const contacts = [
  { icon: FaMapMarkerAlt, text: "ঢাকা, বাংলাদেশ" },
  { icon: FaPhoneAlt, text: "+৮৮০ ১৭XX-XXXXXX", href: "tel:+8801700000000" },
  {
    icon: FaEnvelope,
    text: "info@pashe-achhi.org",
    href: "mailto:info@pashe-achhi.org",
  },
];

const headingCls = "text-lg font-bold text-[#1F2937] dark:text-white";
const linkCls =
  "text-[#64748B] transition-colors hover:text-emerald-700 focus-visible:outline-none focus-visible:text-emerald-700 dark:text-gray-400 dark:hover:text-[#FBBF24] dark:focus-visible:text-[#FBBF24]";

const Footer = () => {
  const year = new Date().toLocaleString("bn-BD", {
    year: "numeric",
  });

  return (
    <footer className="relative isolate overflow-hidden bg-linear-to-br from-[#F0F7F1] via-[#E2EFE7] to-[#D5E8DF] text-[#334155] dark:from-[#0B1720] dark:via-[#102B2A] dark:to-[#111827] dark:text-gray-300">
      {/* Decorative background effects */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-400/10" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#FBBF24]/15 blur-3xl" />
      <div className="pointer-events-none absolute right-1/3 top-0 h-64 w-64 rounded-full bg-emerald-300/10 blur-3xl dark:bg-teal-400/10" />

      {/* Top call-to-action strip */}
      <div className="mx-auto max-w-[1600px] px-5 pt-16 sm:px-8">
        <div className="flex flex-col gap-6 rounded-3xl border border-emerald-900/10 bg-white/60 p-8 shadow-sm backdrop-blur-sm md:flex-row md:items-center md:justify-between md:p-10 dark:border-white/10 dark:bg-white/4">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold leading-snug text-[#1F2937] dark:text-white sm:text-3xl">
              আপনার এলাকায় কিছু করতে চান?
            </h2>
            <p className="mt-2 leading-8 text-[#64748B] dark:text-gray-400">
              ইভেন্ট তৈরি করুন, আর পাশে পান অনেকগুলো হাত।
            </p>
          </div>

          <Link
            href="/create-event"
            className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-[#FBBF24] py-2 pl-6 pr-2 font-semibold text-[#1F2937] shadow-md shadow-[#FBBF24]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FCD34D] hover:shadow-lg hover:shadow-[#FBBF24]/40 active:translate-y-0 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#E5EFE8] dark:focus-visible:ring-offset-[#111827] md:self-center"
          >
            ইভেন্ট তৈরি করুন
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1F2937] text-[#FBBF24]">
              <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </div>

      {/* Main columns */}
      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        {/* Brand */}
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src={navLogo}
              alt="পাশে আছি"
              width={40}
              height={60}
              className="h-10 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold leading-tight text-[#1F2937] dark:text-white">
                পাশে আছি
              </span>
              <span className="text-sm leading-none text-[#FBBF24]">
                ফাউন্ডেশন
              </span>
            </div>
          </Link>

          <p className="mt-5 max-w-xs leading-8 text-[#64748B] dark:text-gray-400">
            সমাজসেবামূলক কর্মসূচি তৈরি, অংশগ্রহণ ও অগ্রগতি ট্র্যাক করার একটি
            কমিউনিটি প্ল্যাটফর্ম।
          </p>

          <ul className="mt-6 flex gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-900/15 bg-white/50 text-[#475569] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FBBF24] hover:bg-[#FBBF24] hover:text-[#1F2937] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FBBF24] dark:border-white/15 dark:bg-transparent dark:text-gray-300"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <nav aria-label="দ্রুত লিংক">
          <h3 className={headingCls}>দ্রুত লিংক</h3>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkCls}>
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Event types */}
        <div>
          <h3 className={headingCls}>কাজের ক্ষেত্র</h3>
          <ul className="mt-5 space-y-3 text-[#64748B] dark:text-gray-400">
            {categories.map((c) => (
              <li key={c} className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#08796F]" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className={headingCls}>যোগাযোগ</h3>
          <ul className="mt-5 space-y-4">
            {contacts.map((c) => (
              <li key={c.text} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-700/10 text-emerald-700 dark:bg-[#08796F]/20 dark:text-[#34d3c4]">
                  <c.icon className="h-3.5 w-3.5" />
                </span>
                {c.href ? (
                  <a href={c.href} className={`${linkCls} break-all pt-1`}>
                    {c.text}
                  </a>
                ) : (
                  <span className="pt-1 text-[#64748B] dark:text-gray-400">
                    {c.text}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-emerald-900/10 dark:border-white/10">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-2 px-5 py-6 text-sm text-[#64748B] dark:text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {year} পাশে আছি ফাউন্ডেশন। সর্বস্বত্ব সংরক্ষিত।</p>
          <p>প্রতিটি ভালো কাজ শুরু হোক একজনের পাশে দাঁড়িয়ে।</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
