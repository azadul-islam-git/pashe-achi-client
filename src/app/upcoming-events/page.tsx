import EventCard from "@/components/shared/EventCard";
import Link from "next/link";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaExclamationCircle,
  FaLeaf,
} from "react-icons/fa";

type EventItem = {
  _id: string;
  title: string;
  description: string;
  eventDate: string;
  eventType: string;
  thumbnail: string;
  location: string;
  creatorEmail: string;
  [key: string]: unknown;
};

const getToday = () => {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Dhaka",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
};

const UpcomingEventsPage = async () => {
  let events: EventItem[] = [];
  let error = false;

  try {
    const response = await fetch("http://localhost:8000/events", {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch events");
    }

    const result = await response.json();

    events = result;

    const today = getToday();

    events = events
      .filter((event) => event.eventDate >= today)
      .sort((a, b) => a.eventDate.localeCompare(b.eventDate));
  } catch (err) {
    console.error("Upcoming events error:", err);
    error = true;
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-linear-to-br from-[#F0F7F1] via-[#F9FCF9] to-[#E4F1E8] text-[#1F2937] dark:from-[#0B1720] dark:via-[#111F25] dark:to-[#142D2B] dark:text-gray-100">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl dark:bg-emerald-500/10" />
      <div className="pointer-events-none absolute -right-32 top-96 h-96 w-96 rounded-full bg-yellow-300/20 blur-3xl dark:bg-yellow-500/5" />

      {/* Events Section */}
      <section className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pb-28">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            সামনে যেসব{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              আয়োজন
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-[#FBBF24]" />
        </div>

        {/* Error State */}
        {error && (
          <div className="mx-auto max-w-2xl rounded-3xl border border-red-200 bg-white/80 px-6 py-16 text-center shadow-lg shadow-red-900/5 dark:border-red-900/50 dark:bg-gray-900/70">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-red-50 text-4xl text-red-500 dark:bg-red-950/40">
              <FaExclamationCircle />
            </div>

            <h3 className="mt-6 text-xl font-extrabold">
              ইভেন্ট লোড করা যায়নি
            </h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-600 dark:text-gray-400">
              সার্ভারের সঙ্গে সংযোগ স্থাপন করা যাচ্ছে না। অনুগ্রহ করে কিছুক্ষণ
              পর আবার চেষ্টা করুন।
            </p>
          </div>
        )}

        {/* Empty State */}
        {!error && events.length === 0 && (
          <div className="mx-auto max-w-2xl rounded-3xl border border-emerald-100 bg-white/75 px-6 py-16 text-center shadow-xl shadow-emerald-900/5 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/60">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-linear-to-br from-emerald-100 to-green-200 text-5xl text-emerald-600 dark:from-emerald-950 dark:to-gray-800 dark:text-emerald-300">
              <FaLeaf />
            </div>

            <h3 className="mt-7 text-2xl font-extrabold">
              আপাতত কোনো আসন্ন ইভেন্ট নেই
            </h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-600 dark:text-gray-400">
              নতুন কোনো উদ্যোগের অপেক্ষায় আছি। আপনিই হতে পারেন পরবর্তী ভালো
              কাজের আয়োজক। একটি উদ্যোগ শুরু করুন, অন্যদেরও পাশে দাঁড়ানোর সুযোগ
              করে দিন।
            </p>

            <Link
              href="/create-event"
              className="btn mt-8 rounded-xl border-none bg-[#FBBF24] px-7 text-[#1F2937] shadow-md shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#F5B91A] hover:shadow-lg"
            >
              ইভেন্ট তৈরি করুন
              <FaArrowRight />
            </Link>
          </div>
        )}

        {/* Event Cards */}
        {!error && events.length > 0 && (
          <>
            <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-extrabold sm:text-2xl">
                  আসন্ন কার্যক্রম
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  আপনার পছন্দের উদ্যোগে অংশ নিন।
                </p>
              </div>

              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-4 py-2 text-sm font-bold text-emerald-700 shadow-sm dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
                <FaCalendarAlt />
                মোট {events.length} টি ইভেন্ট
              </span>
            </div>

            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default UpcomingEventsPage;
