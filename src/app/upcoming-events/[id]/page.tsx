import JoinEventButton from "@/components/shared/JoinEventButton";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaLeaf,
  FaUsers,
} from "react-icons/fa";

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

const formatDate = (date: string) => {
  return new Intl.DateTimeFormat("bn-BD", {
    timeZone: "Asia/Dhaka",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00+06:00`));
};

const EventDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const response = await fetch(`http://localhost:8000/events/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    notFound();
  }

  const event: IEvent = await response.json();

  return (
    <main className="relative min-h-screen overflow-hidden bg-linear-to-br from-[#F0F7F1] via-[#F9FCF9] to-[#E5F0E9] text-[#1F2937] dark:from-[#0B1720] dark:via-[#111F25] dark:to-[#142D2B] dark:text-gray-100">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl dark:bg-emerald-500/10" />
      <div className="pointer-events-none absolute -right-32 top-125 h-96 w-96 rounded-full bg-yellow-300/15 blur-3xl dark:bg-yellow-500/5" />

      <section className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* Back Navigation */}
        <Link
          href="/upcoming-events"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-5 py-2.5 text-sm font-bold text-emerald-700 shadow-sm transition hover:-translate-x-1 hover:bg-emerald-50 dark:border-gray-700 dark:bg-gray-900/60 dark:text-emerald-300 dark:hover:bg-gray-800"
        >
          <FaArrowLeft />
          সকল ইভেন্ট
        </Link>

        {/* Event Layout */}
        <div className="grid items-start gap-8 lg:grid-cols-3">
          {/* Main Event Content */}
          <div className="space-y-7 lg:col-span-2">
            {/* Event Image */}
            <div className="group relative h-64 overflow-hidden rounded-3xl border border-emerald-100 shadow-xl shadow-emerald-900/10 sm:h-96 dark:border-gray-700">
              {event.thumbnail ? (
                <Image
                  src={event.thumbnail}
                  alt={event.title}
                  width={1200}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-linear-to-br from-emerald-100 to-green-200 text-7xl text-emerald-600 dark:from-gray-800 dark:to-emerald-950 dark:text-emerald-300">
                  <FaLeaf />
                </div>
              )}

              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

              <span className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-white/90 px-4 py-2 text-sm font-bold text-emerald-800 shadow-lg backdrop-blur-md dark:bg-gray-900/85 dark:text-emerald-300">
                {event.eventType}
              </span>
            </div>

            {/* Event Title & Description */}
            <div className="rounded-3xl border border-emerald-100/80 bg-white/75 p-6 shadow-lg shadow-emerald-900/5 backdrop-blur-sm sm:p-9 dark:border-gray-700 dark:bg-gray-900/60">
              <h1 className="text-2xl leading-snug font-extrabold sm:text-3xl lg:text-4xl">
                {event.title}
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-2">
                  <FaCalendarAlt className="text-emerald-600 dark:text-emerald-400" />
                  {formatDate(event.eventDate)}
                </span>

                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-emerald-600 dark:text-emerald-400" />
                  {event.location}
                </span>
              </div>

              <div className="my-7 h-px bg-emerald-100 dark:bg-gray-700" />

              <h2 className="mb-4 text-lg font-extrabold sm:text-xl">
                ইভেন্ট সম্পর্কে
              </h2>

              <p className="text-sm leading-8 whitespace-pre-line text-gray-600 sm:text-base dark:text-gray-300">
                {event.description}
              </p>
            </div>
          </div>

          {/* Event Information Sidebar */}
          <aside className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-3xl border border-emerald-100 bg-white/85 shadow-xl shadow-emerald-900/10 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/80">
              {/* Sidebar Header */}
              <div className="bg-linear-to-r from-emerald-700 to-green-600 px-6 py-6 text-white dark:from-emerald-900 dark:to-teal-900">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-2xl">
                  <FaLeaf />
                </div>

                <h2 className="mt-4 text-xl font-extrabold">ইভেন্টের তথ্য</h2>
              </div>

              {/* Event Information */}
              <div className="space-y-6 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                    <FaCalendarAlt />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                      ইভেন্টের তারিখ
                    </p>
                    <p className="mt-1 font-bold">
                      {formatDate(event.eventDate)}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                      স্থান
                    </p>
                    <p className="mt-1 font-bold">{event.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                    <FaUsers />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                      ইভেন্টের ধরন
                    </p>
                    <p className="mt-1 font-bold">{event.eventType}</p>
                  </div>
                </div>

                <div className="h-px bg-emerald-100 dark:bg-gray-700" />

                {/* Join Event Button - Functionality */}

                <JoinEventButton event={event} />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default EventDetailsPage;
