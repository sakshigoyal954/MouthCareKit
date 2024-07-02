import React from "react";
import { Box, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import headImg from "../images/1.jpg"; // Make sure the path to the image is correct.

const SubHeader = () => {
  // Data object containing the text to display
  const data = {
    firsthead:
      "पत्ते, मावा, गुटका या तंबाकू खाने के बाद मुंह खोलने में दिक्कत होती है? तो Ayura Mouthcare Kit मुँह खोलने में मदद करेगा।",
  };
  

  return (
    <>
      {/* Container for the animated text */}
      <Box sx={{ py: 4 }}>
        <Box>
          <Typography
            sx={{
              fontSize: { lg: "55px", md: "45px", sm: "40px" },
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            {/* Animated text using TypeAnimation */}
            <TypeAnimation
              sequence={[data.firsthead, 3000]}
              speed={50}
              style={{ color: "#DD952B" }}
              repeat={Infinity}
            />
          </Typography>
        </Box>
      </Box>

      {/* Container for the image */}

      <Box sx={{ textAlign: "center", pb: 2 }}>
        <div data-aos="zoom-in">
          <img
            src={headImg}
            alt="Header Image"
            style={{ borderRadius: "50px" }}
            width="100%"
          />
        </div>
      </Box>
    </>
  );
};

export default SubHeader;
