import React, { useState } from "react";

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
import axios from "axios";

const Form2 = () => {
  const [initialValue, setInitialValue] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: "",
    type: "Mouth Care",
    comid: 1,
  });

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (initialValue.phone.length != "10") {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please enter currect mobile number.",
      });
      return 0;
    }
    try {
      // Make the API request to save form data
      const response = await axios.post(
        "https://admin.hamerpower.in/api/submit_website_order",
        initialValue
      );
      console.log("API response:", response.data);
      // Download the PDF
      setInitialValue({
        name: "",
        phone: "",
        address: "",
        pincode: "",
        type: "",
        comid: 1,
      });
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Your query send successfully. We contact you soon as possible.",
      });
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  // Function to handle input changes
  const inputChange = (e) => {
    const { name, value } = e.target;
    var iv = value;
    if (name == "phone" || name == "pincode") {
      iv = iv.replace(/\D/g, "");
    }
    setInitialValue({ ...initialValue, [name]: iv });
  };

  return (
    <div>
      <Grid
        sx={{
          border: "2px solid #DD952B",
          padding: "10px 10px 30px 10px",
          borderRadius: "15px",
          backgroundColor: "primary.light",
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

        <form onSubmit={handelSubmit}>
          <Grid
            container
            py={2}
            pt={4}
            justifyContent="space-between"
            rowGap={4}
          >
            <Grid item lg={5.5} md={5.5} xs={12}>
              <FormControl fullWidth>
                <TextField
                  label="Full Name"
                  type="text"
                  name="name"
                  onChange={(e) => inputChange(e)}
                  placeholder="Full Name"
                  value={initialValue.name}
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
                  type="text"
                  placeholder="Mobile No."
                  required
                  name="phone"
                  value={initialValue.phone}
                  onChange={(e) => inputChange(e)}
                  inputProps={{
                    minLength: 10,
                    maxLength: 10,
                  }}
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
                  label="Pincode"
                  type="text"
                  name="pincode"
                  onChange={(e) => inputChange(e)}
                  placeholder="Pincode"
                  maxlength="6"
                  minlength="6"
                  value={initialValue.pincode}
                  inputProps={{
                    minLength: 6,
                    maxLength: 6,
                  }}
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
                  placeholder="Address"
                  name="address"
                  value={initialValue.address}
                  onChange={(e) => inputChange(e)}
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
        </form>
      </Grid>
    </div>
  );
};

export default Form2;
