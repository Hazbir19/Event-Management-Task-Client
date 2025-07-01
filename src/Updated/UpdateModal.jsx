import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function UpdateModal({ event, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: event.title,
      location: event.location,
      datetime: event.datetime?.slice(0, 16),
      description: event.description,
    },
  });

  const onSubmit = async (data) => {
    try {
      await axios.put(`https://event-management-server-side-sigma.vercel.app/events/${event._id}`, data);
      onClose(true); // refresh on update
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <h2 className="text-lg font-bold mb-4 text-center">Update Event</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label>Title</label>
            <input
              {...register('title', { required: 'Title is required' })}
              className="w-full border p-2 rounded"
            />
            {errors.title && <p className="text-red-500">{errors.title.message}</p>}
          </div>

          <div>
            <label>Date & Time</label>
            <input
              type="datetime-local"
              {...register('datetime', { required: 'Date and time required' })}
              className="w-full border p-2 rounded"
            />
            {errors.datetime && <p className="text-red-500">{errors.datetime.message}</p>}
          </div>

          <div>
            <label>Location</label>
            <input
              {...register('location', { required: 'Location is required' })}
              className="w-full border p-2 rounded"
            />
            {errors.location && <p className="text-red-500">{errors.location.message}</p>}
          </div>

          <div>
            <label>Description</label>
            <textarea
              {...register('description', { required: 'Description is required' })}
              rows={3}
              className="w-full border p-2 rounded"
            />
            {errors.description && <p className="text-red-500">{errors.description.message}</p>}
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => onClose(false)}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-primary text-white rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
