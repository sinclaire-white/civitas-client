import { useCallback } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useEventApi = () => {
  const axiosSecure = useAxiosSecure();

  // --- CREATE EVENT ---
  const createEvent = useCallback((eventData) => {
    return axiosSecure.post("/events", eventData).then((res) => res.data);
  }, [axiosSecure]);

  // --- UPCOMING EVENTS ---
  const getUpcomingEvents = useCallback((params = {}) => {
    return axiosSecure.get("/events", { params });
  }, [axiosSecure]);

  // --- GET EVENT BY ID ---
  const getEventById = useCallback((eventId) => {
    return axiosSecure.get(`/events/${eventId}`).then((res) => res.data);
  }, [axiosSecure]);

  // --- RECENT EVENTS ---
  const getRecentEvents = useCallback(() => {
    return axiosSecure.get("/recent-events").then((res) => res.data);
  }, [axiosSecure]);

  // --- JOINED EVENTS ---
  const getJoinedEvents = useCallback((email) => {
    return axiosSecure.get(`/participations?email=${email}`).then((res) => res.data);
  }, [axiosSecure]);

  const joinEvent = useCallback((participationData) => {
    return axiosSecure.post("/participations", participationData).then((res) => res.data);
  }, [axiosSecure]);

  // --- MANAGE EVENTS ---
  const getCreatedEvents = useCallback(() => {
    return axiosSecure.get("/events/created");
  }, [axiosSecure]);

  // --- UPDATE EVENTS ---
  const updateEvent = useCallback((eventId, eventData) => {
    return axiosSecure.patch(`/events/${eventId}`, eventData).then((res) => res.data);
  }, [axiosSecure]);

  // --- DELETE EVENTS ---
  const deleteEvent = useCallback((eventId) => {
    return axiosSecure.delete(`/events/${eventId}`).then((res) => res.data);
  }, [axiosSecure]);

  return {
    createEvent,
    getUpcomingEvents,
    getEventById,
    getRecentEvents,
    getJoinedEvents,
    joinEvent,
    getCreatedEvents,
    updateEvent,
    deleteEvent,
  };
};

export default useEventApi;
