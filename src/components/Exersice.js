import { Box, Grid } from "@mui/material";
import React from "react";
import ex1 from "../images/ex1.png";
import ex2 from "../images/ex2.png";
import ex3 from "../images/ex3.png";
import ex4 from "../images/ex4.png";

const Exersice = () => {
  return (
    <div>
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid lg={3} item>
          <Box
            component="img"
            src={ex1}
            width="100%"
            sx={{
              borderRadius: 15,
              textAlign: "center",
              height: { lg: "230px", md: "auto", sm: "auto" },
            }}
          />
        </Grid>
        <Grid lg={3} item data-aos="zoom-out-left">
          <Box
            component="img"
            src={ex2}
            width="100%"
            sx={{
              borderRadius: 15,
              textAlign: "center",
              height: { lg: "230px", md: "auto", sm: "auto" },
            }}
          />
        </Grid>
        <Grid lg={3} item>
          <Box
            component="img"
            src={ex3}
            width="100%"
            sx={{
              borderRadius: 15,
              textAlign: "center",
              height: { lg: "230px", md: "auto", sm: "auto" },
            }}
          />
        </Grid>
        <Grid lg={3} item>
          <Box
            component="img"
            src={ex4}
            width="100%"
            sx={{
              borderRadius: 15,
              textAlign: "center",
              height: { lg: "230px", md: "auto", sm: "auto" },
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Exersice;
