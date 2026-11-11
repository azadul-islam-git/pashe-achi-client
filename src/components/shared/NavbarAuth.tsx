"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaCalendarPlus,
  FaCalendarCheck,
  FaUsers,
  FaSignOutAlt,
} from "react-icons/fa";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const NavbarAuth = ({
  variant = "desktop",
}: {
  variant?: "desktop" | "mobile";
}) => {
  const { data: session, isPending } = authClient.useSession();

  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      toast.error(error.message || "Failed to log out.");
      return;
    }

    toast.success("Logged out successfully!");
    router.push("/");
    router.refresh();
  };
  if (isPending) {
    return <div className="h-11 w-24 animate-pulse rounded-2xl bg-base-300" />;
  }

  if (!session) {
    return (
      <Link
        href="/login"
        className="group flex items-center gap-3 rounded-2xl bg-[#FBBF24] py-2 pl-6 pr-2 text-base font-semibold text-[#1F2937] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FCD34D]"
      >
        Login
        <span className="flex h-8 w-8 items-center justify-center rounded-2xl bg-neutral text-neutral-content">
          <FaArrowRight className="h-3.5 w-3.5" />
        </span>
      </Link>
    );
  }

  const user = session.user;

  return (
    <div className="flex items-center gap-3">
      {/* Profile Dropdown */}
      <div className="dropdown dropdown-end">
        <button
          type="button"
          tabIndex={0}
          title={user.name || "My Profile"}
          aria-label="Open profile menu"
          className="avatar cursor-pointer"
        >
          <div className="w-11 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100 transition-all hover:ring-4">
            {user.image ? (
              <Image
                src={user.image}
                alt={user.name || "Profile"}
                width={44}
                height={44}
                unoptimized
                className="h-11 w-11 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-primary text-lg font-bold text-primary-content">
                {user.name?.charAt(0).toUpperCase() || "U"}
              </div>
            )}
          </div>
        </button>

        {/* Dropdown Content */}

        <ul
          tabIndex={0}
          className="menu dropdown-content z-50 mt-3 w-64 gap-1 rounded-2xl border border-base-300 bg-base-100 p-3 text-base-content shadow-2xl shadow-black/10"
        >
          {/* Dropdown Heading */}
          <li className="pointer-events-none mb-2 border-b border-base-300 px-3 pb-3">
            <span className="mt-1 text-sm font-semibold text-base-content">
              Manage your activities
            </span>
          </li>

          <li>
            <Link
              href="/create-event"
              className="group flex items-center gap-3 rounded-xl px-3 py-3 transition-all duration-200 hover:bg-amber-500/10 hover:text-base-content"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 transition-colors group-hover:bg-[#FBBF24] group-hover:text-[#1F2937]">
                <FaCalendarPlus className="text-lg" />
              </span>
              <span className="flex-1">
                <span className="block font-semibold">Create Event</span>
                <span className="text-xs text-base-content/50">
                  Start a new initiative
                </span>
              </span>
              <FaArrowRight className="text-xs text-base-content/30 transition-transform group-hover:translate-x-1" />
            </Link>
          </li>

          <li>
            <Link
              href="/manage-events"
              className="group flex items-center gap-3 rounded-xl px-3 py-3 transition-all duration-200 hover:bg-emerald-500/10 hover:text-base-content"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                <FaCalendarCheck className="text-lg" />
              </span>
              <span className="flex-1">
                <span className="block font-semibold">Manage Events</span>
                <span className="text-xs text-base-content/50">
                  Organize your events
                </span>
              </span>
              <FaArrowRight className="text-xs text-base-content/30 transition-transform group-hover:translate-x-1" />
            </Link>
          </li>

          <li>
            <Link
              href="/joined-events"
              className="group flex items-center gap-3 rounded-xl px-3 py-3 transition-all duration-200 hover:bg-sky-500/10 hover:text-base-content"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 transition-colors group-hover:bg-sky-600 group-hover:text-white">
                <FaUsers className="text-lg" />
              </span>
              <span className="flex-1">
                <span className="block font-semibold">Joined Events</span>
                <span className="text-xs text-base-content/50">
                  View your participation
                </span>
              </span>
              <FaArrowRight className="text-xs text-base-content/30 transition-transform group-hover:translate-x-1" />
            </Link>
          </li>
        </ul>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className={`group flex items-center gap-3 rounded-2xl bg-[#FBBF24] py-2 pl-6 pr-2 text-base font-semibold text-[#1F2937] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FCD34D] cursor-pointer ${
          variant === "mobile" ? "w-full justify-between" : ""
        }`}
      >
        Logout
        <span className="flex h-8 w-8 items-center justify-center rounded-2xl bg-neutral text-neutral-content transition-transform duration-200 group-hover:translate-x-0.5">
          <FaSignOutAlt className="h-3.5 w-3.5" />
        </span>
      </button>
    </div>
  );
};
export default NavbarAuth;
