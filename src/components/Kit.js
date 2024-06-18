import React from "react";
import kit from "../images/medicin.png";
import { Box, Divider, Grid, Typography } from "@mui/material";

const Kit = () => {
  return (
    <div>
       <Box py={3}>
        <Typography color={"#DD952B"} fontSize={26} padding={2}>
          यह Herbal Mouthcare Kit कैसे काम करता है?
        </Typography>
        <Divider style={{ backgroundColor: "#DD952B" }} />
      </Box>

      <Typography fontSize={20} textAlign="justify" sx={{ lineHeight: 2 }}>
        यह सरल विज्ञान है। Herbal Mouthcare Kit में 25 सक्रिय सामग्रियां शामिल
        हैं। जिसके संपर्क में आने से पुरानी कमजोर कोशिका 10 गुना तेजी से काम
        करती है। इस वजह से कोशिकाएं धीरे-धीरे काम करने लगती हैं।
      </Typography>
      <Typography
        fontSize={20}
        textAlign="justify"
        pt={2}
        sx={{ lineHeight: 2 }}
      >
        Herbal Mouthcare Kit का उपयोग मुंह के अंदर और बाहर प्रभावित जगયા पर करना
        है। Herbal Mouthcare Kit 15,000 से अधिक कोशिकाओं को सक्रिय करता है। यह
        मुंह के रक्त प्रवाह और सख्त त्वचा को नरम करता है। इस तरह यह इलाज का काम
        करता है। ज्ञान का व्यवस्थित तरीके से उपयोग किया जाना चाहिए।
      </Typography>

      <Box pt={3} sx={{textAlign:"end"}}>
        <Typography color={"#DD952B"} fontSize={26} padding={2}>
        Herbal Mouthcare Kit में 4 प्रोडक्ट हैं।
        </Typography>
        <Divider style={{ backgroundColor: "#DD952B" }} />
      </Box>

      <Grid
        container
        sx={{ justifyContent: "space-between", alignItems: "center",pt:5 }}
      >
        <Grid item lg={5} md={6} xs={12}>
          <Box pr={3}>
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

            <h3 style={{paddingTop:"10px"}}>2) माउथ केयर लोशन</h3>
            <Typography
              fontSize={18}
              textAlign="justify"
              pt={1}
              sx={{ lineHeight: 2 }}
            >
              दिन में दो बार 3 से 5 मिनट तक मसूड़ों पर मसाज करें फिर गर्म पानी
              से गरारे करे।
            </Typography>

            <h3 style={{paddingTop:"10px"}}>3) हर्बेक्स मसाज ऑयल</h3>
            <Typography
              fontSize={18}
              textAlign="justify"
              pt={1}
              sx={{ lineHeight: 2 }}
            >
              एक बूंद उंगली पर लें और गाल के बाहर कान के नीचे मसाज करे
            </Typography>

            <h3 style={{paddingTop:"10px"}}>4) माउथ ओपनर</h3>
            <Typography
              fontSize={18}
              textAlign="justify"
              pt={1}
              sx={{ lineHeight: 2 }}
            >
            माउथ ओपनर को दो टाइम सुबह शाम मुँह में डालके एक्सरसाइज करे।
            </Typography>
          </Box>
        </Grid>

        <Grid item lg={7} md={6} xs={12}>
          <Box
            component="img"
            src={kit}
            width="100%"
            sx={{ borderRadius: 15 }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Kit;
