import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import useEventApi from '../../api/useEventApi';
import Swal from 'sweetalert2';

const Upcoming = () => {
    const { upcomingEventsPromise } = useEventApi();
    const [events, setEvents] = useState([]);
    const [eventType, setEventType] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);

    // Fetch events 
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await upcomingEventsPromise();
                setEvents(response);
            } catch (error) {
                console.error('Error fetching events:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to load events',
                });
            } finally {
                setLoading(false);
            }
        };
        fetchEvents();
    }, []); // Empty dependency array for initial fetch

    // Filter events to show only future events
    const currentDate = new Date('2025-06-18T00:00:00Z');
    const upcomingEvents = events.filter(event => new Date(event.date) >= currentDate);

    // Event types for dropdown
    const eventTypes = ['Cleanup', 'Plantation', 'Donation', 'Fundraising', 'Blood Drive', 'Community Workshop'];

    // Handle filter by event type
    const handleFilter = async (type) => {
        setEventType(type);
        setLoading(true);
        try {
            const response = await upcomingEventsPromise({ eventType: type || undefined, search: searchQuery || undefined });
            setEvents(response);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to filter events',
            });
        } finally {
            setLoading(false);
        }
    };

    // Handle search by event title
    const handleSearch = async (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        setLoading(true);
        try {
            const response = await upcomingEventsPromise({ eventType: eventType || undefined, search: query || undefined });
            setEvents(response);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to search events',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container p-4 mx-auto">
            {/* Filter and Search Controls */}
            <div className="flex flex-col gap-4 mb-6 sm:flex-row">
                <select
                    value={eventType}
                    onChange={(e) => handleFilter(e.target.value)}
                    className="w-full select select-bordered sm:w-1/4 dark:bg-gray-700 dark:text-white"
                >
                    <option value="">All Event Types</option>
                    {eventTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder="Search events by title..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full input input-bordered sm:w-1/2 dark:bg-gray-700 dark:text-white"
                />
            </div>

            {/* Event Grid */}
            {loading ? (
                <div className="flex items-center justify-center min-h-[50vh]">
                    <span className="loading loading-spinner loading-lg text-primary"></span>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {upcomingEvents.length > 0 ? (
                        upcomingEvents.map(event => (
                            <div key={event._id} className="bg-white rounded-lg shadow-xl card dark:bg-gray-800">
                                <figure className="w-full aspect-[4/3] overflow-hidden">
                                    <img
                                        src={event.thumbnail || 'https://via.placeholder.com/400x300'}
                                        alt={event.title}
                                        className="object-cover w-full h-full"
                                        loading="lazy"
                                    />
                                </figure>
                                <div className="p-4 card-body">
                                    <h2 className="text-xl font-semibold card-title dark:text-white">{event.title}</h2>
                                    <div className="space-y-2">
                                        <p className="text-sm text-gray-600 dark:text-gray-300">
                                            <strong>Location:</strong> {event.location || 'Not specified'}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span className="badge badge-primary">{event.eventType}</span>
                                            <span className="text-sm dark:text-gray-300">
                                                {new Date(event.date).toLocaleDateString()}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="justify-end mt-3 card-actions">
                                        <Link
                                            to={`/events/event-details/${event._id}`}
                                            className="text-white btn btn-primary"
                                        >
                                            View Event
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-600 col-span-full dark:text-white">No upcoming events found.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Upcoming;