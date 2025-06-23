import axios from 'axios';
import { useEffect } from 'react';
import useAuth from './useAuth';

const axiosInstance = axios.create({
    baseURL: 'https://civitas-server.vercel.app',
});

const useAxiosSecure = () => {
    const { user, logOut } = useAuth();

    useEffect(() => {
        // Request interceptor
        const requestInterceptor = axiosInstance.interceptors.request.use(
            async (config) => {
                if (user) {
                    try {
                        const token = await user.getIdToken();
                        // console.log('Attaching token to request:', token);
                        config.headers.Authorization = `Bearer ${token}`;
                    } catch (error) {
                        // console.error('Error getting token:', error);
                        await logOut();
                        return Promise.reject(error);
                    }
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        // Response interceptor
        const responseInterceptor = axiosInstance.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response?.status === 401 || error.response?.status === 403) {
                    // console.log('Authentication error, logging out');
                    await logOut();
                }
                return Promise.reject(error);
            }
        );

        // Cleanup
        return () => {
            axiosInstance.interceptors.request.eject(requestInterceptor);
            axiosInstance.interceptors.response.eject(responseInterceptor);
        };
    }, [user, logOut]);

    return axiosInstance;
};

export default useAxiosSecure;