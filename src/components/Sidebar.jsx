import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import Toolbar from "@mui/material/Toolbar";

import { ArrowDropUp, Close } from "@mui/icons-material";
import { Collapse, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTheme } from "@emotion/react";
import { useState } from "react";

const drawerWidth = 350;

const Sidebar = ({ window, themeMode, mobileOpen, handleDrawerToggle }) => {
  const theme = useTheme();

  const [openCategories, setOpenCategories] = useState([]);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredSubcategory, setHoveredSubcategory] = useState(null);

  const handleCategoryClick = (index) => {
    setOpenCategories((prevOpen) =>
      prevOpen.includes(index)
        ? prevOpen.filter((item) => item !== index)
        : [index]
    );
  };

  const handleCategoryHover = (index) => {
    setHoveredCategory(index);
  };

  const handleSubcategoryHover = (index) => {
    setHoveredSubcategory(index);
  };

  const isCategoryOpen = (index) => {
    return openCategories.includes(index);
  };

  const isCategorySelected = (index) => {
    return isCategoryOpen(index) || hoveredCategory === index;
  };

  const isSubcategorySelected = (index) => {
    return hoveredSubcategory === index;
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <div>
      <Toolbar
        sx={{
          paddingY: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img
          src={
            themeMode === "dark"
              ? "https://www.lawctopus.com/wp-content/uploads/2022/01/law-wh-tg.png"
              : "https://www.lawctopus.com/wp-content/uploads/2022/01/Lawctopus-logo-footer.svg"
          }
          alt=""
          height={"100%"}
          width={"100%"}
          style={{ maxWidth: 120, height: "auto", display: "block" }}
        />
        <IconButton onClick={handleDrawerToggle}>
          <Close />
        </IconButton>
      </Toolbar>
      <Divider />
      <List sx={{ padding: "15px" }}>
        {[
          {
            text: "Get Hired",
            subcategories: ["Jobs", "Internships and Small Projects"],
          },
          {
            text: "Category 2",
            subcategories: ["Subcat 3", "Subcat 4"],
          },
          {
            text: "Category 3",
            subcategories: ["Subcat 5", "Subcat 6"],
          },
          {
            text: "Category 4",
            subcategories: ["Subcat 7", "Subcat 8"],
          },
        ].map((category, index) => (
          <React.Fragment key={index}>
            <div style={{ display: "flex" }}>
              <ListItem
                onClick={() => handleCategoryClick(index)}
                onMouseEnter={() => handleCategoryHover(index)}
                onMouseLeave={() => handleCategoryHover(null)}
                sx={{
                  color: isCategorySelected(index)
                    ? theme.palette.primary.yellow
                    : theme.palette.primary.navtext,
                }}
              >
                <span>{category.text}</span>
                {isCategoryOpen(index) ? (
                  <ArrowDropUp />
                ) : (
                  <ArrowDropDownIcon />
                )}
              </ListItem>
            </div>
            <Collapse in={isCategoryOpen(index)} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {category.subcategories.map((subcategory, subIndex) => (
                  <ListItem
                    key={subIndex}
                    onMouseEnter={() => handleSubcategoryHover(subIndex)}
                    onMouseLeave={() => handleSubcategoryHover(null)}
                    sx={{
                      gap: 0,
                      paddingLeft: "20px",
                      color: isSubcategorySelected(subIndex)
                        ? theme.palette.primary.yellow
                        : theme.palette.primary.navtext,
                      "&:hover": {
                        color: theme.palette.primary.yellow,
                      },
                    }}
                    disablePadding
                  >
                    <ListItemButton>
                      <ListItemText primary={subcategory} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </div>
  );
  return (
    <Box component="nav" aria-label="mailbox folders">
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        elevation={1}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

Sidebar.propTypes = {
  window: PropTypes.func,
};

export default Sidebar;
