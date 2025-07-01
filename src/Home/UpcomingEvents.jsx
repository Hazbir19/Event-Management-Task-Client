import { Calendar, MapPin } from 'lucide-react';

const dummyEvents = [
  {
    title: "Tech Talk",
    datetime: "2025-07-05T10:00:00",
    location: "Online",
  },
  {
    title: "Design Workshop",
    datetime: "2025-07-07T14:00:00",
    location: "San Francisco, CA",
  },
  {
    title: "Startup Meetup",
    datetime: "2025-07-10T16:00:00",
    location: "New York, NY",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-8">Upcoming Events</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {dummyEvents.map((event, idx) => (
          <div key={idx} className="border rounded-lg p-4 shadow hover:shadow-md">
            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
            <p className="flex items-center text-sm text-gray-600"><Calendar size={16} className="mr-2" /> {new Date(event.datetime).toLocaleString()}</p>
            <p className="flex items-center text-sm text-gray-600"><MapPin size={16} className="mr-2" /> {event.location}</p>
            <button className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-violet-800">Join Event</button>
          </div>
        ))}
      </div>
    </section>
  );
}