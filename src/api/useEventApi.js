import useAxiosSecure from "./useAxiosSecure";

const useEventApi = () => {
  const axiosSecure = useAxiosSecure();

  // --- CREATE EVENT ---
  const createEvent = (eventData) => {
    return axiosSecure.post("/events", eventData).then((res) => res.data);
  };

  // --- UPCOMING EVENTS ---
  const getUpcomingEvents = (params = {}) => {
    return axiosSecure.get("/events", { params });
  };

  const getEventById = (eventId) => {
    return axiosSecure.get(`/events/${eventId}`).then((res) => res.data);
  };

  // --- JOINED EVENTS ---
  const getJoinedEvents = (email) => {
    return axiosSecure
      .get(`/participations?email=${email}`)
      .then((res) => res.data);
  };

  const joinEvent = (participationData) => {
    return axiosSecure
      .post("/participations", participationData)
      .then((res) => res.data);
  };

  // --- MANAGE EVENTS ---
  const getCreatedEvents = () => {
    return axiosSecure.get("/events/created");
  };
  // --- UPDATE EVENTS ---
  const updateEvent = (eventId, eventData) => {
    return axiosSecure
      .patch(`/events/${eventId}`, eventData)
      .then((res) => res.data);
  };
  // --- DELETE EVENTS ---
  const deleteEvent = (eventId) => {
    return axiosSecure.delete(`/events/${eventId}`).then((res) => res.data);
  };

  return {
    createEvent,
    getUpcomingEvents,
    getEventById,
    getJoinedEvents,
    joinEvent,
    getCreatedEvents,
    updateEvent,
    deleteEvent,
  };
};

export default useEventApi;
