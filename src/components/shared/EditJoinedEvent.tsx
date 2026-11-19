"use client";

import { useRef, useState } from "react";
import {
  FaCalendarCheck,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaImage,
  FaTag,
  FaSave,
  FaTimes,
} from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { getTokenFromClient } from "@/lib/getTokenFromClient";

interface IEvent {
  _id: string;
  title: string;
  description: string;
  eventType: string;
  thumbnail: string;
  location: string;
  eventDate: string;
  creatorEmail: string;
}

const EditJoinedEvent = ({ event }: { event: IEvent }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const { data: session } = authClient.useSession();
  const router = useRouter();

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!session?.user?.email) {
      toast.error("Please login first");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    const updatedEvent = {
      email: session.user.email,
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      eventType: formData.get("eventType") as string,
      thumbnail: formData.get("thumbnail") as string,
      location: formData.get("location") as string,
      eventDate: formData.get("eventDate") as string,
    };

    if (
      !updatedEvent.title.trim() ||
      !updatedEvent.description.trim() ||
      !updatedEvent.location.trim()
    ) {
      toast.error("সব প্রয়োজনীয় তথ্য সঠিকভাবে পূরণ করুন।");
      return;
    }

    const today = new Date().toLocaleDateString("en-CA", {
      timeZone: "Asia/Dhaka",
    });

    if (updatedEvent.eventDate <= today) {
      toast.error("Event date must be in the future");
      return;
    }

    setIsUpdating(true);

    const token = await getTokenFromClient();

    const response = await fetch(`http://localhost:8000/events/${event._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedEvent),
    });

    const result = await response.json();

    if (!response.ok) {
      toast.error(result.message || "Failed to update event");
      setIsUpdating(false);
      return;
    }

    toast.success("ইভেন্টটি সফলভাবে আপডেট করা হয়েছে!");

    setIsUpdating(false);
    dialogRef.current?.close();
    router.refresh();
  };

  return (
    <>
      {/* Edit Button */}
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className="flex items-center justify-center gap-2 rounded-xl bg-[#FBBF24] px-3 py-3 text-sm font-semibold text-[#1F2937] transition hover:bg-[#F5B91A] cursor-pointer"
      >
        <FaCalendarCheck />
        Edit
      </button>

      {/* Edit Modal */}
      <dialog ref={dialogRef} className="modal">
        <div className="modal-box max-h-[90vh] max-w-2xl overflow-y-auto rounded-3xl border border-emerald-100 bg-white p-0 text-[#1F2937] dark:border-white/10 dark:bg-[#14251E] dark:text-gray-100">
          {/* Modal Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-emerald-100 bg-white px-6 py-5 dark:border-white/10 dark:bg-[#14251E] sm:px-8">
            <h2 className="text-xl font-extrabold sm:text-2xl">
              ইভেন্টের তথ্য সম্পাদনা
            </h2>

            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition hover:bg-red-100 hover:text-red-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-red-950/40 dark:hover:text-red-400 cursor-pointer"
              aria-label="Close modal"
            >
              <FaTimes />
            </button>
          </div>

          {/* Modal Form */}
          <form onSubmit={handleUpdate} className="space-y-5 p-6 sm:p-8">
            {/* Event Title */}
            <div className="form-control">
              <label className="mb-2 flex items-center gap-2 font-semibold">
                <FaCalendarCheck className="text-emerald-600 dark:text-emerald-400" />
                Event Title
              </label>

              <input
                type="text"
                name="title"
                defaultValue={event.title}
                placeholder="Enter event title"
                className="input h-12 w-full rounded-xl border-gray-200 bg-gray-50 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900/50"
                required
              />
            </div>

            {/* Description */}
            <div className="form-control">
              <label className="mb-2 font-semibold">Event Description</label>

              <textarea
                name="description"
                defaultValue={event.description}
                placeholder="Describe your event..."
                rows={4}
                className="textarea w-full rounded-xl border-gray-200 bg-gray-50 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900/50"
                required
              />
            </div>

            {/* Event Type */}
            <div>
              <label className="mb-2 flex items-center gap-2 font-semibold">
                <FaTag className="text-emerald-600 dark:text-emerald-400" />
                ইভেন্টের ধরন
              </label>

              <select
                name="eventType"
                defaultValue={event.eventType}
                required
                className="select h-12 w-full rounded-xl border-gray-300 bg-white text-sm text-gray-800 outline-none focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 [&_option]:bg-white [&_option]:text-gray-800 dark:[&_option]:bg-gray-900 dark:[&_option]:text-gray-100"
              >
                <option value="cleanup">পরিচ্ছন্নতা অভিযান (Cleanup)</option>
                <option value="plantation">বৃক্ষরোপণ (Plantation)</option>
                <option value="donation">ত্রাণ ও অনুদান (Donation)</option>
                <option value="blood-donation">রক্তদান (Blood Donation)</option>
                <option value="education">
                  শিক্ষা সহায়তা (Education Support)
                </option>
                <option value="health-camp">
                  স্বাস্থ্য ক্যাম্প (Health Camp)
                </option>
                <option value="other">অন্যান্য (Other)</option>
              </select>
            </div>

            {/* Thumbnail URL */}
            <div className="form-control">
              <label className="mb-2 flex items-center gap-2 font-semibold">
                <FaImage className="text-emerald-600 dark:text-emerald-400" />
                Thumbnail Image URL
              </label>

              <input
                type="url"
                name="thumbnail"
                defaultValue={event.thumbnail}
                placeholder="https://example.com/image.jpg"
                className="input h-12 w-full rounded-xl border-gray-200 bg-gray-50 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900/50"
                required
              />
            </div>

            {/* Location */}
            <div className="form-control">
              <label className="mb-2 flex items-center gap-2 font-semibold">
                <FaMapMarkerAlt className="text-emerald-600 dark:text-emerald-400" />
                Location
              </label>

              <input
                type="text"
                name="location"
                defaultValue={event.location}
                placeholder="Enter event location"
                className="input h-12 w-full rounded-xl border-gray-200 bg-gray-50 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900/50"
                required
              />
            </div>

            {/* Event Date */}
            <div className="form-control">
              <label className="mb-2 flex items-center gap-2 font-semibold">
                <FaCalendarAlt className="text-emerald-600 dark:text-emerald-400" />
                Event Date
              </label>

              <input
                type="date"
                name="eventDate"
                defaultValue={event.eventDate}
                min={new Date().toLocaleDateString("en-CA", {
                  timeZone: "Asia/Dhaka",
                })}
                className="input h-12 w-full rounded-xl border-gray-200 bg-gray-50 focus:border-emerald-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900/50"
                required
              />
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col-reverse gap-3 border-t border-gray-100 pt-5 dark:border-gray-700 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                disabled={isUpdating}
                className="btn h-12 rounded-xl border border-gray-200 bg-white px-6 font-bold text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isUpdating}
                className={`btn h-12 rounded-xl border-none bg-[#FBBF24] px-6 font-bold text-[#1F2937] shadow-md shadow-yellow-500/20 ${
                  isUpdating
                    ? "cursor-not-allowed opacity-70"
                    : "cursor-pointer hover:bg-[#F5B91A]"
                }`}
              >
                {isUpdating ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
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

        {/* Click Outside to Close */}
        <form method="dialog" className="modal-backdrop">
          <button type="submit">close</button>
        </form>
      </dialog>
    </>
  );
};

export default EditJoinedEvent;
