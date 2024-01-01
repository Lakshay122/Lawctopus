import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import HomePage from "./scenes/HomePage";
import MainLayout from "./layout";
import { darkTheme, lightTheme } from "./theme";
import BlogPage from "./scenes/BlogPage";

const Router = () => {
  // Get theme mode from localStorage or default to 'light'
  const storedThemeMode = localStorage.getItem("themeMode");
  const [themeMode, setThemeMode] = useState(storedThemeMode || "dark");

  // Update localStorage when theme mode changes
  useEffect(() => {
    localStorage.setItem("themeMode", themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = themeMode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          element={
            <MainLayout toggleTheme={toggleTheme} themeMode={themeMode} />
          }
        >
          <Route index element={<HomePage />} />
          <Route path="/post/:id" element={<BlogPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default Router;
