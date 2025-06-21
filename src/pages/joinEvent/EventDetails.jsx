import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import useAuth from '../../api/useAuth';
import useAxiosSecure from '../../api/useAxiosSecure';
import useEventApi from '../../api/useEventApi';
import Swal from 'sweetalert2';

const EventDetails = () => {
    const { eventId } = useParams();
    const { getEventById } = useEventApi();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    // Fetch event details
    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await getEventById(eventId);
                setEvent(response);
            } catch (error) {
                console.error('Error fetching event:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to load event details',
                });
            } finally {
                setLoading(false);
            }
        };
        fetchEvent();
    }, [eventId, getEventById]);

    const handleJoinEvent = async () => {
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'Please Log In',
                text: 'You need to log in to join an event.',
            });
            navigate('/login');
            return;
        }

        try {
            const response = await axiosSecure.post('/participations', {
                userEmail: user.email,
                eventId: event._id,
            });
            Swal.fire({
                icon: 'success',
                title: 'Joined Event',
                text: response.data.message,
                timer: 1500,
                showConfirmButton: false,
            }).then(() => {
                navigate('/join-events');
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.response?.data?.message || 'Failed to join event',
            });
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[50vh]">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    if (!event) {
        return <div className="p-4 text-center text-gray-600 dark:text-white">Event not found.</div>;
    }

    return (         
        <div className="container max-w-4xl p-4 mx-auto">
            <div className="bg-white rounded-lg shadow-xl card dark:bg-gray-800">
                <figure className="w-full aspect-[16/9] overflow-hidden">
                    <img
                        src={event.thumbnail}
                        alt={event.title}
                        className="object-cover w-full h-full"
                        loading="lazy"
                    />
                </figure>
                <div className="p-6 card-body">
                    <h1 className="text-3xl font-bold card-title dark:text-white">{event.title}</h1>
                    <div className="mt-4 space-y-4">
                        <p className="text-lg dark:text-gray-300">{event.description}</p>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <p className="dark:text-gray-300"><strong>Event Type:</strong> {event.eventType}</p>
                                <p className="dark:text-gray-300"><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                                <p className="dark:text-gray-300"><strong>Time:</strong> {event.time}</p>
                            </div>
                            <div>
                                <p className="dark:text-gray-300"><strong>Location:</strong> {event.location}</p>
                                <p className="dark:text-gray-300"><strong>Organizer:</strong> {event.creatorEmail}</p>
                                <p className="dark:text-gray-300"><strong>Capacity:</strong> {event.capacity}</p>
                            </div>
                        </div>
                    </div>
                    <div className="justify-end mt-6 card-actions">
                        <button
                            onClick={handleJoinEvent}
                            className="text-white btn btn-primary hover:scale-105"
                            disabled={!user}
                        >
                            Join Event
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;