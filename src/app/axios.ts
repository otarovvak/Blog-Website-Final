import axios from 'axios';

const inst = axios.create();

inst.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');
    config.headers.Authorization = 'Bearer ' + token;
    return config;
});

export default inst;