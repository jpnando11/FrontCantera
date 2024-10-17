import axios from "axios";
import axiosRetry from "axios-retry";

const api = axios.create({
    baseURL: "http://localhost:3000/",
    timeout: 10000,
})

api.interceptors.request.use(config => {
    const token = localStorage.getItem('AUTH_TOKEN')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

axiosRetry(api, { retries: 3 });

export default api;