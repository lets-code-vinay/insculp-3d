import React from "react";
import { Typography, Box, Grid } from "@mui/material";

import "./style.css";
import { motion } from "framer-motion";

const Page8 = () => {
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ width: window.innerWidth }}
      >
        <Box className="page8">
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className="page-8-overlay"
            ></Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className="img-section"
            ></Grid>

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
                  Retail Display
                </Typography>
                <Typography
                  variant="h5"
                  color={"primary"}
                  className="sub-title"
                >
                  Offering custom, eye-catching product showcases and
                  promotional fixtures using additive manufacturing technology.
                  These displays are designed to enhance product visibility and
                  aesthetics in retail environments.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Box className="mobile-view-description">
            <Typography variant="h3" color={"primary"} className="title">
              Retail Display
            </Typography>
            <Typography variant="h5" color={"primary"} className="sub-title">
              Offering custom, eye-catching product showcases and promotional
              fixtures using additive manufacturing technology. These displays
              are designed to enhance product visibility and aesthetics in
              retail environments.
            </Typography>
          </Box>
        </Box>
      </motion.div>
    </>
  );
};

export default Page8;
