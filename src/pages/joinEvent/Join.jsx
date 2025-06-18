import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import useAuth from '../../api/useAuth';
import useEventApi from '../../api/useEventApi';
import Swal from 'sweetalert2';

const Join = () => {
    const { user } = useAuth();
    const { getJoinedEvents } = useEventApi();
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) {
            setLoading(false);
            return;
        }
        const fetchJoinedEvents = async () => {
            try {
                const response = await getJoinedEvents(user.email);
                setEvents(response);
            } catch (error) {
                console.error('Error fetching joined events:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: 'Failed to load your joined events',
                });
            } finally {
                setLoading(false);
            }
        };
        fetchJoinedEvents();
    }, [user, getJoinedEvents]);

    return (
        <div className="container p-4 mx-auto">
            <h1 className="mb-6 text-3xl font-bold text-center text-base-content">My Joined Events</h1>
            {loading ? (
                <div className="flex items-center justify-center min-h-[50vh]">
                    <span className="loading loading-spinner loading-lg text-primary"></span>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {events.length > 0 ? (
                        events.map(event => (
                            <div key={event._id} className="rounded-lg shadow-xl card bg-base-100">
                                <figure className="w-full aspect-[4/3] overflow-hidden">
                                    <img
                                        src={event.thumbnail || 'https://via.placeholder.com/400x300'}
                                        alt={event.title}
                                        className="object-cover w-full h-full"
                                        loading="lazy"
                                    />
                                </figure>
                                <div className="p-4 card-body">
                                    <h2 className="text-xl font-semibold card-title text-base-content">{event.title}</h2>
                                    <div className="space-y-2">
                                        <p className="text-sm text-neutral">
                                            <strong>Location:</strong> {event.location || 'N/A'}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span className="badge badge-primary">{event.eventType}</span>
                                            <span className="text-sm text-neutral">
                                                {new Date(event.date).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <p className="text-sm text-neutral">
                                            <strong>Joined:</strong> {new Date(event.joinedAt).toLocaleDateString()}
                                        </p>
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
                        <p className="text-center col-span-full text-neutral">You haven’t joined any events yet.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Join;