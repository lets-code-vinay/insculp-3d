import React from "react";
import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import NorthOutlinedIcon from "@mui/icons-material/NorthOutlined";
import SouthOutlinedIcon from "@mui/icons-material/SouthOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FB_ICON from "../../assets/icons/fb.svg";
import INSTA_ICON from "../../assets/icons/insta.svg";
import CALL_ICON from "../../assets/icons/phone round.svg";
import WA_ICON from "../../assets/icons/wa.svg";

import ContactPopover from "../ContactPopover";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import "./style.css";

const Footer = ({ onDownArrow, onUpArrow, currentPage, currentPageNo }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDownArrow = () => {
    onDownArrow();
  };

  const handleUpArrow = () => {
    onUpArrow();
  };

  const handleOpenContact = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="footer">
      <Box className="footer-container">
        <Typography
          className="title pointer no-grow"
          variant="body1"
          color={"primary"}
        >
          {currentPage}
        </Typography>

        <Box className="no-grow mobile-socials">
          <Box className="contact-icons-container">
            <IconButton
              sx={{
                width: "26px",
                padding: "4px !important",
              }}
            >
              <img
                src={WA_ICON}
                alt="WA-call-icon"
                className="pointer connect-icon"
              />
            </IconButton>
          </Box>

          <Box className="no-grow icons">
            <IconButton>
              <img src={CALL_ICON} alt="round-call-icon" className="pointer" />
            </IconButton>
            <IconButton>
              <img src={INSTA_ICON} alt="instagram-icon" className="pointer" />
            </IconButton>
            <IconButton>
              <img src={FB_ICON} alt="fb-icon" className="pointer" />
            </IconButton>
          </Box>
        </Box>

        <Box className="flex-grow"></Box>

        <Box className="arrow-container no-grow">
          <Box
            className={`up-arrow ${
              currentPageNo == 1 ? "default-cursor" : "pointer"
            }`}
          >
            <IconButton
              onClick={handleUpArrow}
              disabled={currentPageNo == 1}
              className="arrow-btn"
            >
              <NorthOutlinedIcon
                color={currentPageNo == 1 ? "disabled" : "primary"}
              />
            </IconButton>
          </Box>
          <Box
            className={`down-arrow ${
              currentPageNo == 10 ? "default-cursor" : "pointer"
            }`}
          >
            <IconButton
              onClick={handleDownArrow}
              disabled={currentPageNo == 10}
              className="arrow-btn"
            >
              <SouthOutlinedIcon
                color={currentPageNo == 10 ? "disabled" : "primary"}
              />
            </IconButton>
          </Box>
        </Box>

        <Typography
          className="title pointer no-grow letter-spacing connect"
          variant="h5"
          color={"primary"}
          onClick={handleOpenContact}
        >
          Connect
        </Typography>
      </Box>

      {/* ---Mobile view -- */}
      <Box className="mobile-arrow-container">
        <Box
          className={`back-arrow ${
            currentPageNo == 1 ? "default-cursor" : "pointer"
          }`}
        >
          <IconButton
            onClick={handleUpArrow}
            disabled={currentPageNo == 1}
            className="arrow-btn"
          >
            <ArrowBackIcon
              color={currentPageNo == 1 ? "disabled" : "primary"}
            />
          </IconButton>
        </Box>
        <Box
          className={`next-arrow ${
            currentPageNo == 10 ? "default-cursor" : "pointer"
          }`}
        >
          <IconButton
            onClick={handleDownArrow}
            disabled={currentPageNo == 10}
            className="arrow-btn"
          >
            <ArrowForwardIcon
              color={currentPageNo == 10 ? "disabled" : "primary"}
            />
          </IconButton>
        </Box>
      </Box>

      <ContactPopover anchorEl={anchorEl} onClose={handleClose} />
    </Box>
  );
};

export default Footer;
