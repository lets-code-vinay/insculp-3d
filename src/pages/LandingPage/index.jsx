import React from "react";
import { Typography, Box } from "@mui/material";
import "./style.css";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ width: window.innerWidth }}
      className="landing-container"
    >
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

      <Box className="landing-text-mobile">
        <Typography className="intro-text" variant="body1" color={"primary"}>
          Crafting forms
        </Typography>
        <Typography className="bold-title" variant="h1" color={"primary"}>
          Coming Soon
        </Typography>
        <Typography variant="h6" color={"primary"} className="right-text">
          Offering customized design components using advanced 3D printing for
          architectural projects
        </Typography>
      </Box>
    </motion.div>
  );
};

export default LandingPage;
