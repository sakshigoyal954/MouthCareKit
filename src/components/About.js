import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import abtImg from "../images/abtImg.png";
import img1 from "../images/4.png";
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
              डॉ.राजेश चतुर्वेदी की चौंकाने वाली ख़ोज....
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
            sx={{ borderRadius: "50%" }}
          />
        </Grid>
      </Grid>

      <Divider orientation="vertical" flexItem variant="fullwidth" />

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
            "यदि आप वास्तव में बंद मुंह खोलना चाहते हैं, तो डॉ.राजेश चतुर्वेदी
            द्वारा विकसित उत्पादक उपयोग करें और फिर चमत्कार देखें"
          </Typography>
        </Box>
      </Stack>

      <Typography
        fontSize={25}
        fontWeight={600}
        sx={{ lineHeight: 2 }}
        px={3}
        py={3}
        textAlign="justify"
      >
        डॉ.राजेश चतुर्वेदी 25 दिनों में मुंह खोलने की गंभीर से गंभीर समस्या को
        भी ठीक कर सकते हैं। जहां तक मुंह खोलने की बात है, यदि आप सही तरीके से
        इलाज करते हैं, तो आपको 7 दिनों में परिणाम मिल जाएगा। जो उन्होंने अपने 15
        साल के अभ्यास में कई बार किया है।
      </Typography>
      <Box component="img" src={img1} width="100%" sx={{ borderRadius: 15 }} />

      <div>
        <Box py={3} sx={{textAlign:"end"}}>
          <Typography color={"#DD952B"} fontSize={26} padding={2}>
            यह रहस्य क्या है ?
          </Typography>
          <Divider style={{ backgroundColor: "#DD952B" }} />
        </Box>
        <Typography fontSize={18} textAlign="justify" sx={{ lineHeight: 2 }}>
          वास्तव में यह रहस्य सरल है। हमें मुंह बंद होने का कारण समझना चाहिए। आज
          चिकित्सा में उसके कई कारण हैं। लेकिन आम कारण है मुंह के अंदर और बाहर
          की त्वचा का मोटा होना, क्या आप जानते हैं ऐसा क्यों होता है ? लंबे समय
          तक मुंह के अंदरूनी हिस्से में पत्ते, पान, मावा, गुटखा या तंबाकू रखने
          के कारण मुँह की कोमल स्नायु डेमेज हो जाती है। फिर धीरे धीरे मुँह बंद
          होने लगता है। उसके बाद ज्यादा तीखा और मसालेदार खाना भी मुश्किल हो जाता
          है।
        </Typography>
        <Typography
          fontSize={18}
          textAlign="justify"
          pt={2}
          sx={{ lineHeight: 2 }}
        >
          रहस्य ये है की हम रक्त प्रवाह और त्वचा में सुधार करते हैं। हमारी दवाई
          के उपयोग से मुंह के अंदर की त्वचा में नमी आती है , कोमल हो जाती है, और
          ब्लॉक हो गए स्नायु में फिर से रक्तप्रवाह दौड़ ने लगता है। और फिर
          धीरे-धीरे पहले की तरह मुंह खुलने लगता है।
        </Typography>
      </div>

    
    </div>
  );
};

export default About;
