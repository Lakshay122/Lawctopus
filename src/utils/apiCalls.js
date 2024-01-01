import { createApiThunk } from "../store/createApiThunk";
import api from "../instance/api";

// ---> API INITIALIZATION SEQUENCE
// NAME
// APICALL
// SUCCESS MESSAGE : STRING | FUNCTION
// SUCCESS RESPONSE
// ERROR MESSAGE

let cachedOrders = {};
export const resetCachedOrders = () => {
  cachedOrders = {};
};

export const fetchSinglePost = createApiThunk(
  "fetch/post",
  (id) => api.get(`/posts/${id}`),
  "",
  (response) => response.data,
  (error) =>
    error.response?.data?.message ?? error.message ?? "An error occurred."
);
export const fetchPosts = createApiThunk(
  "fetch/posts",
  (id) => api.get(`/posts`),
  "",
  (response) => response.data,
  (error) =>
    error.response?.data?.message ?? error.message ?? "An error occurred."
);
