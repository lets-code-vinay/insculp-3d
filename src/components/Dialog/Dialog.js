import * as React from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Contact from "../ContactUsForm/ContactUs";
import DialogActions from "@mui/material/DialogActions";

function ContactDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose(true);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Contact Us</DialogTitle>
      <Contact />
      <DialogActions sx={{ padding: "20px" }}>
        <Button onClick={handleClose} sx={{ color: "black" }}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default function DialogContact({ open, onClose }) {
  return <ContactDialog open={open} onClose={onClose} />;
}
