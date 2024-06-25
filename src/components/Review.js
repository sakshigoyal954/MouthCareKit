import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Review = () => {
  return (
    <div>
      <Box sx={{textAlign:"center"}} >
        <Typography fontSize={28} fontWeight="bold" color="primary.main">
          Reviews
        </Typography>
      </Box>

      <Grid container sx={{ justifyContent: "space-between" }} py={5} spacing={2}>
        <Grid lg={3.5} md={6} xs={12} item>
          <Box
            width="100%"
            px={4}
            py={5}
            sx={{
              textAlign: "center",
              border: "2px solid orange",
              borderRadius: 15,
            }}
          >
            <Typography fontSize={26} color="#DD952B" fontWeight={600}>
              राकेश गुप्ता
            </Typography>
            <Typography
              fontSize={19}
              fontWeight={500}
              pt={2}
              textAlign="justify"
              sx={{ lineHeight:1.8 }}
            >
              इस फॉर्मूले को बनाने में लाखों रुपए खर्च किए गए हैं और देश में
              डीलरशिप के लिए एक से बढ़कर एक जगह ऑफर की गई है।{" "}
            </Typography>
          </Box>
        </Grid>
        <Grid lg={3.5} md={6} xs={12} item>
          <Box
            width="100%"
            px={4}
            py={5}
            sx={{
              textAlign: "center",
              border: "2px solid orange",
              borderRadius: 15,
            }}
          >
            <Typography fontSize={26} color="#DD952B" fontWeight={600}>
              राकेश गुप्ता
            </Typography>
            <Typography
              fontSize={19}
              fontWeight={500}
              pt={2}
              textAlign="justify"
              sx={{ lineHeight:1.8 }}
            >
              इस फॉर्मूले को बनाने में लाखों रुपए खर्च किए गए हैं और देश में
              डीलरशिप के लिए एक से बढ़कर एक जगह ऑफर की गई है।{" "}
            </Typography>
          </Box>
        </Grid>
        <Grid lg={3.5} md={6} xs={12} item>
          <Box
            width="100%"
            px={4}
            py={5}
            sx={{
              textAlign: "center",
              border: "2px solid orange",
              borderRadius: 15,
            }}
          >
            <Typography fontSize={26} color="#DD952B" fontWeight={600}>
              राकेश गुप्ता
            </Typography>
            <Typography
              fontSize={19}
              fontWeight={500}
              pt={2}
              textAlign="justify"
              sx={{ lineHeight:1.8 }}
            >
              इस फॉर्मूले को बनाने में लाखों रुपए खर्च किए गए हैं और देश में
              डीलरशिप के लिए एक से बढ़कर एक जगह ऑफर की गई है।{" "}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Review;
