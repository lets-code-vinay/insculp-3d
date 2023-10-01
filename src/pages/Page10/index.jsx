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
import PAGE_IMG from "../../assets/backgroundImages/page10.svg";
import PATTERN_TOP from "../../assets/patterns/page4_top.svg";
import PATTERN_BTM from "../../assets/patterns/page4_bottom.svg";

const Page10 = () => {
  return (
    <>
      <Box className="page10">
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
            <img src={PAGE_IMG} alt="page 2" />
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
                Custom billboards
              </Typography>
              <Typography variant="h5" color={"primary"} className="sub-title">
                Personalized and unique outdoor advertising structures using
                advanced 3D printing technology to meet the specific branding
                and marketing needs of businesses.
              </Typography>
            </Box>

            <img src={PATTERN_BTM} alt="pattern_1" className="pattern-bottom" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Page10;