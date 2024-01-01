import { createAsyncThunk } from "@reduxjs/toolkit";

// A simple cache object to store fetched data
const cache = {};

// Utility function to handle API calls and notifications
export const createApiThunk = (
  name,
  apiCall,
  successMessage,
  transformResponse,
  transformErrorMessage = (error) => "An error occurred."
) =>
  createAsyncThunk(name, async (requestData, { getState }) => {
    const cacheKey = `${name}_${JSON.stringify(requestData)}`;

    if (cache[cacheKey]) {
      // Return cached data if available
      return cache[cacheKey];
    }

    try {
      const response = await apiCall(requestData);

      if (successMessage) {
        showSuccessNotification(
          typeof successMessage === "function"
            ? successMessage(response)
            : successMessage
        );
      }

      const transformedResponse = transformResponse(response);

      // Cache the response data
      cache[cacheKey] = transformedResponse;

      return transformedResponse;
    } catch (error) {
      if (error.response?.status === 401) {
        // Redirect to the login page
        // window.location.href = "/login";
      } else {
        const errorMessage = transformErrorMessage(error);

        if (errorMessage) {
          showErrorNotification(errorMessage);
        }

        return transformResponse(error.response);
      }
    }
  });

const showSuccessNotification = (message) => {
  alert(message);
};

const showErrorNotification = (message) => {
  alert(message);
};
