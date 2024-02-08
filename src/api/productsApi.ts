import axios from "axios";


const lambdaApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});