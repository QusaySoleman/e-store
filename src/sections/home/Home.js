import React from "react";

import Hero from "../hero/Hero";
import Aboutus from "../about-us/About";
import Services from "../services/Services";
import Slider from "../Slider/Slider";
import Footer from "../footer/Footer";
const Home = () => {
  return (
    <>
      <Hero />
      <Slider />
      <Aboutus />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
