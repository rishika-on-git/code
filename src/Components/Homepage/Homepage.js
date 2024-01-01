import React from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'
import Event from '../Events/Event.js'
import Timeline from '../Timeline/Timeline.js'
import Spline from "@splinetool/react-spline";
import HomeGallery from './home-gallery/homeGallery.js'
import Timer from '../Timer/Timer'
//  import Animation from "./Animation - 1703924392330.json"
import About from '../AboutUs/About.js'
import Lottie from "lottie-react";
import Hero from './Hero/Hero.js'
import Contact from '../Contact/Contact.js'
import Team from '../Team/Team.js'
import One from '../Copied-Components/FOLDER-ONE/One.js'
import ParticleRing from '../Copied-Components/FOLDER-ONE/Two.js'
import Card from '../Copied-Components/FOLDER-ONE/Cards-framer/App.js'
import BouncyCardsFeatures from '../Copied-Components/FOLDER-ONE/Join.js'

const Homepage = () => {
  return (
    <div className='home'>
     
      <Card/>
      {/* <ParticleRing/> */}
      <One/>
<Hero/>
{/* <Spline scene="https://prod.spline.design/8TF6sYqBVRN3uBba/scene.splinecode" /> */}

      {/* <Timer /> */}
      {/* <Lottie animationData={Animation} /> */}
      <About/>
      <Event />
      {/* <Timeline /> */}
      <div>YHA KUCH IMAGES LAGA DENGE 3 SE 4 FROM TEAM MEMBERS</div>
      <Link to='/team'>
      {/* <button>MORE</button> */}
   
      </Link>
      <div className='gallery-carousel'>
      <HomeGallery/>
      <Link to='/gallery'>
      {/* <button className='gallery-btn'>MORE</button> */}
      </Link>
      </div>
      <Team/>
      <BouncyCardsFeatures/>

      <Contact/>
     
    </div>
  )
}


export default Homepage
