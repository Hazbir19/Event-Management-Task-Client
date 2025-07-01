import React, { useContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pencil, Trash2 } from "lucide-react";
import { MainContent } from "../Context/ContextApi";
import UpdateModal from "../Updated/UpdateModal";
import { toast } from "react-toastify";
// import UpdateModal from "./UpdateModal";

const MyEvent = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  // Or from context
  const { setUser, loading } = useContext(MainContent);
  const user = JSON.parse(localStorage.getItem("user"));
  const { email } = user;
  const api = "https://event-management-server-side-sigma.vercel.app";

  useEffect(() => {
    axios
      .get(`${api}/event?email=${email}`)
      .then((res) => setEvents(res.data))
      .catch((err) => console.error(err));
  }, [user?.email]);

  // Delete Items
  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this event?"
    );
    if (!confirm) return;

    try {
      await axios.delete(`${api}/events/${id}`).then((res) => {
        toast.success(res.data.message);
      });
      setEvents(events.filter((e) => e._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = (event) => {
    setSelectedEvent(event);

    setShowModal(true);
  };

  const handleModalClose = (updated) => {
    setShowModal(false);
    setSelectedEvent(null);
    if (updated) {
      // Refresh list
      axios.get(`${api}/events?email=${email}`).then((res) => {
        toast.success(res.data.message);
        setEvents(res.data);
      });
    }
  };
  if (loading) {
    return <p>Loading user info...</p>; // Or your spinner
  }
  return (
    <div className="max-w-5xl mx-auto my-10">
      <h2 className="text-2xl font-bold mb-6 text-center">My Events</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {events.map((event) => (
          <div
            key={event._id}
            className="border p-4 rounded-lg shadow-md space-y-2"
          >
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p>
              <strong>Posted by:</strong> {event.name}
            </p>
            <p>
              <strong>Date & Time:</strong>{" "}
              {new Date(event.datetime).toLocaleString()}
            </p>
            <p>
              <strong>Location:</strong> {event.location}
            </p>
            <p>
              <strong>Description:</strong> {event.description}
            </p>
            <p>
              <strong>Attendees:</strong> {event.attendeeCount}
            </p>
            <div className="flex gap-4 pt-2">
              <button
                onClick={() => handleUpdate(event)}
                className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded"
              >
                <Pencil size={16} /> Update
              </button>
              <button
                onClick={() => handleDelete(event._id)}
                className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded"
              >
                <Trash2 size={16} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && selectedEvent && (
        <UpdateModal event={selectedEvent} onClose={handleModalClose} />
      )}
    </div>
  );
};

export default MyEvent;
