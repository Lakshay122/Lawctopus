import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./store";
import { Provider } from "react-redux";
import CustomErrorBoundary from "./ErrorBoundary";

function App() {
  const store = configureStore({
    reducer: rootReducer,
  });

  return (
    <CustomErrorBoundary
      message="Something went wrong"
      description="Sorry, an error occurred. Please try again later."
    >
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </CustomErrorBoundary>
  );
}

export default App;
