import React from "react";
import { Typography, Box, Grid } from "@mui/material";

import "./style.css";
import PAGE_6_IMG from "../../assets/images/page6.png";
import PATTERN_TOP from "../../assets/patterns/page2_top.svg";
import PATTERN_BTM from "../../assets/patterns/page2_bottom.svg";
import { motion } from "framer-motion";

const Page6 = () => {
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ width: window.innerWidth }}
      >
        <Box className="page6">
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className="page-6-overlay"
            ></Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} className="img-section">
              <img src={PAGE_6_IMG} alt="page 2" />
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
              <img src={PATTERN_TOP} alt="pattern_1" className="pattern-top" />

              <Box className="description">
                <Typography variant="h3" color={"primary"} className="title">
                  Figurative sculptural art works
                </Typography>
                <Typography
                  variant="h5"
                  color={"primary"}
                  className="sub-title"
                >
                  Offering customized creation of three-dimensional sculptures
                  that depict realistic or representational human figures or
                  objects using advanced 3D printing technology, allowing for
                  precision and intricate detailing.
                </Typography>
              </Box>

              <img
                src={PATTERN_BTM}
                alt="pattern_1"
                className="pattern-bottom"
              />
            </Grid>
          </Grid>
        </Box>
      </motion.div>
    </>
  );
};

export default Page6;
