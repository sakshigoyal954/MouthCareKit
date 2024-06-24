import { Box, Grid, Typography } from "@mui/material";
import t1 from "../images/t1.jpeg";
import t2 from "../images/t2.jpeg";
import t3 from "../images/t3.jpeg";

import React from "react";

const TestImg = () => {
  return (
    <div>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
      <Typography fontSize={28} fontWeight="bold" color="primary.main" pb={3}>
          7 Din Me Dikhega Fark
        </Typography>
        <Typography fontSize={28} fontWeight="bold" color="primary.main" pb={3}>
          Before - After
        </Typography>

        
      <Box sx={{display:"flex", alignItems:"center" , pb:2}}>
    
        <Box width="93px" height="93px" sx={{backgroundColor:"primary.main", borderRadius:"50%"}}>
          <Typography color="white" fontSize={32} fontWeight={600} py={3} px={1}>100%</Typography>
        </Box>
          <Typography color="primary.main" fontSize={32} fontWeight={600} px={1}>Result</Typography>
      </Box>
      </div>

      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid lg={3.5} item>
          <Box component="img" src={t1} width="100%"  height="230px" sx={{borderRadius:15, border:"2px solid #DD952B"}}/>

        </Grid>
        <Grid lg={3.5} item data-aos="zoom-out-left">
          <Box  component="img" src={t2} width="100%" height="230px" sx={{borderRadius:15, border:"2px solid #DD952B"}}/>
        </Grid>
        <Grid lg={3.5} item>
          <Box component="img" src={t3} width="100%"  height="230px" sx={{borderRadius:15, border:"2px solid #DD952B"}}/>
        </Grid>
      
      </Grid>
    </div>
  );
};

export default TestImg;
