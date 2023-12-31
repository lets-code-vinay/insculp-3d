import React from "react";
import { Typography, Box, Grid } from "@mui/material";

import "./style.css";
import PAGE_7_IMG from "../../assets/images/page7.png";
import { motion } from "framer-motion";

const Page7 = () => {
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ width: window.innerWidth }}
      >
        <Box className="page7">
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
                  outdoor urban installations
                </Typography>
                <Typography
                  variant="h5"
                  color={"primary"}
                  className="sub-title"
                >
                  Offering creation and installation of large-scale, durable 3D
                  printed structures, sculptures, or functional objects for
                  public spaces in urban environments. These installations are
                  designed to withstand outdoor conditions and enhance the
                  aesthetic and functional aspects of the urban landscape.
                </Typography>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className="p7-overlay-section"
            ></Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} className="img-section">
              <img className="w100" src={PAGE_7_IMG} alt="page 2" />
            </Grid>
          </Grid>

          <Box className="mobile-view-description">
            <Typography variant="h3" color={"primary"} className="title">
              outdoor urban installations
            </Typography>
            <Typography variant="h5" color={"primary"} className="sub-title">
              Offering creation and installation of large-scale, durable 3D
              printed structures, sculptures, or functional objects for public
              spaces in urban environments. These installations are designed to
              withstand outdoor conditions and enhance the aesthetic and
              functional aspects of the urban landscape.
            </Typography>
          </Box>
        </Box>
      </motion.div>
    </>
  );
};

export default Page7;
