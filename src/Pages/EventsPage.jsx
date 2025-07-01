import { useEffect, useState } from 'react';
import axios from 'axios';
import { Calendar, MapPin, User, Users } from 'lucide-react';
import { toast } from 'react-toastify';


const filterOptions = [
  { label: 'Today', value: 'today' },
  { label: 'Current Week', value: 'current-week' },
  { label: 'Last Week', value: 'last-week' },
  { label: 'Current Month', value: 'current-month' },
  { label: 'Last Month', value: 'last-month' }
];

export default function EventsPage() {

  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const user = JSON.parse(localStorage.getItem("user"));
  const { email} = user
  const fetchEvents = async () => {
    let url = 'https://event-management-server-side-sigma.vercel.app/events';
    const response = await axios.get(url);
    setEvents(response.data);
    if (search || filter) {
      url = `https://event-management-server-side-sigma.vercel.app/search?title=${search}&range=${filter}`;
    }

    const res = await axios.get(url);
    setEvents(res.data);
  };

  useEffect(() => {
    fetchEvents();
  }, [search, filter]);

  const handleJoin = async (id) => {
    try {
      await axios.put(`https://event-management-server-side-sigma.vercel.app/join/${id}`, { email: user?.email});
      fetchEvents(); // refresh
    } catch (err) {
      toast.warning(err.response?.data?.message || 'Already joined or error occurred.');
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
        <input
          type="text"
          placeholder="Search by title"
          className="border p-2 rounded w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All Dates</option>
          {filterOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {events.map((event) => (
          <div key={event._id} className="border rounded-xl p-5 shadow space-y-2">
            <h3 className="text-xl font-bold">{event.title}</h3>
            <p className="flex items-center gap-2 text-sm"><User size={16} /> {event.name}</p>
            <p className="flex items-center gap-2 text-sm"><Calendar size={16} /> {new Date(event.datetime).toLocaleString()}</p>
            <p className="flex items-center gap-2 text-sm"><MapPin size={16} /> {event.location}</p>
            <p className="text-sm">{event.description}</p>
            <p className="flex items-center gap-2 text-sm"><Users size={16} /> Attendees: {event.attendeeCount}</p>
            <button
              onClick={() => handleJoin(event._id)}
              className="bg-primary hover:bg-violet-800 text-white py-1 px-4 rounded"
            >
              Join Event
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
