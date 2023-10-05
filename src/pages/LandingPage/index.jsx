import React from "react";
import { Typography, Box } from "@mui/material";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.svg";
import "./style.css";

const LandingPage = () => {
  return (
    <>
      <Box className="landing-text">
        <Typography className="intro-text" variant="h6body1" color={"primary"}>
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
      <Box className="overlay"></Box>

      <Box className="container">
        <Box
          className="image-container"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
          }}
        ></Box>
        <Box
          className="image-container"
          style={{
            backgroundImage: `url(${img2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
          }}
        ></Box>
        <Box
          className="image-container"
          style={{
            backgroundImage: `url(${img3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
          }}
        ></Box>
        <Box
          className="image-container"
          style={{
            backgroundImage: `url(${img4})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
          }}
        ></Box>
      </Box>
    </>
  );
};

export default LandingPage;
