import React from 'react'
import "./About.css"
import video from "../Video/vid3.mp4"
const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="about__title">
        ABOUT US
      </h2>
      <video className="video-background" autoPlay muted loop>
        <source src={video} type="video/mp4" />
        
      </video>


      <div className="about__container grid">
        <div className="timeline grid" id="text">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolorem id fuga illo ducimus illum omnis, voluptate vero unde ab, harum modi praesentium tenetur. Unde, in cumque! Laborum ducimus reiciendis recusandae maxime incidunt exercitationem dolore nisi at nam totam iure inventore debitis voluptate, aliquid harum animi, magni eaque in repudiandae, similique obcaecati veniam ad molestias. In ab repellendus adipisci laboriosam deserunt! Maiores doloribus, quod quae repellendus suscipit placeat sed voluptatibus ipsa perspiciatis molestiae dolorum adipisci a, tempore minus eveniet eligendi dolorem voluptate soluta provident corrupti? Modi cum error sed voluptatem odio eius itaque labore facere. Corrupti sint qui neque accusamus. 
        </div>
      </div>
    </section>
  )
}

export default About