import React from "react";
import { Typography, Box, Grid } from "@mui/material";

import "./style.css";
import PAGE_IMG from "../../assets/images/page10.png";
import { motion } from "framer-motion";

const Page10 = () => {
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ width: window.innerWidth }}
      >
        <Box className="page10">
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className="page-10-overlay"
            ></Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} className="img-section">
              <img className="w100" src={PAGE_IMG} alt="page 2" />
            </Grid>

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
                  Custom billboards
                </Typography>
                <Typography
                  variant="h5"
                  color={"primary"}
                  className="sub-title"
                >
                  Personalized and unique outdoor advertising structures using
                  advanced 3D printing technology to meet the specific branding
                  and marketing needs of businesses.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Box className="mobile-view-description">
            <Typography variant="h3" color={"primary"} className="title">
              Custom billboards
            </Typography>
            <Typography variant="h5" color={"primary"} className="sub-title">
              Personalized and unique outdoor advertising structures using
              advanced 3D printing technology to meet the specific branding and
              marketing needs of businesses.
            </Typography>
          </Box>
        </Box>
      </motion.div>
    </>
  );
};

export default Page10;
