import React from "react";
import add from "../images/add.jpeg";
import {
  Box,
  Divider,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import OrderBtn from "./OrderBtn";

const Form2 = () => {
  return (
    <div>
      <Grid
        container pt={8}
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Grid item lg={4.5} md={6} xs={12}>
          <Box
            component="img"
            src={add}
            width="100%"
            sx={{ borderRadius: 15 }}
          />
        </Grid>
        <Grid item lg={7} md={6} xs={12}>
          <Grid container py={2} justifyContent="space-between" rowGap={4}>
            <Grid item lg={5.5} md={5.5} xs={10}>
              <FormControl fullWidth>
                <TextField
                  label="First Name"
                  type="text"
                  placeholder="First Name"
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "25px", // Apply border radius to the input
                    },
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item lg={5.5} md={5.5} xs={10}>
              <FormControl fullWidth>
                <TextField
                  label="Last Name"
                  type="text"
                  placeholder="Last Name"
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "25px", // Apply border radius to the input
                    },
                  }}
                />
              </FormControl>
            </Grid>

            <Grid item lg={5.5} md={5.5} xs={10}>
              <FormControl fullWidth>
                <TextField
                  label="Mobile No."
                  type="tel"
                  placeholder="Mobile No."
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "25px", // Apply border radius to the input
                    },
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item lg={5.5} md={5.5} xs={10}>
              <FormControl fullWidth>
                <TextField
                  label="Pincode"
                  type="text"
                  placeholder="Pincode"
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "25px", // Apply border radius to the input
                    },
                  }}
                />
              </FormControl>
            </Grid>

            <Grid item lg={12} md={12} xs={10}>
              <FormControl fullWidth>
                <TextField
                  label="Address."
                  type="text"
                  placeholder="Address."
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "25px", // Apply border radius to the input
                    },
                  }}
                />
              </FormControl>

              <OrderBtn />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Form2;
