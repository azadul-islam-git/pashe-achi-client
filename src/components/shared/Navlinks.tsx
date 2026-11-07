"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { IoHomeOutline } from "react-icons/io5";
import { CgDetailsMore } from "react-icons/cg";
import { MdEvent } from "react-icons/md";

type NavLinkProps = {
  href: string;
  name: string;
  icon: "home" | "about" | "events";
  variant?: "desktop" | "mobile";
};

const icons = {
  home: IoHomeOutline,
  about: CgDetailsMore,
  events: MdEvent,
};

const Navlinks = ({ href, name, icon, variant = "desktop" }: NavLinkProps) => {
  const pathname = usePathname();

  // Treat nested routes (e.g. /upcoming-events/123) as active too,
  // but keep "/" exact so Home isn't always highlighted.
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  const Icon = icons[icon];

  const base =
    "flex items-center gap-2 whitespace-nowrap text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FBBF24]";

  const styles =
    variant === "mobile"
      ? `rounded-xl px-4 py-3 ${
          isActive
            ? "bg-primary/10 font-semibold text-primary"
            : "text-base-content/70 hover:bg-base-200 hover:text-base-content"
        }`
      : `relative rounded-md py-2 lg:text-[17px] after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:rounded-full after:bg-[#FBBF24] after:transition-transform ${
          isActive
            ? "font-semibold text-primary after:scale-x-100"
            : "text-base-content/70 hover:text-base-content after:scale-x-0 hover:after:scale-x-100"
        }`;

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`${base} ${styles}`}
    >
      <Icon className={`h-5 w-5 shrink-0 ${isActive ? "text-primary" : ""}`} />
      {name}
    </Link>
  );
};

export default Navlinks;
