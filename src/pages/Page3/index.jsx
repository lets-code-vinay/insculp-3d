import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import "./style.css";
import { motion } from "framer-motion";

const Page3 = () => {
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ width: window.innerWidth }}
      >
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
              <Box className="description">
                <Typography variant="h3" color={"primary"} className="title">
                  Architectural Facade
                </Typography>
                <Typography
                  variant="h5"
                  color={"primary"}
                  className="sub-title"
                >
                  Offering customized, intricate facades and cladding elements
                  for buildings, enhancing aesthetics and design flexibility.
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
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className="img-section"
            ></Grid>
          </Grid>
        </Box>
      </motion.div>
    </>
  );
};

export default Page3;
