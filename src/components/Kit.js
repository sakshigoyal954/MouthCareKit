import React from "react";
import kit from "../images/dwai1.png";
import { Box, Divider, Grid, Typography } from "@mui/material";
import img1 from "../images/4.png";
import Form2 from "./Form2";
import add from "../images/add.jpeg";
const Kit = () => {
  return (
    <div>
      <div>
        <Typography
          fontSize={25}
          fontWeight={600}
          sx={{ lineHeight: 2 }}
          px={3}
          py={3}
          textAlign="justify"
        >
          AYURA MOUTHCARE KIT 25 दिनों में मुंह खोलने की गंभीर से गंभीर समस्या
          को भी ठीक कर सकते हैं। जहां तक मुंह खोलने की बात है, यदि आप सही तरीके
          से इलाज करते हैं, तो आपको 7 दिनों में परिणाम मिल जाएगा। जो उन्होंने
          अपने 15 साल के अभ्यास में कई बार किया है।
        </Typography>
        <div data-aos="zoom-in">
          <Box
            component="img"
            src={img1}
            width="100%"
            sx={{ borderRadius: 15 }}
          />
        </div>

        <Grid
          container
          pt={8}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Grid item lg={4.5} md={6} xs={12} data-aos="fade-right">
            <Box
              component="img"
              src={add}
              width="100%"
              sx={{ borderRadius: 5 }}
              mb={3}
            />
          </Grid>
          <Grid item lg={7} md={6} xs={12} data-aos="fade-left">
            <Form2 />
          </Grid>
        </Grid>

        <div data-aos="fade-left">
          <Box py={3} sx={{ textAlign: "end" }}>
            <Typography color={"#DD952B"} fontSize={26} padding={2}>
              यह रहस्य क्या है ?
            </Typography>
            <Divider style={{ backgroundColor: "#DD952B" }} />
          </Box>
          <Typography fontSize={18} textAlign="justify" sx={{ lineHeight: 2 }}>
            वास्तव में यह रहस्य सरल है। हमें मुंह बंद होने का कारण समझना चाहिए।
            आज चिकित्सा में उसके कई कारण हैं। लेकिन आम कारण है मुंह के अंदर और
            बाहर की त्वचा का मोटा होना, क्या आप जानते हैं ऐसा क्यों होता है ?
            लंबे समय तक मुंह के अंदरूनी हिस्से में पत्ते, पान, मावा, गुटखा या
            तंबाकू रखने के कारण मुँह की कोमल स्नायु डेमेज हो जाती है। फिर धीरे
            धीरे मुँह बंद होने लगता है। उसके बाद ज्यादा तीखा और मसालेदार खाना भी
            मुश्किल हो जाता है।
          </Typography>
          <Typography
            fontSize={18}
            textAlign="justify"
            pt={2}
            sx={{ lineHeight: 2 }}
          >
            रहस्य ये है की हम रक्त प्रवाह और त्वचा में सुधार करते हैं। हमारी
            दवाई के उपयोग से मुंह के अंदर की त्वचा में नमी आती है , कोमल हो जाती
            है, और ब्लॉक हो गए स्नायु में फिर से रक्तप्रवाह दौड़ ने लगता है। और
            फिर धीरे-धीरे पहले की तरह मुंह खुलने लगता है।
          </Typography>
        </div>
      </div>

      <div data-aos="fade-right">
        <Box py={3}>
          <Typography color={"#DD952B"} fontSize={26} padding={2}>
            यह Ayura Mouthcare Kit कैसे काम करता है?
          </Typography>
          <Divider style={{ backgroundColor: "#DD952B" }} />
        </Box>

        <Typography fontSize={20} textAlign="justify" sx={{ lineHeight: 2 }}>
          यह सरल विज्ञान है। Ayura Mouthcare Kit में 25 सक्रिय सामग्रियां शामिल
          हैं। जिसके संपर्क में आने से पुरानी कमजोर कोशिका 10 गुना तेजी से काम
          करती है। इस वजह से कोशिकाएं धीरे-धीरे काम करने लगती हैं।
        </Typography>
        <Typography
          fontSize={20}
          textAlign="justify"
          pt={2}
          sx={{ lineHeight: 2 }}
        >
          Ayura Mouthcare Kit का उपयोग मुंह के अंदर और बाहर प्रभावित जगયા पर
          करना है। Ayura Mouthcare Kit 15,000 से अधिक कोशिकाओं को सक्रिय करता
          है। यह मुंह के रक्त प्रवाह और सख्त त्वचा को नरम करता है। इस तरह यह
          इलाज का काम करता है। ज्ञान का व्यवस्थित तरीके से उपयोग किया जाना
          चाहिए।
        </Typography>
      </div>
      <Box pt={3} sx={{ textAlign: { md: "end", xs: "left" } }}>
        <Typography color={"#DD952B"} fontSize={26} padding={2}>
          Ayura Mouthcare Kit में 2 प्रोडक्ट हैं।
        </Typography>
        <Divider style={{ backgroundColor: "#DD952B" }} />
      </Box>

      <Grid
        container
        sx={{ justifyContent: "space-between", alignItems: "center", pt: 5 }}
      >
        <Grid item lg={7} md={6} xs={12}>
          <Box pr={3} data-aos="fade-right">
            <h3>1) फोरम गम मसाज पाउडर</h3>
            <Typography
              fontSize={18}
              textAlign="justify"
              pt={1}
              sx={{ lineHeight: 2 }}
            >
              सुबह और शाम को एक बार उंगली से दांतों को ब्रश करें और फिर कुल्ला
              कर लें। मसूढ़ों की जकड़न, सांसों की दुर्गंध, दांतों-मसूड़ों को
              मजबूत बनाती है, मुंह खोलने में मदद करती है।
            </Typography>

            <h3 style={{ paddingTop: "20px" }}>2) माउथ केयर लोशन</h3>
            <Typography
              fontSize={18}
              textAlign="justify"
              pt={1}
              sx={{ lineHeight: 2 }}
            >
              दिन में दो बार 3 से 5 मिनट तक मसूड़ों पर मसाज करें फिर गर्म पानी
              से गरारे करे।
            </Typography>
          </Box>
        </Grid>

        <Grid item lg={5} md={6} xs={10} data-aos="fade-left">
          <Box
            component="img"
            src={kit}
            sx={{ borderRadius: 5, width: "100%", textAlign: "center" }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Kit;
