import React from "react";
import c1 from "../images/certificate.png";
import { Box, Divider, Grid, Typography } from "@mui/material";

const Certificate = () => {
  return (
    <div>
      <Box py={3}>
        <Typography color={"#DD952B"} fontSize={26} padding={2}>
          आप किस तरीके की बात कर रहे हैं ?
        </Typography>
        <Divider style={{ backgroundColor: "#DD952B" }} />
      </Box>

      <Grid
        container
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Grid item lg={5} md={6} xs={12}>
          <Box
            component="img"
            src={c1}
            width="100%"
            sx={{ borderRadius: 15 }}
          />
        </Grid>
        <Grid item lg={7} md={6} xs={12}>
          <Typography fontSize={20} textAlign="justify" sx={{ lineHeight: 2 }}>
            Ayura Mouthcare Kit से मुंह खुल जाएगा, मसूड़े मजबूत होंगे, दांत
            साफ होंगे और चांदी गिरना (छाले पड़ना) बंद हो जाएगी। और फिर धीरे धीरे
            पहले की तरह मुँह खुलना स्टार्ट हो जायेगा।
          </Typography>
          <Typography
            fontSize={20}
            textAlign="justify"
            pt={2}
            sx={{ lineHeight: 2 }}
          >
            इस फॉर्मूले को बनाने में लाखों रुपए खर्च किए गए हैं और देश में
            डीलरशिप के लिए एक से बढ़कर एक जगह ऑफर की गई है।
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Certificate;
