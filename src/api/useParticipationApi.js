import useAxiosSecure from "./useAxiosSecure";


const useParticipationApi = () => {
    const axiosSecure = useAxiosSecure();

    const myParticipationsPromise = email => {
        return axiosSecure.get(`/participations?email=${email}`)
            .then(res => res.data);
    }

    const eventParticipantsPromise = eventId => {
        return axiosSecure.get(`/participations/event/${eventId}`)
            .then(res => res.data);
    }

    return {
        myParticipationsPromise,
        eventParticipantsPromise
    };
};

export default useParticipationApi;