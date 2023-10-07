import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import "./style.css";
import PAGE_2_IMG from "../../assets/images/page2.png";
import { motion } from "framer-motion";

const Page2 = () => {
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ width: window.innerWidth }}
        className="page2"
      >
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            className="page-2-overlay"
          ></Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} className="img-section">
            <img className="w100" src={PAGE_2_IMG} alt="page 2" />
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
            {/* <img src={PATTERN_TOP} alt="pattern_1" className="pattern-top" /> */}

            <Box className="description">
              <Typography variant="h3" color={"primary"} className="title">
                Architectural Ceiling
              </Typography>
              <Typography variant="h5" color={"primary"} className="sub-title">
                Offering customized design & fabrication of intricate & unique
                ceiling components using advanced 3D printing for architectural
                projects.
              </Typography>
            </Box>

            {/* <img src={PATTERN_BTM} alt="pattern_1" className="pattern-bottom" /> */}
          </Grid>
        </Grid>
      </motion.div>
    </>
  );
};

export default Page2;
