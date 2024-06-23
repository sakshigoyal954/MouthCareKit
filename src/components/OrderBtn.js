import { Box, Button } from "@mui/material";
import React from "react";
import LogoutIcon from '@mui/icons-material/Logout';

const OrderBtn = ({handelclick}) => {
  
  return (
    <Box pt={4} sx={{textAlign:"center"}}>
      <Button
      startIcon={<LogoutIcon/>}
      onClick={handelclick}
        sx={{
          px: 6,
          py: 2,
          backgroundColor: "primary.main",
          color: "white",
          fontSize: { lg: "18px", sm: "12px" },
          fontWeight:"bold",
          borderRadius: "30px",
          textTransform: "capitalize",
          ":hover": {
            bgcolor: "#E89B0E",
            color: "white",
          },
        }}
      >
         Order Now
      </Button>
    </Box>
  );
};

export default OrderBtn;
