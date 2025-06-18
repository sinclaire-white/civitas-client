import axios from 'axios';
import useAuth from './useAuth';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
});

const useAxiosSecure = () => {
    const { user, logOut } = useAuth();

    axiosInstance.interceptors.request.use(async (config) => {
        if (user) {
            const token = await user.getIdToken();
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });

    axiosInstance.interceptors.response.use(
        (response) => response,
        async (error) => {
            if (error.response?.status === 401 || error.response?.status === 403) {
                await logOut();
                console.log('Signed out user due to 401/403');
            }
            return Promise.reject(error);
        }
    );

    return axiosInstance;
};

export default useAxiosSecure;