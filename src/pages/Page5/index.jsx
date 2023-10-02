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
import PAGE_5_IMG from "../../assets/backgroundImages/page5.svg";
import PATTERN from "../../assets/patterns/page5.svg";

const Page5 = () => {
  return (
    <>
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
            <img src={PATTERN} alt="pattern_1" className="pattern" />

            <Box className="description">
              <Typography variant="h3" color={"primary"} className="title">
                Custom 3d Wall murals
              </Typography>
              <Typography variant="h5" color={"primary"} className="sub-title">
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
            <img src={PAGE_5_IMG} alt="page 2" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Page5;
