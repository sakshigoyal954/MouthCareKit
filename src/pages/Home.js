import React, { useEffect } from "react";
import Layout from "../utills/Layout";
import { Box, Button, Container, Grid } from "@mui/material";
import SubHeader from "../components/SubHeader";
import About from "../components/About";
import Certificate from "../components/Certificate";
import Kit from "../components/Kit";
import OrderForm from "../components/OrderForm";
import Discription from "../components/Discription";
import TestImg from "../components/TestImg";
import Exersice from "../components/Exersice";

import Footer from "../components/Footer";
import logo from "../images/logo.png";
import Review from "../components/Review";
import "aos/dist/aos.css"; // Import the AOS CSS
import Aos from "aos";
import LogoutIcon from "@mui/icons-material/Logout";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000, // Adjust the animation duration as needed
      offset: 200,
    });
  }, []);
  return (
    <Layout>
      <Container
        sx={{
          maxWidth: { lg: "lg", xl: "xl", md: "md", sm: "sm", xs: "xs" },
        }}
      >
        <Box pt={3}>
          <Grid container sx={{alignItems:"center"}}>
            <Grid item lg={8} md={8} xs={8} data-aos="flip-right">
              <Box
                component="img"
                src={logo}
                width="80%"
                sx={{ pt: { lg: 0, md: 2, sm: 2, xs: 2 } }}
              />
            </Grid>
            <Grid item lg={4} md={4} xs={4} sx={{ textAlign: "end", pb:{md:0,xs:1} }}>
              <a href="#contactUs">
                <Button
                  type="submit"
                  startIcon={<LogoutIcon />}
                  sx={{
                    px: {lg:6,md:6,xs:4},
                    py:{lg:2,md:2,sm:1,xs:1},
                    backgroundColor: "primary.main",
                    color: "white",
                    fontSize: { lg: "18px", xs: "12px" },
                    fontWeight: "bold",
                    borderRadius: "30px",
                    textTransform: "capitalize",
                    ":hover": {
                      bgcolor: "#E89B0E",
                      color: "white",
                    },
                  }}
                  data-aos="zoom-in"
                >
                  Order Now
                </Button>
              </a>
            </Grid>
          </Grid>
        </Box>
        <hr />
        <Box py={{ lg: 5 }}>
          <SubHeader />
        </Box>

        <Box pb={5}>
          <About />
        </Box>
      </Container>
      <Box pb={5}>
        <TestImg />
      </Box>
      <Container>
        <Box pb={5}>
          <Kit />
        </Box>

        <Box pb={5}>
          <Discription />
        </Box>

        <Box pb={5}>
          <Exersice />
        </Box>

        <Box pb={5}>
          <Certificate />
        </Box>
      </Container>
      <Box sx={{ background: "#d5ebe6" }}>
        <Review />
      </Box>
      <Box pb={5} sx={{ backgroundColor: "primary.light" }}>
        <Container
          sx={{
            maxWidth: { lg: "lg", xl: "xl", md: "md", sm: "sm", xs: "xs" },
          }}
        >
          <OrderForm />
        </Container>
      </Box>
      <Footer />
    </Layout>
  );
};

export default Home;
