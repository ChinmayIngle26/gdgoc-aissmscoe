import { FaLocationDot, FaRegClock } from "react-icons/fa6";
import Image from "next/image";

export default function EventCard({ event }) {
  if (!event) return null;

  return (
    <div className="clash-display hover:scale-105 transition-transform text-xl bg-darkPurple shadow-md overflow-hidden border border-purple p-5">
      <div className="w-full aspect-[16/9] bg-lightPurple mb-5 relative">
        {event.image && (
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover"
          />
        )}
      </div>
      <p className="text-[1rem] darker-grotesque font-medium text-lightPurple flex gap-5 items-center align-middle mb-4">
        <span className="flex align-middle justify-center items-center gap-2">
          <FaLocationDot /> {event.location || "Online"}{" "}
        </span>
        •{" "}
        <span className="flex align-middle justify-center items-center gap-2">
          <FaRegClock /> {event.dateAndTime.split("T").join(" ") || "TBA"}
        </span>
      </p>
      <p className="font-semibold mb-2">{event.title || "Event Name"}</p>
      <p className="darker-grotesque mb-5">
        {event.description || "No description available"}
      </p>
      <div>
        {event.rsvpLink && (
          <a href={event.rsvpLink} target="_blank" rel="noopener noreferrer">
            <button className="font-semibold text-darkPurple bg-lightPink hover:bg-lightPurple hover:text-cream transition-colors px-4 py-2 btn-pink-slidein">
              RSVP Now
            </button>
          </a>
        )}
      </div>
    </div>
  );
}
