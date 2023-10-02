import * as React from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Contact from '../ContactUsForm/ContactUs';
import DialogActions from '@mui/material/DialogActions';
const emails = ['username@gmail.com', 'user02@gmail.com'];

function ContactDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Contact Us</DialogTitle>
            <Contact />
            <DialogActions sx={{padding:'20px'}}>
                <Button onClick={handleClose} sx={{color:'black'}}>Submit</Button>
            </DialogActions>
        </Dialog>
    );
}

export default function DialogContact() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div>
            <Button variant="text" onClick={handleClickOpen}>
                Connect
            </Button>
            <ContactDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
        </div>
    );
}
