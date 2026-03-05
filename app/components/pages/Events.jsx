import EventCard from "../EventCard";
import RadialButton from "../RadialButton";

export default function Events({ events = [] }) {
  return (
    <div
      id="events"
      className="scroll-mt-[80px] min-h-[calc(100vh-104px)] w-full bg-gradient-to-b from-purple to-darkPurple text-cream resp-px p-14"
    >
      <h1 className="clash-display font-semibold text-4xl mb-10">Events</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      <p className="clash-display font-semibold text-3xl mb-8">
        Have an idea for an event? Let&apos;s make it happen.
      </p>

      <RadialButton href={""}>Propose an Event</RadialButton>
    </div>
  );
}

