// RecentEvents.jsx (trimmed)
import { useState, useEffect } from "react";
import { Link } from "react-router";
import useEventApi from "../../api/useEventApi";
import Swal from "sweetalert2";

const RecentEvents = () => {
  const { getRecentEvents } = useEventApi();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentEvents = async () => {
      setLoading(true);
      try {
        const response = await getRecentEvents();
        const list = Array.isArray(response) ? response.slice(0, 8) : [];
        setEvents(list);
      } catch (error) {
        Swal.fire({ icon: "error", title: "Error", text: "Failed to load recent events." });
      } finally {
        setLoading(false);
      }
    };
    fetchRecentEvents();
  }, [getRecentEvents]);

  return (
    <div>
      <h2 className="mb-8 text-3xl font-bold text-center text-primary">Recently Added Events</h2>

      {loading ? (
        <div className="flex items-center justify-center min-h-[30vh]">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : events.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {events.map((event) => (
            <article key={event._id} className="flex flex-col overflow-hidden shadow-lg rounded-xl bg-base-100" style={{ minHeight: 320 }}>
              <figure className="w-full aspect-[4/3] overflow-hidden">
                <img src={event.thumbnail} alt={event.title} className="object-cover w-full h-full" />
              </figure>

              <div className="flex flex-col flex-grow p-4">
                <h3 className="mb-2 text-lg font-semibold line-clamp-2" title={event.title}>
                  {event.title}
                </h3>

                <p className="mb-1 text-sm text-info">{new Date(event.date).toLocaleDateString()}</p>
                <p className="mb-4 text-sm truncate text-info">{event.location || "No location"}</p>

                <div className="mt-auto">
                  <Link to={`/events/event-details/${event._id}`} className="w-full transition-transform duration-300 btn btn-primary hover:btn-accent hover:scale-105">
                    View Details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="text-center text-info">No recent events found.</p>
      )}
    </div>
  );
};

export default RecentEvents;
