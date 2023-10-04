import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Stack from "@mui/material/Stack";

const Contact = () => {
  return (
    <Box component="form" sx={{ width: "500px" }} noValidate autoComplete="off">
      <Stack
        fullWidth
        sx={{ width: "400px", margin: "0 auto" }}
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Name</InputLabel>
          <OutlinedInput id="outlined-adornment-amount" label="Amount" />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">E Mail </InputLabel>
          <OutlinedInput id="outlined-adornment-amount" label="Amount" />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">
            Contact No
          </InputLabel>
          <OutlinedInput id="outlined-adornment-amount" label="Amount" />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">
            Description
          </InputLabel>
          <OutlinedInput id="outlined-adornment-amount" label="Amount" />
        </FormControl>
      </Stack>
    </Box>
  );
};

export default Contact;
