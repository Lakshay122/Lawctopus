import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({ variant, title, onClick, icon }) => {
  const customStyles =
    variant == "text"
      ? { color: "#f6a62c" }
      : variant === "contained"
      ? { backgroundColor: "#f6a62c", color: "#000" }
      : { backgroundColor: "white", color: "#000", border: "1px solid black" };
  return (
    <>
      <Button
        startIcon={icon || null}
        sx={{ ...customStyles, boxShadow: "none", borderRadius: "10px" }}
        variant={variant}
      >
        {title}
      </Button>
    </>
  );
};

export default CustomButton;
