import { useState, useEffect } from "react";
import useAuth from "../../api/useAuth";
import useEventApi from "../../api/useEventApi";
import Swal from "sweetalert2";

const Manage = () => {
  const { user } = useAuth();
  const { getCreatedEvents, updateEvent, deleteEvent } = useEventApi();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    eventType: "",
    thumbnail: "",
    location: "",
    date: "",
  });

  const eventTypes = [
    "Cleanup",
    "Plantation",
    "Donation",
    "Fundraising",
    "Blood Drive",
    "Community Workshop",
  ];

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const fetchEvents = async () => {
      setLoading(true);
      try {
        const response = await getCreatedEvents();
        setEvents(response.data);
      } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response?.data?.message || "Failed to load events",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [user]);

  // Open modal with event data
  const handleUpdateClick = (event) => {
    setSelectedEvent(event);
    setFormData({
      title: event.title,
      description: event.description,
      eventType: event.eventType,
      thumbnail: event.thumbnail || "",
      location: event.location || "",
      date: event.date ? new Date(event.date).toISOString().split("T")[0] : "",
    });
    setModalOpen(true);
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit updated event
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateEvent(selectedEvent._id, formData);
      setEvents(
        events.map((ev) =>
          ev._id === selectedEvent._id
            ? { ...ev, ...formData, date: new Date(formData.date) }
            : ev
        )
      );
      document.getElementById("update_modal").close();
      setModalOpen(false); 
      Swal.fire({
        icon: "success",
        title: "Event Updated",
        text: "Your event has been updated successfully!",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (error) {
      console.error("Error updating event:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to update event",
      });
    } finally {
      setLoading(false);
    }
  };

  // Delete event
  const handleDelete = async (eventId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This will delete the event and all associated participations!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#072B4F",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      setLoading(true);
      try {
        await deleteEvent(eventId);
        setEvents(events.filter((ev) => ev._id !== eventId));
        Swal.fire({
          icon: "success",
          title: "Event Deleted",
          text: "Your event has been deleted successfully!",
          timer: 1500,
          showConfirmButton: false,
        });
      } catch (error) {
        console.error("Error deleting event:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to delete event",
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-center text-base-content">
        Manage My Events
      </h1>
      {loading ? (
        <div className="flex items-center justify-center min-h-[50vh]">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.length > 0 ? (
            events.map((event) => (
              <div
                key={event._id}
                className="rounded-lg shadow-xl card bg-base-100"
              >
                <figure className="w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={
                      event.thumbnail || "https://via.placeholder.com/400x300"
                    }
                    alt={event.title}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </figure>
                <div className="p-4 card-body">
                  <h2 className="text-xl font-semibold card-title text-base-content">
                    {event.title}
                  </h2>
                  <div className="space-y-2">
                    <p className="text-sm text-neutral">
                      <strong>Location:</strong> {event.location || "N/A"}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="badge badge-primary">
                        {event.eventType}
                      </span>
                      <span className="text-sm text-neutral">
                        {new Date(event.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="justify-end mt-3 card-actions">
                    <button
                      className="text-white btn btn-primary"
                      onClick={() => handleUpdateClick(event)}
                    >
                      Update
                    </button>
                    <button
                      className="text-white btn btn-error"
                      onClick={() => handleDelete(event._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-neutral">
              You haven’t created any events yet.
            </p>
          )}
        </div>
      )}

      {/* Update Modal */}
      {isModalOpen && (
        <dialog id="update_modal" className="modal" open>
          <div className="p-6 modal-box bg-base-100">
            <h3 className="mb-4 text-2xl font-bold text-base-content">
              Update Event
            </h3>
            <form onSubmit={handleUpdateSubmit}>
              <div className="mb-4 form-control">
                <label className="label">
                  <span className="label-text text-neutral">Event Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter event title"
                  className="w-full input input-bordered"
                  required
                />
              </div>
              <div className="mb-4 form-control">
                <label className="label">
                  <span className="label-text text-neutral">Description</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter event description"
                  className="w-full textarea textarea-bordered"
                  required
                />
              </div>
              <div className="mb-4 form-control">
                <label className="label">
                  <span className="label-text text-neutral">Event Type</span>
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full select select-bordered"
                  required
                >
                  <option value="">Select Event Type</option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4 form-control">
                <label className="label">
                  <span className="label-text text-neutral">Thumbnail URL</span>
                </label>
                <input
                  type="url"
                  name="thumbnail"
                  value={formData.thumbnail}
                  onChange={handleChange}
                  placeholder="Enter image URL"
                  className="w-full input input-bordered"
                />
              </div>
              <div className="mb-4 form-control">
                <label className="label">
                  <span className="label-text text-neutral">Location</span>
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter event location"
                  className="w-full input input-bordered"
                  required
                />
              </div>
              <div className="mb-4 form-control">
                <label className="label">
                  <span className="label-text text-neutral">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full input input-bordered"
                  required
                />
              </div>
              <div className="modal-action">
                <button
                  type="submit"
                  className="text-white btn btn-primary"
                  disabled={loading}
                >
                  {loading ? "Updating..." : "Update Event"}
                </button>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Manage;
