import useAxiosSecure from './useAxiosSecure';

const useEventApi = () => {
    const axiosSecure = useAxiosSecure();

    const createEvent = (eventData) => {
        return axiosSecure.post('/events', eventData).then((res) => res.data);
    };

    const eventsCreatedByPromise = (email) => {
        return axiosSecure.get(`/events/created?email=${email}`).then((res) => res.data);
    };

    const upcomingEventsPromise = (params = {}) => {
        return axiosSecure.get('/events', { params }).then((res) => res.data);
    };

    const getEventById = (eventId) => {
        return axiosSecure.get(`/events/${eventId}`).then((res) => res.data);
    };

    return {
        createEvent,
        eventsCreatedByPromise,
        upcomingEventsPromise,
        getEventById,
    };
};

export default useEventApi;