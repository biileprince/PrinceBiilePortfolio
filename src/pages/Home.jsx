import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";

import Resume from "../components/Resume/Resume";
import Testimonial from "../components/Testimonial";
import FeaturedProjects from "../components/FeaturedProjects";
import TopScroll from "../components/TopScroll";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <FeaturedProjects />
      <Resume />
      <Testimonial />
      <TopScroll />
    </>
  );
};
export default Home;
