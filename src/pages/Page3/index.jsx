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
import PAGE_2_IMG from "../../assets/backgroundImages/page3.svg";
import PATTERN from "../../assets/patterns/page3.svg";

const Page3 = () => {
  return (
    <>
      <Box className="page3">
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
                Architectural Facade
              </Typography>
              <Typography variant="h5" color={"primary"} className="sub-title">
                Offering customized, intricate facades and cladding elements for
                buildings, enhancing aesthetics and design flexibility.
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            className="p3-overlay-section"
          ></Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} className="img-section">
            <img src={PAGE_2_IMG} alt="page 2" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Page3;
