import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaLeaf,
} from "react-icons/fa";

export interface IEvent {
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

const EventCard = ({ event }: { event: IEvent }) => {
  return (
    <article className="group overflow-hidden rounded-3xl border border-emerald-100/80 bg-white/90 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-900/10 dark:border-gray-700 dark:bg-gray-900/80">
      {/* Thumbnail */}
      <div className="relative h-56 overflow-hidden bg-emerald-100 dark:bg-gray-800">
        {event.thumbnail ? (
          <Image
            src={event.thumbnail}
            alt={event.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-linear-to-br from-emerald-100 to-green-200 text-5xl text-emerald-600 dark:from-gray-800 dark:to-emerald-950 dark:text-emerald-300">
            <FaLeaf />
          </div>
        )}

        <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/90 px-4 py-2 text-xs font-bold text-emerald-700 shadow-sm backdrop-blur dark:border-gray-600 dark:bg-gray-900/90 dark:text-emerald-300">
          {event.eventType}
        </span>
      </div>

      {/* Event Information */}
      <div className="p-6">
        <h3 className="line-clamp-1 text-xl font-extrabold transition group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
          {event.title}
        </h3>

        <p className="mt-3 line-clamp-2 min-h-12 text-sm leading-6 text-gray-600 dark:text-gray-400">
          {event.description}
        </p>

        <div className="mt-5 space-y-3 border-t border-gray-100 pt-5 text-sm dark:border-gray-700">
          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
            <FaMapMarkerAlt className="shrink-0 text-emerald-600 dark:text-emerald-400" />
            <span className="line-clamp-1">{event.location}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
            <FaCalendarAlt className="shrink-0 text-emerald-600 dark:text-emerald-400" />
            <span>{formatDate(event.eventDate)}</span>
          </div>
        </div>

        {/* View Event Button */}
        <Link
          href={`/upcoming-events/${event._id}`}
          className="btn mt-6 h-12 w-full rounded-xl border-none bg-[#FBBF24] font-bold text-[#1F2937] shadow-sm transition hover:bg-[#F5B91A]"
        >
          View Event
          <FaArrowRight />
        </Link>
      </div>
    </article>
  );
};

export default EventCard;
