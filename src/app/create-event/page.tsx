"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useSyncExternalStore } from "react";
import toast from "react-hot-toast";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaImage,
  FaMapMarkerAlt,
  FaRegLightbulb,
} from "react-icons/fa";

interface IEventData {
  title: string;
  description: string;
  eventType: string;
  thumbnail: string;
  location: string;
  eventDate: string;
  creatorEmail: string;
}

const CreateEventPage = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  // future date pick
  const emptySubscribe = () => () => {};
  const getToday = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const today = mounted ? getToday() : undefined;

  const handleCreateEvent = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    // get from data
    const form = e.currentTarget;
    const formData = new FormData(form);
    const eventData: IEventData = {
      ...Object.fromEntries(formData.entries()),
      creatorEmail: session?.user.email,
    } as IEventData;

    if (eventData.eventDate <= getToday()) {
      toast.error("ইভেন্টের তারিখ অবশ্যই ভবিষ্যতের হতে হবে।");
      return;
    }

    // send data to database
    try {
      const response = await fetch("http://localhost:8000/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message || "ইভেন্ট তৈরি করা যায়নি।");
        return;
      }

      toast.success("ইভেন্ট সফলভাবে তৈরি হয়েছে!");
      form.reset();
      router.push("/upcoming-events");
    } catch (error) {
      console.error(error);
      toast.error("কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    }
  };

  return (
    <section className="min-h-screen bg-linear-to-br from-[#F0F7F1] via-[#F8FBF8] to-[#E5F0E9] px-4 py-12 text-[#1F2937] dark:from-[#0B1720] dark:via-[#111F25] dark:to-[#142D2B] dark:text-gray-100 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-5xl">
        {/* Back Link */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition hover:text-emerald-900 dark:text-emerald-400 dark:hover:text-emerald-300"
        >
          <FaArrowLeft />
          হোমে ফিরে যান
        </Link>

        {/* Page Heading */}
        <div className="mb-10 text-center">
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            একটি নতুন{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              ইভেন্ট
            </span>{" "}
            তৈরি করুন
          </h1>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
            আপনার এলাকার মানুষের সঙ্গে ভালো কাজের উদ্যোগ নিন। একটি ইভেন্ট তৈরি
            করুন এবং সবাইকে একসাথে কাজ করার সুযোগ দিন।
          </p>
        </div>

        {/* Form Card */}
        <div className="overflow-hidden rounded-3xl border border-emerald-100 bg-white/90 shadow-xl shadow-emerald-900/5 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/80 dark:shadow-black/20">
          {/* Card Header */}
          <div className="border-b border-emerald-100 bg-linear-to-r from-emerald-50 to-teal-50 px-6 py-6 dark:border-gray-700 dark:from-gray-800 dark:to-[#15332E] sm:px-10">
            <h2 className="text-xl font-bold sm:text-2xl">
              ইভেন্টের বিস্তারিত তথ্য
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              নিচের তথ্যগুলো দিয়ে আপনার ইভেন্টটি সাজিয়ে তুলুন।
            </p>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleCreateEvent} className="space-y-7 p-6 sm:p-10">
            {/* Title */}
            <div>
              <label htmlFor="title" className="mb-2 block text-sm font-bold">
                ইভেন্টের নাম
                <span className="ml-1 text-red-500">*</span>
              </label>

              <input
                id="title"
                name="title"
                type="text"
                required
                placeholder="যেমন: আমাদের এলাকায় পরিচ্ছন্নতা অভিযান"
                className="input h-12 w-full rounded-xl border-gray-300 bg-white text-sm text-gray-800 outline-none focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-bold"
              >
                ইভেন্টের বিবরণ
                <span className="ml-1 text-red-500">*</span>
              </label>

              <textarea
                id="description"
                name="description"
                rows={5}
                required
                placeholder="আপনার ইভেন্ট সম্পর্কে বিস্তারিত লিখুন..."
                className="textarea w-full resize-none rounded-xl border-gray-300 bg-white text-sm text-gray-800 outline-none focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
              />
            </div>

            {/* Event Type */}
            <div>
              <label
                htmlFor="eventType"
                className="mb-2 block text-sm font-bold"
              >
                ইভেন্টের ধরন
                <span className="ml-1 text-red-500">*</span>
              </label>

              <select
                id="eventType"
                name="eventType"
                defaultValue=""
                required
                className="select h-12 w-full rounded-xl border-gray-300 bg-white text-sm text-gray-800 outline-none focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
              >
                <option value="" disabled>
                  ইভেন্টের ধরন নির্বাচন করুন
                </option>
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
            <div>
              <label
                htmlFor="thumbnail"
                className="mb-2 flex items-center gap-2 text-sm font-bold"
              >
                <FaImage className="text-emerald-600 dark:text-emerald-400" />
                থাম্বনেইল ছবির URL
              </label>

              <input
                id="thumbnail"
                name="thumbnail"
                type="url"
                required
                placeholder="https://example.com/event-image.jpg"
                className="input h-12 w-full rounded-xl border-gray-300 bg-white text-sm text-gray-800 outline-none focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
              />

              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                আপনার ইভেন্টের জন্য একটি ছবির সরাসরি URL দিন।
              </p>
            </div>

            {/* Location and Date */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Location */}
              <div>
                <label
                  htmlFor="location"
                  className="mb-2 flex items-center gap-2 text-sm font-bold"
                >
                  <FaMapMarkerAlt className="text-emerald-600 dark:text-emerald-400" />
                  ইভেন্টের স্থান
                  <span className="text-red-500">*</span>
                </label>

                <input
                  id="location"
                  name="location"
                  type="text"
                  required
                  placeholder="যেমন: মিরপুর, ঢাকা"
                  className="input h-12 w-full rounded-xl border-gray-300 bg-white text-sm text-gray-800 outline-none focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                />
              </div>

              {/* Date */}
              <div>
                <label
                  htmlFor="eventDate"
                  className="mb-2 flex items-center gap-2 text-sm font-bold"
                >
                  <FaCalendarAlt className="text-emerald-600 dark:text-emerald-400" />
                  ইভেন্টের তারিখ
                  <span className="text-red-500">*</span>
                </label>

                <input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  min={today}
                  required
                  className="input h-12 w-full rounded-xl border-gray-300 bg-white text-sm text-gray-800 outline-none focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                />
              </div>
            </div>

            {/* Helpful Note */}
            <div className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/60 dark:bg-amber-950/30">
              <FaRegLightbulb className="mt-0.5 shrink-0 text-lg text-amber-600 dark:text-amber-400" />
              <p className="text-xs leading-6 text-amber-900 dark:text-amber-200 sm:text-sm">
                ইভেন্টের নাম, বিবরণ, স্থান এবং তারিখ সঠিকভাবে দিন। এতে অন্যরা
                সহজেই আপনার উদ্যোগ সম্পর্কে জানতে পারবে।
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col-reverse gap-3 border-t border-gray-200 pt-6 dark:border-gray-700 sm:flex-row sm:justify-end">
              <button
                type="submit"
                disabled={isPending}
                className="btn h-12 rounded-xl border-none bg-[#FBBF24] px-8 text-sm font-bold text-[#1F2937] shadow-lg shadow-yellow-500/20 transition hover:bg-[#F5B91A]"
              >
                ইভেন্ট তৈরি করুন
              </button>
            </div>
          </form>
        </div>

        {/* Bottom Text */}
        <p className="mt-8 text-center text-sm font-medium text-gray-500 dark:text-gray-400">
          প্রতিটি ভালো কাজ শুরু হোক একজনের পাশে দাঁড়িয়ে।
        </p>
      </div>
    </section>
  );
};

export default CreateEventPage;
