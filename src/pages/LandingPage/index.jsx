import React from "react";
import { Typography, Box } from "@mui/material";
import "./style.css";

const LandingPage = () => {
  return (
    <>
      <Box className="image-container">
        <Box className="landing-text">
          <Typography className="intro-text" variant="body1" color={"primary"}>
            Crafting forms
          </Typography>
          <Typography className="bold-title" variant="h1" color={"primary"}>
            Coming Soon
          </Typography>
          <Typography variant="h6" color={"primary"} className="right-text">
            Offering customized design
            <br /> components using advanced 3D
            <br /> printing for architectural projects
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default LandingPage;
