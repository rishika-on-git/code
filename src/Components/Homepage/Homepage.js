import React from "react";
import "./Homepage.css";
import About from "../AboutUs/About.js";

import Hero from "./Hero/Hero.js";
import Team from "../Team/Team.js";
import MyGallery from "../Copied-Components/MyGallery/MyGallery.js";
const Homepage = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <MyGallery />      
      <Team />
    </div>
  );
};

export default Homepage;
