import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

interface IEvent {
  _id: string;
  title: string;
  description: string;
  eventType: string;
  thumbnail: string;
  location: string;
  eventDate: string;
}

const RecentUpcomingEvents = async () => {
  const response = await fetch("http://localhost:8000/upcomingEvents", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch upcoming events");
  }

  const events: IEvent[] = await response.json();

  return (
    <section className="bg-linear-to-br from-[#F0F7F1] via-[#F8FBF8] to-[#E5F0E9] px-4 py-16 dark:from-[#0B1720] dark:via-[#111F25] dark:to-[#142D2B] md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <p className="mb-3 font-semibold tracking-widest text-emerald-600 dark:text-emerald-400">
            UPCOMING EVENTS
          </p>

          <h2 className="text-3xl font-bold text-[#1F2937] dark:text-white md:text-4xl">
            আসন্ন ইভেন্টসমূহ
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
            আমাদের সাথে যুক্ত হোন এবং সমাজের জন্য ভালো কিছু করার যাত্রায় অংশ
            নিন।
          </p>
        </div>

        {/* Events Grid */}
        {events.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {events.map((event) => (
              <div
                key={event._id}
                className="overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-[#1B2B30]"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={event.thumbnail}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-[#1F2937] dark:text-white">
                    {event.title}
                  </h3>

                  <p className="mb-5 line-clamp-2 text-sm leading-7 text-gray-600 dark:text-gray-300">
                    {event.description}
                  </p>

                  <div className="mb-5 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                    <p className="flex items-center gap-2">
                      <FaCalendarAlt className="text-emerald-600 dark:text-emerald-400" />
                      {event.eventDate}
                    </p>

                    <p className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-emerald-600 dark:text-emerald-400" />
                      {event.location}
                    </p>
                  </div>

                  <Link
                    href={`/upcoming-events/${event._id}`}
                    className="inline-flex rounded-lg bg-[#FBBF24] px-5 py-2.5 font-semibold text-[#1F2937] transition hover:bg-[#F5B91A]"
                  >
                    বিস্তারিত দেখুন
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-white/70 py-12 text-center dark:bg-[#1B2B30]">
            <p className="text-lg font-semibold text-gray-600 dark:text-gray-300">
              বর্তমানে কোনো আসন্ন ইভেন্ট নেই।
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentUpcomingEvents;
