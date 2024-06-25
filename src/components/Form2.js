import React from "react";

import {
  Box,
  Divider,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import OrderBtn from "./OrderBtn";
import Swal from "sweetalert2";

const Form2 = () => {
  const handelclick = () => {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Query send successfully. We contact you soon as possible.",
    });
  };
  return (
    <div>
      <Grid
        sx={{
          border: "2px solid #DD952B",
          padding: "10px 10px 30px 10px",
          borderRadius: "15px",
          backgroundColor: "primary.light"
        }}
      >
        <h2
          style={{
            textAlign: "center",
            paddingBottom: "10px",
            fontSize: "35px",
            borderBottom: "2px solid #DD952B",
            color: "#DD952B",
          }}
        >
          Order Now
        </h2>

        <Grid container py={2} pt={4} justifyContent="space-between" rowGap={4}>
          <Grid item lg={5.5} md={5.5} xs={12}>
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
          <Grid item lg={5.5} md={5.5} xs={12}>
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

          <Grid item lg={5.5} md={5.5} xs={12}>
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
          <Grid item lg={5.5} md={5.5} xs={12}>
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

          <Grid item lg={12} md={12} xs={12}>
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

            <OrderBtn handelclick={handelclick} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Form2;
