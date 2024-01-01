import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material";

const SearchInput = () => {
  const theme = useTheme();
  return (
    <Paper
      component="form"
      elevation={6}
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "40vw",
        backgroundColor: theme.palette.background.textField,
        borderRadius: "10px",
        boxShadow: "none",
      }}
    >
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search On Lawctopus..." />
      <Divider sx={{ height: 30 }} orientation="vertical" />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchInput;
