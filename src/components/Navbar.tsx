import Link from "next/link";
import Image from "next/image";

import navLogo from "../../public/assets/logo.png";

import { MdClose } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import Navlinks from "./shared/Navlinks";

const navLinks = [
  { name: "Home", href: "/", icon: "home" as const },
  {
    name: "Upcoming Events",
    href: "/upcoming-events",
    icon: "events" as const,
  },
  { name: "About Us", href: "/about", icon: "about" as const },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#1F2937]/90 backdrop-blur-md supports-backdrop-filter:bg-[#1F2937]/80">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-3 sm:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FBBF24] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F2937]"
        >
          <Image
            src={navLogo}
            alt="পাশে আছি"
            width={40}
            height={60}
            priority
            className="h-10 w-auto"
          />

          <div className="flex flex-col">
            <span className="text-xl font-bold leading-tight text-white sm:text-2xl">
              পাশে আছি
            </span>
            <span className="text-xs leading-none text-[#FBBF24] sm:text-sm">
              ফাউন্ডেশন
            </span>
          </div>
        </Link>

        {/* Tablet and Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex lg:gap-10">
          {navLinks.map((link) => (
            <Navlinks key={link.name} {...link} />
          ))}
        </div>

        {/* Tablet and Desktop Login Button */}
        <Link
          href="/login"
          className="group hidden items-center gap-3 rounded-2xl bg-[#FBBF24] py-2 pl-6 pr-2 text-base font-semibold text-[#1F2937] shadow-md shadow-[#FBBF24]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FCD34D] hover:shadow-lg hover:shadow-[#FBBF24]/40 active:translate-y-0 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F2937] md:flex lg:text-[17px]"
        >
          Login
          <span className="flex h-8 w-8 items-center justify-center rounded-2xl bg-[#1F2937] text-[#FBBF24] transition-transform duration-200 group-hover:translate-x-0.5">
            <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </Link>

        {/* Mobile Menu */}
        <details className="group relative md:hidden">
          <summary
            aria-label="Toggle navigation menu"
            className="flex cursor-pointer list-none items-center justify-center rounded-lg p-2 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FBBF24] group-open:bg-white/10 [&::-webkit-details-marker]:hidden"
          >
            <FiMenu className="h-7 w-7 group-open:hidden" />
            <MdClose className="hidden h-7 w-7 group-open:block" />
          </summary>

          {/* Mobile Dropdown Menu */}
          <div className="absolute right-0 top-full z-50 mt-4 w-[min(90vw,320px)] rounded-2xl border border-white/10 bg-[#1F2937] p-3 shadow-2xl shadow-black/40">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Navlinks key={link.name} {...link} variant="mobile" />
              ))}

              <div className="my-2 h-px bg-white/10" />

              <Link
                href="/login"
                className="group/login flex items-center justify-center gap-3 rounded-2xl bg-[#FBBF24] py-2.5 pl-6 pr-2.5 font-semibold text-[#1F2937] transition-all duration-200 hover:bg-[#FCD34D] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Login
                <span className="flex h-8 w-8 items-center justify-center rounded-2xl bg-[#1F2937] text-[#FBBF24]">
                  <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/login:translate-x-0.5" />
                </span>
              </Link>
            </div>
          </div>
        </details>
      </div>
    </nav>
  );
};

export default Navbar;
