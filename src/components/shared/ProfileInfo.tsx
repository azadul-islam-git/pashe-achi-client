"use client";

import { useState } from "react";
import Image from "next/image";
import { FaEnvelope, FaUser, FaUserEdit } from "react-icons/fa";
import EditProfileInfo from "./EditProfileInfo";

interface ProfileUser {
  name: string;
  email: string;
  image?: string | null;
}

const ProfileInfo = ({ user }: { user: ProfileUser }) => {
  const [profile, setProfile] = useState(user);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <div className="overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-xl shadow-emerald-900/5 dark:border-gray-700 dark:bg-[#172B30]">
        {/* Cover */}
        <div className="relative h-40 overflow-hidden bg-linear-to-br from-emerald-700 via-emerald-600 to-teal-600 sm:h-52">
          <div className="pointer-events-none absolute -left-16 -top-16 size-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 right-0 size-72 rounded-full bg-amber-300/25 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-size-[22px_22px]" />
        </div>

        <div className="relative z-10 px-6 pb-10 sm:px-10">
          {/* Avatar + Name + Action */}
          <div className="-mt-16 flex flex-col items-center gap-5 sm:-mt-20 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:gap-6">
              <div className="flex size-32 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-emerald-100 shadow-xl ring-4 ring-emerald-500/20 dark:border-[#172B30] dark:bg-emerald-900 sm:size-40">
                {profile.image ? (
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    width={160}
                    height={160}
                    className="size-full object-cover"
                  />
                ) : (
                  <FaUser className="text-5xl text-emerald-600 dark:text-emerald-300 sm:text-6xl" />
                )}
              </div>

              <div className="min-w-0 text-center sm:pb-3 sm:text-left">
                <h2 className="wrap-break-word text-2xl font-extrabold text-gray-900 dark:text-white sm:text-3xl">
                  {profile.name}
                </h2>
                <p className="mt-1 break-all text-sm text-gray-500 dark:text-gray-400">
                  {profile.email}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsEditing(true)}
              className="btn btn-primary rounded-xl px-6 font-bold shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 sm:mb-3"
            >
              <FaUserEdit className="text-lg" />
              Edit Profile
            </button>
          </div>

          {/* Divider */}
          <div className="my-8 flex items-center gap-3">
            <span className="h-6 w-1.5 rounded-full bg-emerald-500" />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Account Details
            </h3>
            <span className="h-px flex-1 bg-gray-100 dark:bg-gray-700" />
          </div>

          {/* Details */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="flex items-center gap-4 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5 transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-[#20383A]">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-teal-500 text-xl text-white shadow-md">
                <FaUser />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                  Full Name
                </p>
                <p className="wrap-break-word mt-1 font-semibold text-gray-800 dark:text-gray-100">
                  {profile.name}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-amber-100 bg-amber-50/60 p-5 transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-[#20383A]">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-amber-400 to-orange-500 text-xl text-white shadow-md">
                <FaEnvelope />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-300">
                  Email Address
                </p>
                <p className="mt-1 break-all font-semibold text-gray-800 dark:text-gray-100">
                  {profile.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditing && (
        <EditProfileInfo
          user={profile}
          onClose={() => setIsEditing(false)}
          onUpdate={(updatedUser) => setProfile(updatedUser)}
        />
      )}
    </>
  );
};

export default ProfileInfo;
