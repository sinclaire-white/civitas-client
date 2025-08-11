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
    setEvents(Array.isArray(response) ? response.slice(0, 8) : []);
  } catch (error) {
    console.error("Error Details:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
    });
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Failed to load recent events. Please try again later.",
    });
  } finally {
    setLoading(false);
  }
};

    fetchRecentEvents();
  }, [getRecentEvents]); 

  return (
    <div className="max-w-screen-xl px-4 mx-auto my-16">
      <h2 className="mb-8 text-3xl font-bold text-center text-primary">
        Recently Added Events
      </h2>

      {loading ? (
        <div className="flex items-center justify-center min-h-[30vh]">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {events.length > 0 ? (
              events.map((event) => (
                <div
                  key={event._id}
                  className="overflow-hidden rounded-lg shadow-lg bg-base-100"
                >
                  <figure className="w-full aspect-[4/3] overflow-hidden">
                    <img
                      src={event.thumbnail}
                      alt={event.title}
                      className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-105"
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
                      <strong>Location:</strong>{" "}
                      {event.location || "Not specified"}
                    </p>
                    <p className="mt-1 text-sm text-info">
                      {new Date(event.date).toLocaleDateString()}
                    </p>
                    <div className="mt-4 text-right">
                      <Link
                        to={`/events/event-details/${event._id}`}
                        className="text-white btn btn-primary hover:scale-105"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-info col-span-full">
                No recent events found.
              </p>
            )}
          </div>

          <div className="mt-8 text-center">
            <Link to="/upcoming-events">
              <button className="text-white btn btn-secondary">
                View All Events
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default RecentEvents;
