import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Call, DarkModeOutlined, LightMode } from "@mui/icons-material";
import { Tab, Tabs } from "@mui/material";
import SearchInput from "../components/SearchInput";
import CustomButton from "../components/CustomButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTheme } from "@emotion/react";
import { useState } from "react";

const tabLabels = [
  "Get Hired",
  "Opportunity",
  "Events",
  "Competitions",
  "Career Resources",
  "Blogs, News & Advice",
];

const Navbar = ({ themeMode, toggleTheme, handleDrawerToggle }) => {
  const theme = useTheme();

  const [hoveredTab, setHoveredTab] = useState(-1);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (newValue) => {
    setSelectedTab(newValue);
  };

  const handleMouseEnter = (newValue) => {
    setHoveredTab(newValue);
  };

  const handleMouseLeave = () => {
    setHoveredTab(-1);
  };
  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        color="primary"
        sx={{
          height: "100px",
          display: "flex",
          justifyContent: "center",
          boxShadow: "none",
          borderBottom: `0.1px solid ${theme.palette.background.divider}`,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { lg: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" flexWrap={"wrap"} component="div">
              <img
                src={
                  themeMode === "dark"
                    ? "https://www.lawctopus.com/wp-content/uploads/2022/01/law-wh-tg.png"
                    : "https://www.lawctopus.com/wp-content/uploads/2022/01/Lawctopus-logo-footer.svg"
                }
                alt=""
                height={"50px"}
                width={"150px"}
              />
            </Typography>
          </div>
          <Box gap={3} sx={{ display: { xs: "none", lg: "flex" } }}>
            <SearchInput />
            <CustomButton title="Contact" icon={<Call />} variant={"text"} />
            <CustomButton title="Submit Posts" variant="contained" />
            <CustomButton title="LLS Courses" variant="outlined" />
          </Box>

          <div>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={toggleTheme}
              sx={{ ml: 2 }}
            >
              {themeMode === "dark" ? <LightMode /> : <DarkModeOutlined />}
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <CssBaseline />
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          mt: "100px",
          display: { xs: "none", lg: "flex" },
          justifyContent: "start",
          alignItems: "center",
          boxShadow: "none",
          height: hoveredTab !== -1 ? "265px" : "65px",
          borderBottom: `0.1px solid ${theme.palette.background.divider}`,
          transition: "height 0.4s ease", // Adding transition
        }}
      >
        <Tabs
          value={hoveredTab !== -1 ? hoveredTab : selectedTab}
          onChange={(e, newValue) => handleTabChange(newValue)}
          textColor="inherit"
          aria-label="full width tabs example"
        >
          {tabLabels.map((label, index) => (
            <div
              style={{
                display: "grid",
                gap: 20,
                alignContent: "center",
                justifyItems: "center",
              }}
            >
              <Tab
                icon={<ArrowDropDownIcon />}
                key={index}
                iconPosition="end"
                label={label}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                sx={{
                  color:
                    hoveredTab === index
                      ? theme.palette.primary.yellow
                      : "inherit",
                  borderBottom:
                    hoveredTab === index
                      ? `3px solid ${theme.palette.primary.yellow}`
                      : "",
                }}
              />

              {hoveredTab !== -1 && (
                <>
                  <Typography>subcategory 1</Typography>
                  <Typography>subcategory 2</Typography>
                  <Typography>subcategory 3</Typography>
                </>
              )}
            </div>
          ))}
        </Tabs>
      </AppBar>
    </>
  );
};

export default Navbar;
