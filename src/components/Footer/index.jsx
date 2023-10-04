import React from "react";
import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import NorthOutlinedIcon from "@mui/icons-material/NorthOutlined";
import SouthOutlinedIcon from "@mui/icons-material/SouthOutlined";
import FB_ICON from "../../assets/icons/fb.svg";
import ContactPopover from "../ContactPopover";
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
        <Box className="no-grow icons">
          <IconButton>
            <InstagramIcon color="primary" className="pointer" />
          </IconButton>
          <IconButton>
            <img src={FB_ICON} alt="fb-icon" className="pointer" />
          </IconButton>
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
          className="title pointer no-grow letter-spacing "
          variant="h5"
          color={"primary"}
          onClick={handleOpenContact}
        >
          Connect
        </Typography>
      </Box>

      <ContactPopover anchorEl={anchorEl} onClose={handleClose} />
    </Box>
  );
};

export default Footer;
