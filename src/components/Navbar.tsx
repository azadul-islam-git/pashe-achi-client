import Link from "next/link";
import Image from "next/image";

import navLogo from "../../public/assets/logo.png";

import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import Navlinks from "./shared/Navlinks";
import ThemeToggle from "./shared/ThemeToggle";
import NavbarAuth from "./shared/NavbarAuth";

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
    <nav className="sticky top-0 z-50 w-full border-b border-base-300 bg-base-100/95 text-base-content shadow-sm backdrop-blur-md transition-colors duration-300">
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
            <span className="text-xl font-bold leading-tight text-base-content sm:text-2xl">
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
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <NavbarAuth />
        </div>

        {/* Mobile Menu */}
        <details className="group relative md:hidden">
          <summary
            aria-label="Toggle navigation menu"
            className="flex cursor-pointer list-none items-center justify-center rounded-lg p-2  transition-colors text-base-content hover:bg-base-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FBBF24] group-open:bg-white/10 [&::-webkit-details-marker]:hidden"
          >
            <FiMenu className="h-7 w-7 group-open:hidden" />
            <MdClose className="hidden h-7 w-7 group-open:block" />
          </summary>

          {/* Mobile Dropdown Menu */}
          <div className="absolute right-0 top-full z-50 mt-3 w-[min(90vw,320px)] rounded-2xl border border-base-300 bg-base-100 p-3 text-base-content shadow-2xl shadow-black/10">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Navlinks key={link.name} {...link} variant="mobile" />
              ))}

              <div className="my-2 h-px bg-white/10" />
              <div className="flex items-center justify-between rounded-xl px-4 py-3">
                <span className="text-sm font-medium text-base-content">
                  Theme
                </span>

                <ThemeToggle />
              </div>

              <NavbarAuth variant="mobile" />
            </div>
          </div>
        </details>
      </div>
    </nav>
  );
};

export default Navbar;
