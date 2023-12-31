import React from "react";
import { Typography, Box, Grid } from "@mui/material";

import "./style.css";
import PAGE_IMG from "../../assets/images/page9.png";
import { motion } from "framer-motion";

const Page9 = () => {
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ width: window.innerWidth }}
      >
        <Box className="page9">
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
                  signage display
                </Typography>
                <Typography
                  variant="h5"
                  color={"primary"}
                  className="sub-title"
                >
                  Offering customized and visually appealing signs and displays
                  using three-dimensional printing technology, catering to the
                  specific branding and marketing needs of businesses and
                  events.
                </Typography>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className="p9-overlay-section"
            ></Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} className="img-section">
              <img className="w100" src={PAGE_IMG} alt="page 2" />
            </Grid>
          </Grid>

          <Box className="mobile-view-description">
            <Typography variant="h3" color={"primary"} className="title">
              signage display
            </Typography>
            <Typography variant="h5" color={"primary"} className="sub-title">
              Offering customized and visually appealing signs and displays
              using three-dimensional printing technology, catering to the
              specific branding and marketing needs of businesses and events.
            </Typography>
          </Box>
        </Box>
      </motion.div>
    </>
  );
};

export default Page9;
