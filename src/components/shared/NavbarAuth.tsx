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
          className="menu dropdown-content z-50 mt-3 w-56 rounded-2xl border border-base-300 bg-base-100 p-2 text-base-content shadow-xl"
        >
          <li>
            <Link href="/create-event">
              <FaCalendarPlus className="text-primary" />
              Create Event
            </Link>
          </li>

          <li>
            <Link href="/manage-events">
              <FaCalendarCheck className="text-primary" />
              Manage Events
            </Link>
          </li>

          <li>
            <Link href="/joined-events">
              <FaUsers className="text-primary" />
              Joined Events
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
