import React from "react";
import { Box, Typography } from "@mui/material";
import LOGO from "../../assets/icons/logo.svg";
import "./style.css";

const Header = () => {
  return (
    <Box className="header">
      <Box className="header-container">
        <img className="logo pointer" src={LOGO} alt="logo" />
        <Typography
          className="title pointer letter-spacing"
          variant="h5"
          color={"primary"}
        >
          INSCULP 3D
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
