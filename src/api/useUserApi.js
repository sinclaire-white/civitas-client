import useAxiosSecure from "./useAxiosSecure";


const useUserApi = () => {
  const axiosSecure = useAxiosSecure();

  const getCreatedEvents = (userEmail) => {
    return axiosSecure.get(`/events?creatorEmail=${userEmail}`).then((res) => res.data);
  };

  const getParticipatedEvents = (userEmail) => {
    return axiosSecure.get(`/events/participated?email=${userEmail}`).then((res) => res.data);
  };

  return {
    getCreatedEvents,
    getParticipatedEvents,
  };
};

export default useUserApi;
