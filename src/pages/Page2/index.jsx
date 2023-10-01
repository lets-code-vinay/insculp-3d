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
import PAGE_2_IMG from "../../assets/backgroundImages/page2.svg";
import PATTERN_TOP from "../../assets/patterns/page2_top.svg";
import PATTERN_BTM from "../../assets/patterns/page2_bottom.svg";

const Page2 = () => {
  return (
    <>
      <Box className="page2">
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
            <img src={PAGE_2_IMG} alt="page 2" />
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
                Architectural Ceiling
              </Typography>
              <Typography variant="h5" color={"primary"} className="sub-title">
                Offering customized design & fabrication of intricate & unique
                ceiling components using advanced 3D printing for architectural
                projects.
              </Typography>
            </Box>

            <img src={PATTERN_BTM} alt="pattern_1" className="pattern-bottom" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Page2;
