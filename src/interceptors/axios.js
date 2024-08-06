// using axios for intercepting for jwt refresh token

import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});

axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        config.headers.Authorization = token ? `Bearer ${token}` : '';
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        const originalRequest = error.config;
        let refreshToken = localStorage.getItem('refresh');
        if (error.response.status === 401 && refreshToken && !originalRequest._retry) {
            originalRequest._retry = true;
            return axiosInstance
                .post('/token/refresh/', {refresh: refreshToken})
                .then(res => {
                    if (res.status === 200) {
                        localStorage.setItem('token', res.data.access);
                        return axiosInstance(originalRequest);
                    }
                });
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;