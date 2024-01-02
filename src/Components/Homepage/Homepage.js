import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
// import Event from "../Events/Event.js";
import Timeline from "../Timeline/Timeline.js";
import Spline from "@splinetool/react-spline";
import HomeGallery from "./home-gallery/homeGallery.js";
import Timer from "../Timer/Timer";
//  import Animation from "./Animation - 1703924392330.json"
import About from "../AboutUs/About.js";
import Lottie from "lottie-react";
import Hero from "./Hero/Hero.js";
import Contact from "../Contact/Contact.js";
import Team from "../Team/Team.js";
import One from "../Copied-Components/FOLDER-ONE/One.js";

import Card from "../Copied-Components/FOLDER-ONE/Cards-framer/App.js";
import BouncyCardsFeatures from "../Copied-Components/FOLDER-ONE/Join.js";
import MyTeam from "../Copied-Components/MyTeam/MyTeam.js";
import MyGallery from "../Copied-Components/MyGallery/MyGallery.js";
const Homepage = () => {
  return (
    <div className="home">
      <Hero />
      {/* <Spline scene="https://prod.spline.design/8TF6sYqBVRN3uBba/scene.splinecode" /> */}

      {/* <Timer /> */}
      {/* <Lottie animationData={Animation} /> */}
      <About />
      {/* <Event /> */}
      <MyGallery />
      {/* <Timeline /> */}

      <Card />
      {/* <Team/> */}
      <MyTeam />
      <One />

      <BouncyCardsFeatures />

      <Contact />
    </div>
  );
};

export default Homepage;
