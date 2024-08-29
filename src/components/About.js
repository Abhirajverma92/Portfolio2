import React from "react";

import "./About.css";
import Resume from "../Resume.pdf";

function About() {
  return (
    <div className="About" id="ABOUT">
      <div className="Aboutleft">
        <img src="https://picsum.photos/420/600" className="Aboutimage"></img>
      </div>
      <div className="Aboutright">
        <h3 className="Aboutheading">Specialization in</h3>
        <h3 className="highlight">
          Computer Science and Engineering,
        </h3>
        <h3 className="Aboutheading">
          And Highly Innovative{" "}
          <span className="highlight">Full Stack Developer.</span>
        </h3>
        <hr className="Aboutline"></hr>
        <p className="Detail">
        Greetings! I'm Abhiraj Verma, a passionate and dedicated Computer Science Engineering graduate from Asansol Engineering College. With a commendable CGPA of 8.77, I have a strong academic foundation that I've coupled with hands-on experience in the realm of web development, particularly focusing on React, Node.js, and JavaScript. This showcases my journey, skills, and projects in the world of web development.
        </p>
        <a className="Download" href={Resume} download="Yogeshwar's Resume.pdf">
          Download CV
        </a>
      </div>
    </div>
  );
}

export default About;
