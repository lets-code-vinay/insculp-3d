import React from "react";
import { Typography, Box, Grid } from "@mui/material";

import "./style.css";
import { motion } from "framer-motion";

const Page4 = () => {
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ width: window.innerWidth }}
      >
        <Box className="page4">
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className="page-4-overlay"
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
                  Customized interior elements
                </Typography>
                <Typography
                  variant="h5"
                  color={"primary"}
                  className="sub-title"
                >
                  Offering service which allows you to have unique and bespoke
                  interior pieces that align with your specific aesthetic and
                  functional needs.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </motion.div>
    </>
  );
};

export default Page4;
