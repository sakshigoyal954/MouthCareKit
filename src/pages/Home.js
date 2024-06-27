import React from "react";
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
import LogoutIcon from "@mui/icons-material/Logout";
import Review from "../components/Review";
const Home = () => {
  return (
    <Layout>
      <Container
        sx={{
          maxWidth: { lg: "lg", xl: "xl", md: "md", sm: "sm", xs: "xs" },
        }}
      >
        <Box>
          <Grid container>
            <Grid item lg={8} md={8} xs={8}>
              <Box
                component="img"
                src={logo}
                width="90%"
                sx={{ pt: { lg: 0, md: 2, sm: 2, xs: 2 } }}
              />
            </Grid>
            <Grid item lg={4} md={4} xs={4} sx={{ textAlign: "end" }}>
              <a href="#contactUs">
                <Button
                  sx={{
                    px: { lg: 6, md: 6, sm: 6, xs: 1 },
                    py: { lg: 1, md: 1, sm: 1, xs: 0.2 },
                    mt: { lg: 7, md: 7, sm: 3.5, xs: 2 },
                    backgroundColor: "primary.main",
                    color: "white",
                    fontSize: { lg: "18px", sm: "12px" },
                    fontWeight: "bold",
                    borderRadius: "30px",
                    textTransform: "capitalize",
                    ":hover": {
                      bgcolor: "#E89B0E",
                      color: "white",
                    },
                  }}
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
