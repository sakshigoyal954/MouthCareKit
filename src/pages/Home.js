import React from "react";
import Layout from "../utills/Layout";
import { Box, Container } from "@mui/material";
import SubHeader from "../components/SubHeader";
import About from "../components/About";
import Certificate from "../components/Certificate";
import Kit from "../components/Kit";
import OrderForm from "../components/OrderForm";
import Discription from "../components/Discription";

const Home = () => {
  return (
    <Layout>
      <Container
        sx={{
          maxWidth: { lg: "lg", xl: "xl", md: "md", sm: "sm", xs: "xs" },
        }}
      >
        <Box py={5}>
          <SubHeader />
        </Box>

        <Box pb={5}>
          <About />
        </Box>

        <Box pb={5}>
          <Kit />
        </Box>

        <Box pb={5}>
          <Discription />
        </Box>

        <Box pb={5}>
          <Certificate />
        </Box>
      </Container>

      <Box pb={5} sx={{ backgroundColor: "primary.light" }}>
        <Container
          sx={{
            maxWidth: { lg: "lg", xl: "xl", md: "md", sm: "sm", xs: "xs" },
          }}
        >
          <OrderForm />
        </Container>
      </Box>
    </Layout>
  );
};

export default Home;
