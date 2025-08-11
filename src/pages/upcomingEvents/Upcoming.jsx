import { useState, useEffect } from "react";
import { Link } from "react-router";
import useEventApi from "../../api/useEventApi";
import Swal from "sweetalert2";

const Upcoming = () => {
  const { getUpcomingEvents } = useEventApi();
  const [events, setEvents] = useState([]);
  const [eventType, setEventType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchEvents = async (params = {}) => {
    setLoading(true);
    try {
      const response = await getUpcomingEvents(params);
      const allEvents = Array.isArray(response.data) ? response.data : [];
      const currentDate = new Date();
      const upcomingEventsFiltered = allEvents.filter(
        (event) => new Date(event.date) >= currentDate
      );
      setEvents(upcomingEventsFiltered);
    } catch (error) {
      console.error("Error fetching events:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to load events.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents({ eventType, search: searchQuery });
  }, [getUpcomingEvents, eventType, searchQuery]); // stable getUpcomingEvents, triggers when filters change

  const eventTypes = [
    "Cleanup",
    "Plantation",
    "Donation",
    "Fundraising",
    "Blood Drive",
    "Community Workshop",
  ];

  return (
    <div className="container p-4 mx-auto">
      <div className="flex flex-col gap-4 mb-6 sm:flex-row">
        <select
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className="w-full select select-bordered sm:w-1/4"
        >
          <option value="">All Event Types</option>
          {eventTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search events by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full input input-bordered sm:w-1/2"
        />
      </div>
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
                className="rounded-lg shadow-xl bg-base-100 card"
              >
                <figure className="w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={event.thumbnail}
                    alt={event.title}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </figure>
                <div className="p-4">
                  <h2
                    className="text-xl font-semibold text-base-content line-clamp-2"
                    title={event.title}
                  >
                    {event.title}
                  </h2>
                  <p className="mt-2 text-sm text-info">
                    <strong>Location:</strong> {event.location || "Not specified"}
                  </p>
                  <p className="mt-1 text-sm text-info">
                    {new Date(event.date).toLocaleDateString()}
                  </p>
                  <div className="mt-4 text-right">
                    <Link
                      to={`/events/event-details/${event._id}`}
                      className="text-white btn btn-primary hover:scale-105"
                    >
                      View Event
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-info col-span-full">
              {eventType
                ? `No ${eventType} events found.`
                : "No upcoming events found."}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Upcoming;
