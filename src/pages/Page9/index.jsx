import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Paper,
  Box,
  Grid,
} from "@mui/material";
import "./style.css";
import PAGE_IMG from "../../assets/backgroundImages/page9.svg";
import PATTERN from "../../assets/patterns/page5.svg";
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
              <img src={PATTERN} alt="pattern_1" className="pattern" />

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
              <img src={PAGE_IMG} alt="page 2" />
            </Grid>
          </Grid>
        </Box>
      </motion.div>
    </>
  );
};

export default Page9;
