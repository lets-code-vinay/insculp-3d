import * as React from "react";
import Popover from "@mui/material/Popover";
import { Box, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import "./style.css";
import CALL_ICON from "../../assets/icons/call.svg";
import WA_ICON from "../../assets/icons/wa.svg";

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
        <IconButton>
          <img
            src={CALL_ICON}
            alt="round-call-icon"
            className="pointer connect-icon disable-mobile"
          />
        </IconButton>
        <IconButton>
          <img
            src={WA_ICON}
            alt="WA-call-icon"
            className="pointer connect-icon"
          />
        </IconButton>
      </Box>
    </Popover>
  );
}
