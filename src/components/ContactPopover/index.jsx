import * as React from "react";
import Popover from "@mui/material/Popover";
import { Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import "./style.css";

export default function ContactPopover(props) {
  const { onClose, anchorEl } = props;

  const handleClose = () => {
    onClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      onClick={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      className="popover-container"
    >
      <Box className="contact-icons-container">
        <WhatsAppIcon color="whatsapp" fontSize="2rem" />
        <CallIcon color="primary" fontSize="2rem" />
      </Box>
    </Popover>
  );
}
