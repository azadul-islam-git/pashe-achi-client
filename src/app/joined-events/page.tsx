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

interface IJoinedEvent {
  _id: string;
  eventId: string;
  event: {
    title: string;
    description: string;
    eventType: string;
    thumbnail: string;
    location: string;
    eventDate: string;
  };
  user: {
    name: string;
    email: string;
  };
  joinedAt: string;
}

const JoinedEventsPage = async () => {
  // Get the logged-in user's session
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // Redirect users who are not logged in
  if (!session) {
    redirect("/signin");
  }

  // Fetch the logged-in user's joined events
  const response = await fetch(
    `http://localhost:8000/joinedEvents/${encodeURIComponent(session.user.email)}`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch joined events");
  }

  const joinedEvents: IJoinedEvent[] = await response.json();

  // Sort events by date (earliest first)
  joinedEvents.sort(
    (a, b) =>
      new Date(a.event.eventDate).getTime() -
      new Date(b.event.eventDate).getTime(),
  );

  return (
    <main className="min-h-screen bg-[#F8FAF9] px-4 py-12 text-gray-900 transition-colors duration-300 dark:bg-[#0B1713] dark:text-gray-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm dark:border-white/10 dark:bg-[#14251E]">
          <div className="flex flex-col justify-between gap-6 p-6 sm:p-8 lg:flex-row lg:items-center">
            {/* Heading */}
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                <FaCalendarCheck />
                My Activities
              </div>

              <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                আমার যোগদানকৃত ইভেন্ট
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500 dark:text-gray-400 sm:text-base">
                আপনার অংশগ্রহণ করা সকল ইভেন্ট এক জায়গায় দেখুন এবং আপনার
                কার্যক্রম পরিচালনা করুন।
              </p>
            </div>

            {/* Stats and Action */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              {/* Event Count */}
              <div className="flex h-12 shrink-0 items-center gap-3 rounded-xl bg-emerald-400 px-6 font-medium text-gray-900 shadow-md shadow-emerald-500/20 transition hover:-translate-y-1 hover:bg-emerald-500 dark:bg-emerald-700 dark:text-white dark:shadow-emerald-600/20 dark:hover:bg-emerald-600">
                <FaCalendarAlt />
                <span className="text-sm">মোট যোগদানকৃত ইভেন্ট</span>
                <span className="flex h-7 min-w-7 items-center justify-center rounded-lg bg-white px-2 text-sm font-extrabold tabular-nums text-gray-900 dark:bg-gray-900 dark:text-white">
                  {joinedEvents.length}
                </span>
              </div>

              {/* Manage Button */}
              <Link
                href="/manage-events"
                className="btn h-12 rounded-xl border-none bg-[#FBBF24] px-6 font-bold text-[#1F2937] shadow-md shadow-yellow-500/20 transition hover:-translate-y-1 hover:bg-[#F5B91A]"
              >
                <FaCalendarCheck />
                Manage Events
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>

        {/* Joined Events */}
        {joinedEvents.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-white px-6 py-20 text-center dark:border-white/15 dark:bg-[#14251E]">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-50 text-3xl text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
              <FaCalendarCheck />
            </div>

            <h2 className="text-2xl font-bold">এখনো কোনো ইভেন্টে যোগ দেননি</h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-500 dark:text-gray-400">
              বিভিন্ন সামাজিক কার্যক্রমে অংশগ্রহণ করুন এবং ভালো কাজের অংশ হয়ে
              উঠুন।
            </p>

            <Link
              href="/upcoming-events"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
            >
              Explore Events
              <FaArrowRight />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {joinedEvents.map((joinedEvent) => (
              <div
                key={joinedEvent._id}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/5 dark:border-white/10 dark:bg-[#14251E]"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={joinedEvent.event.thumbnail}
                    alt={joinedEvent.event.title}
                    width={1200}
                    height={600}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent" />

                  <span className="absolute left-4 top-4 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                    {joinedEvent.event.eventType}
                  </span>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="line-clamp-2 text-xl font-bold text-white drop-shadow-md">
                      {joinedEvent.event.title}
                    </h2>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <p className="line-clamp-2 min-h-12 text-sm leading-6 text-gray-500 dark:text-gray-400">
                    {joinedEvent.event.description}
                  </p>

                  <div className="my-5 border-t border-gray-100 dark:border-white/10" />

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                        <FaCalendarAlt />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Event Date</p>
                        <p className="mt-0.5 text-sm font-semibold">
                          {new Date(
                            joinedEvent.event.eventDate,
                          ).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                        <FaMapMarkerAlt />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-gray-400">Location</p>
                        <p className="mt-0.5 truncate text-sm font-semibold">
                          {joinedEvent.event.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default JoinedEventsPage;
