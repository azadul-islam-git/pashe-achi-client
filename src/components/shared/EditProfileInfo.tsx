"use client";

import { useState } from "react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { FaTimes, FaUser, FaImage, FaSave } from "react-icons/fa";

interface ProfileUser {
  name: string;
  email: string;
  image?: string | null;
}

interface EditProfileInfoProps {
  user: ProfileUser;
  onClose: () => void;
  onUpdate: (updatedUser: ProfileUser) => void;
}

const EditProfileInfo = ({ user, onClose, onUpdate }: EditProfileInfoProps) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name")?.toString().trim() || "";
    const image = formData.get("image")?.toString().trim() || "";

    if (name.length < 3) {
      toast.error("Name must be at least 3 characters long.");
      return;
    }

    if (!image) {
      toast.error("Please enter your profile picture URL.");
      return;
    }

    setIsUpdating(true);

    const toastId = toast.loading("Updating your profile...");

    const { error } = await authClient.updateUser({
      name,
      image,
    });

    if (error) {
      toast.error(error.message || "Failed to update profile.", {
        id: toastId,
      });

      setIsUpdating(false);
      return;
    }

    const updatedUser = {
      ...user,
      name,
      image,
    };

    onUpdate(updatedUser);

    toast.success("Profile updated successfully!", {
      id: toastId,
    });

    setIsUpdating(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 px-4 py-8 backdrop-blur-sm">
      <div className="relative my-auto w-full max-w-lg overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-2xl dark:border-gray-700 dark:bg-[#172B30]">
        {/* Modal Header */}
        <div className="relative overflow-hidden bg-linear-to-br from-emerald-700 via-emerald-600 to-teal-600 px-6 pb-14 pt-6 sm:px-8">
          <div className="pointer-events-none absolute -left-12 -top-12 size-48 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 right-0 size-52 rounded-full bg-amber-300/25 blur-3xl" />

          <div className="relative flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-white">
                Edit Profile
              </h2>

              <p className="mt-1 text-sm text-emerald-50/90">
                Update your personal information.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              disabled={isUpdating}
              aria-label="Close"
              className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/25 disabled:opacity-50"
            >
              <FaTimes />
            </button>
          </div>
        </div>

        {/* Avatar (overlapping the header) */}
        <div className="relative z-10 -mt-12 flex justify-center">
          <div className="flex size-24 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-emerald-100 shadow-xl ring-4 ring-emerald-500/20 dark:border-[#172B30] dark:bg-emerald-900">
            {user.image ? (
              <Image
                src={user.image}
                alt={user.name}
                width={96}
                height={96}
                className="size-full object-cover"
              />
            ) : (
              <FaUser className="text-4xl text-emerald-600 dark:text-emerald-300" />
            )}
          </div>
        </div>

        {/* Edit Form */}
        <form
          onSubmit={handleUpdateProfile}
          className="space-y-5 px-6 pb-8 pt-6 sm:px-8"
        >
          {/* Name */}
          <div className="form-control">
            <label
              htmlFor="name"
              className="mb-2 flex items-center gap-3 text-sm font-semibold text-gray-800 dark:text-gray-200"
            >
              <span className="flex size-8 items-center justify-center rounded-lg bg-linear-to-br from-emerald-500 to-teal-500 text-sm text-white shadow">
                <FaUser />
              </span>
              Full Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              defaultValue={user.name}
              minLength={3}
              required
              placeholder="Enter your name"
              className="input input-bordered w-full rounded-xl bg-white text-gray-800 transition focus:border-emerald-500 focus:outline-emerald-500/30 dark:bg-[#20383A] dark:text-white"
            />
          </div>

          {/* Profile Picture */}
          <div className="form-control">
            <label
              htmlFor="image"
              className="mb-2 flex items-center gap-3 text-sm font-semibold text-gray-800 dark:text-gray-200"
            >
              <span className="flex size-8 items-center justify-center rounded-lg bg-linear-to-br from-sky-500 to-indigo-500 text-sm text-white shadow">
                <FaImage />
              </span>
              Profile Picture URL
            </label>

            <input
              id="image"
              name="image"
              type="url"
              defaultValue={user.image || ""}
              required
              placeholder="https://example.com/photo.jpg"
              className="input input-bordered w-full rounded-xl bg-white text-gray-800 transition focus:border-emerald-500 focus:outline-emerald-500/30 dark:bg-[#20383A] dark:text-white"
            />
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-100 dark:bg-gray-700" />

          {/* Buttons */}
          <div className="flex flex-col-reverse gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onClose}
              disabled={isUpdating}
              className="btn btn-outline flex-1 rounded-xl"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isUpdating}
              className="btn btn-primary flex-1 rounded-xl font-bold shadow-lg shadow-primary/20 transition hover:-translate-y-0.5"
            >
              {isUpdating ? (
                <>
                  <span className="loading loading-spinner loading-sm" />
                  Updating...
                </>
              ) : (
                <>
                  <FaSave />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileInfo;
