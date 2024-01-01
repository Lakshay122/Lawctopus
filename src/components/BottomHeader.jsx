import {
  Bookmarks,
  CallOutlined,
  FileCopySharp,
  Home,
} from "@mui/icons-material";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import React, { useState } from "react";

const BottomHeader = () => {
  const [value, setValue] = useState(0);
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{ top: "auto", bottom: 0, display: { sm: "block", md: "none" } }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          "& .Mui-selected": {
            color: "#f6a62c",
            "&.MuiSvgIcon-root": { fill: "#f6a62c" },
          },
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<Home style={{ fill: value === 0 ? "#f6a62c" : undefined }} />}
        />
        <BottomNavigationAction
          label="Courses"
          icon={
            <Bookmarks style={{ fill: value === 1 ? "#f6a62c" : undefined }} />
          }
        />
        <BottomNavigationAction
          label="CLAT"
          icon={
            <FileCopySharp
              style={{ fill: value === 2 ? "#f6a62c" : undefined }}
            />
          }
        />
        <BottomNavigationAction
          label="Contact"
          icon={
            <CallOutlined
              style={{ fill: value === 3 ? "#f6a62c" : undefined }}
            />
          }
        />
      </BottomNavigation>
    </AppBar>
  );
};

export default BottomHeader;
