import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import t1 from "../images/t1.jpeg";
import t2 from "../images/t2.jpeg";
import t3 from "../images/t3.jpeg";

import React from "react";

const TestImg = () => {
  return (
    <Box py={3} sx={{ background: "#f186865c" }}>
      <Container>
        <Box sx={{ alignItems: "center" }}>
          <Typography
            fontSize={28}
            fontWeight="bold"
            color="primary.main"
            pb={1}
          >
            Before AND After
          </Typography>
        </Box>
        <Divider style={{ backgroundColor: "#DD952B" }} />
        <Grid
          container
          sx={{ justifyContent: "space-between", textAlign: "center" }}
          spacing={3}
          pt={3}
        >
          <Grid lg={4} md={4} xs={12} item data-aos="flip-left">
            <Box
              component="img"
              src={t1}
              width="100%"
              height="230px"
              sx={{ borderRadius: 15, border: "2px solid #DD952B" }}
            />
          </Grid>
          <Grid lg={4} md={4} xs={12} item data-aos="flip-up">
            <Box
              component="img"
              src={t2}
              width="100%"
              height="230px"
              sx={{ borderRadius: 15, border: "2px solid #DD952B" }}
            />
          </Grid>
          <Grid lg={4} md={4} xs={12} item data-aos="flip-left">
            <Box
              component="img"
              src={t3}
              width="100%"
              height="230px"
              sx={{ borderRadius: 15, border: "2px solid #DD952B" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TestImg;
