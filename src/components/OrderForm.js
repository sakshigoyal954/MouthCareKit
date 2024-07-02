import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import kit from "../images/dwai.png";
import Form2 from "./Form2";

const OrderForm = () => {
  return (
    <div>
      <Grid container py={3}>
        <Typography
          fontSize={20}
          lineHeight={2}
          textAlign="justify"
          fontWeight={500}
        >
          मैं आपके पाठकों को बताउंगा कि मुंह खुलने की समस्या आज बहुत से लोगों को
          हो रही है और उन्होंने कई दवाइयां, सर्जरी, ऑपरेशन, इंजेक्शन भी ले लिए
          होंगे लेकिन उनमें ज़रा सा भी बदलाव नहीं हो रहा है। तो आखिर में इतना
          बताता हु की <b style={{ color: "#DD952B" }}>Ayura Mouthcare Kit</b>{" "}
          एकबार जरूर इस्तेमाल कीजिये।
        </Typography>

        <Grid item lg={10}>
          <Box sx={{ display: { md: "flex", xs: "block" } }}>
            <Typography
              fontSize={20}
              lineHeight={2}
              textAlign="justify"
              fontWeight={600}
              pt={3}
            >
              • 95% लोगों के मुंह खुल गए
            </Typography>
            <Typography
              fontSize={20}
              lineHeight={2}
              textAlign="justify"
              fontWeight={600}
              pt={3}
              sx={{ pl: { md: 4, xs: 0 } }}
            >
              • सिर्फ 7 दिन में मुंह खुलने लगेगा
            </Typography>
            <Typography
              fontSize={20}
              lineHeight={2}
              textAlign="justify"
              fontWeight={600}
              pt={3}
              sx={{ pl: { md: 4, xs: 0 } }}
            >
              • 100% संतुष्टि की गारंटी के साथ
            </Typography>
          </Box>
          <Typography
            fontSize={20}
            lineHeight={2}
            textAlign="justify"
            fontWeight={600}
            pt={3}
          >
            <b style={{ color: "#DD952B" }}>Ayura Mouthcare Kit</b> ऑर्डर देने
            के लिए नीचे दिया गया फॉर्म भरें।
          </Typography>
        </Grid>
      </Grid>

      <div id="contactUs">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item lg={7.5} md={7} xs={12} data-aos="zoom-in-right">
            <Form2 />
          </Grid>
          <Grid
            item
            lg={4}
            md={4.5}
            sx={{ display: { md: "block", xs: "none" } }}
            data-aos="zoom-in-left"
          >
            {/* <Box sx={{ textAlign: "end" , pb:0}}>
            <Typography fontSize={18} fontWeight={600} color="primary.main">
              {" "}
              Old Price: <strike>2300</strike>
            </Typography>
            <Typography fontSize={20} fontWeight={600} color="common.green">
              {" "}
              New Price : 1800
            </Typography>
          </Box> */}
            <Box component="img" src={kit} width="100%" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default OrderForm;
