import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import reviewData from "../Utils/demoData";

const Review = () => {
  return (
    <Container>
      <Box pt={3}>
        <Typography fontSize={28} fontWeight="bold" color="primary.main" data-aos="flip-left">
          Reviews
        </Typography>
      </Box>
      {/* <Divider style={{ backgroundColor: "#DD952B" }} /> */}
      <Grid
        container
        sx={{ justifyContent: "space-between" }}
        py={5}
        spacing={2}
      >
        {reviewData.map((item) => (
          <Grid lg={4} md={4} sm={4} xs={12} item data-aos="zoom-in">
            <Box
              px={4}
              py={3}
              sx={{
                textAlign: "center",
                border: "2px solid orange",
                borderRadius: 10,
                height:{lg:"180px", md:"250px", sm:"320px", xs:"250px"}
              }}
            >
              <Typography
                fontSize={19}
                fontWeight={500}
                pb={2}
                textAlign="justify"
                sx={{ lineHeight: 1.8 }}
              >
                {item.description}
              </Typography>
         
          <Typography fontSize={26} color="#DD952B" fontWeight={600}  data-aos="flip-left">
                {item.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Review;
