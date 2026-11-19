import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import {
  FaCalendarAlt,
  FaCalendarCheck,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import EditJoinedEvent from "@/components/shared/EditJoinedEvent";
import DeleteJoinedEvent from "@/components/shared/DeleteJoinedEvent";
import { getTokenFromServer } from "@/lib/getTokenFromServer";

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

const ManageEventsPage = async () => {
  const token = await getTokenFromServer();

  // Get logged-in user session
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  // Fetch events created by the logged-in user
  const response = await fetch(
    `http://localhost:8000/myEvents/${encodeURIComponent(session.user.email)}`,

    {
      headers: {
        authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch your created events");
  }

  const myEvents: IEvent[] = await response.json();

  // Sort events by event date
  myEvents.sort(
    (a, b) => new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime(),
  );

  return (
    <main className="min-h-screen bg-linear-to-br from-[#F0F7F1] via-[#F8FBF8] to-[#E5F0E9] px-4 py-12 text-[#1F2937] transition-colors duration-300 dark:from-[#0B1720] dark:via-[#111F25] dark:to-[#142D2B] dark:text-gray-100">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="mb-10 overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm dark:border-white/10 dark:bg-[#14251E]">
          <div className="flex flex-col justify-between gap-6 p-6 sm:p-8 lg:flex-row lg:items-center">
            {/* Heading */}
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                <FaCalendarCheck />
                Event Dashboard
              </div>

              <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                ম্যানেজ ইভেন্ট
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
                আপনার তৈরি করা সকল ইভেন্ট এক জায়গায় পরিচালনা করুন। প্রয়োজন
                অনুযায়ী ইভেন্টের তথ্য সম্পাদনা অথবা মুছে ফেলুন।
              </p>
            </div>

            {/* Event Count */}
            <div className="flex h-12 shrink-0 items-center gap-3 self-start rounded-xl bg-emerald-400 px-6 font-medium text-gray-900 shadow-md shadow-emerald-500/20 transition hover:-translate-y-1 hover:bg-emerald-500 dark:bg-emerald-700 dark:text-white dark:shadow-emerald-600/20 dark:hover:bg-emerald-600 sm:self-auto">
              <FaCalendarAlt />
              <span className="text-sm">মোট তৈরি করা ইভেন্ট</span>

              <span className="flex h-7 min-w-7 items-center justify-center rounded-lg bg-white px-2 text-sm font-extrabold tabular-nums text-gray-900 dark:bg-gray-900 dark:text-white">
                {myEvents.length}
              </span>
            </div>
          </div>
        </div>

        {/* My Created Events */}
        {myEvents.length === 0 ? (
          <div className="rounded-3xl border border-emerald-100 bg-white/80 px-6 py-16 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800/60">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
              <FaCalendarCheck />
            </div>

            <h2 className="text-2xl font-bold">
              আপনি এখনো কোনো ইভেন্ট তৈরি করেননি
            </h2>

            <p className="mx-auto mt-3 max-w-md text-gray-600 dark:text-gray-400">
              নতুন সামাজিক কার্যক্রম তৈরি করুন এবং অন্যদের ভালো কাজে অংশগ্রহণের
              সুযোগ করে দিন।
            </p>

            <Link
              href="/create-event"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
            >
              Create Event
              <FaArrowRight />
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {myEvents.map((event) => (
              <article
                key={event._id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl md:flex-row dark:border-gray-700 dark:bg-gray-800"
              >
                {/* Thumbnail */}
                <div className="relative h-52 shrink-0 overflow-hidden md:h-auto md:w-72 lg:w-80">
                  <Image
                    src={event.thumbnail}
                    alt={event.title}
                    width={1200}
                    height={600}
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-emerald-600 px-4 py-1.5 text-xs font-semibold text-white shadow">
                    {event.eventType}
                  </span>
                </div>

                {/* Event Information */}
                <div className="flex flex-1 flex-col justify-between gap-5 p-5 sm:p-6 lg:flex-row lg:items-center">
                  <div className="min-w-0 flex-1">
                    <h2 className="line-clamp-1 text-xl font-bold">
                      {event.title}
                    </h2>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                      {event.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="shrink-0 text-emerald-600 dark:text-emerald-400" />
                        <span>
                          {new Date(event.eventDate).toLocaleDateString(
                            "en-GB",
                            {
                              day: "2-digit",
                              month: "long",
                              year: "numeric",
                            },
                          )}
                        </span>
                      </div>

                      <div className="flex min-w-0 items-center gap-2">
                        <FaMapMarkerAlt className="shrink-0 text-emerald-600 dark:text-emerald-400" />
                        <span className="line-clamp-1">{event.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex shrink-0 gap-3 border-t border-gray-100 pt-4 lg:w-40 lg:flex-col lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0 dark:border-gray-700">
                    <EditJoinedEvent event={event} />

                    <DeleteJoinedEvent event={event} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default ManageEventsPage;
