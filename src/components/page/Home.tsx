import React from "react";
import About from "../about/About";
import Blog from "../blog/Blog";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import HeroBanner from "../heroBanner/HeroBanner";
import Portfolio from "../portfolio/Portfolio";
import MyPricing from "../pricing/MyPricing";
import Service from "../service/Service";
import TestMonial from "../testMonial/TestMonial";
import WorkMe from "../workMe/WorkMe";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <About />
      <Service />
      <Portfolio />
      <MyPricing />
      <WorkMe />
      <TestMonial />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
