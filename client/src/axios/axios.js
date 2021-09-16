import axios from 'axios';

export const axiosSignup = axios.create({
    baseURL: "http://localhost:5000/signup"
})
export const axiosLogin = axios.create({
    baseURL: "http://localhost:5000/login"
})