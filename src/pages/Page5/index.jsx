import React from "react";
import { Typography, Box, Grid } from "@mui/material";

import "./style.css";
import PAGE_5_IMG from "../../assets/images/page5.png";
import { motion } from "framer-motion";

const Page5 = () => {
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ width: window.innerWidth }}
      >
        <Box className="page5">
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{ backgroundColor: "secondary.main" }}
              className="desc-section"
            >
              <Box className="description">
                <Typography variant="h3" color={"primary"} className="title">
                  Custom 3d Wall murals
                </Typography>
                <Typography
                  variant="h5"
                  color={"primary"}
                  className="sub-title"
                >
                  Offering customized , three-dimensional wall decorations or
                  designs that are tailored to the your preferences and can
                  transform plain walls into visually striking and unique
                  features.
                </Typography>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className="p5-overlay-section"
            ></Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} className="img-section">
              <img className="w100" src={PAGE_5_IMG} alt="page 2" />
            </Grid>
          </Grid>

          <Box className="mobile-view-description">
            <Typography variant="h3" color={"primary"} className="title">
              Custom 3d Wall murals
            </Typography>
            <Typography variant="h5" color={"primary"} className="sub-title">
              Offering customized , three-dimensional wall decorations or
              designs that are tailored to the your preferences and can
              transform plain walls into visually striking and unique features.
            </Typography>
          </Box>
        </Box>
      </motion.div>
    </>
  );
};

export default Page5;
