import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import abtImg from "../images/abtImg.png";
const About = () => {
  return (
    <div>
      <Grid
        container
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Grid item lg={7} md={8} sm={12}>
          <Box pr={3}>
            <Typography fontSize={30} fontWeight="bold">
            AYURA MOUTHCARE की चौंकाने वाली ख़ोज....
            </Typography>
            <Typography
              fontSize={20}
              textAlign="justify"
              pt={4}
              sx={{ lineHeight: 2 }}
            >
              यह एक अनुभवी डॉक्टर हैं। उन्होंने व्यसन-प्रेरित मुँह बंध और
              सबम्यूकोस फाइब्रोसिस को ठीक करने के लिए एक विधि विकसित की है। जो
              वास्तव में बहुतही प्रभावशाली है। जो दवा और उपकरणों पर निर्भर नहीं
              है। लेकिन मानव शरीर की क्षमता पर आधारित है पिछले 12 महीनों में
              16000 से अधिक रोगियों को ठीक कर चुके है। आइए जानते हैं उनके
              इंटरव्यू के द्वारा...
            </Typography>
            <Typography pt={3} fontWeight={500} fontSize={25}>
              अभ्यास अनुभव: 25 साल
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={5} md={4} sm={12}>
          <Box
            component="img"
            src={abtImg}
            width="100%"
          />
        </Grid>
      </Grid>

      <Stack spacing={4} py={3}>
        <Box sx={{ borderLeft: "2.5px solid #DD952B", px: 3 }}>
          <Typography fontWeight={500} fontSize={25} textAlign="justify">
            "क्या आपको भी लगता है कि पान, मावा, गुटखा,खैनी या तंबाकू खाने से बंद
            हुए मुंह को फिर से पहले की तरह खोलना मुश्किल होता है ? तो ये बात
            बिल्कुल गलत है.!"
          </Typography>
        </Box>
        <Box sx={{ borderLeft: "2.5px solid #DD952B", px: 3 }}>
          <Typography fontWeight={500} fontSize={25} textAlign="justify">
            "यदि आप वास्तव में बंद मुंह खोलना चाहते हैं, तो AYURA MOUTHCARE KIT
            द्वारा विकसित उत्पादक उपयोग करें और फिर चमत्कार देखें"
          </Typography>
        </Box>
      </Stack>
    </div>
  );
};

export default About;
