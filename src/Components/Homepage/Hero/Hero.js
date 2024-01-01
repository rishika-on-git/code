import React, { useState } from 'react'
import Lottie from 'lottie-react'
import Animation from "./Animation - 1703924392330.json"
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero-contact-form">
      <div className="hero-container">
        <div className="hero-main">
          <div className="hero-content">
            <h2>No Resistance Can Drop Our Potential⚡</h2>
            <form action="#" method="post">
              {/* Your form elements go here */}
            </form>
          </div>
          <div className="hero-form-img">
            <Lottie animationData={Animation} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;




