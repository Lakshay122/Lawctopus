import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from "react-router";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import BottomHeader from "../components/BottomHeader";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function MainLayout(props) {
  const theme = useTheme();
  const { toggleTheme, themeMode } = props;

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* navbar */}
      <Navbar
        themeMode={themeMode}
        toggleTheme={toggleTheme}
        handleDrawerToggle={handleDrawerToggle}
      />

      {/* Sidebar */}
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        themeMode={themeMode}
      />

      {/* children component  */}
      <Box
        component="main"
        sx={{
          bgcolor: theme.palette.background.default,
          color: theme.palette.primary.text,
          p: 3,
          mt: { xs: 5, lg: 15 },
          width: "100%",
        }}
      >
        <Toolbar />
        {<Outlet />}
      </Box>

      {/* Bottom header */}
      <BottomHeader />
    </Box>
  );
}

export default MainLayout;
