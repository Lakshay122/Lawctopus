import axios from "axios";

const api = axios.create({
  baseURL: " https://www.lawctopus.com/wp-json/wp/v2",
  withCredentials: true,
});

// Interceptor to add Authorization header if a token is available in localStorage
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
