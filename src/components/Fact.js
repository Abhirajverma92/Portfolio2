import React from "react";
import "./Fact.css";

function Fact() {
  return (
    <div className="Fact">
      <h1 className="Verticaltext">NUMBERS</h1>
      <p className="Factheading">
        SOME INTRESTING <span className="Facthighlight">FACTS</span>
      </p>
      <p className="Factheading">ABOUT ME</p>
      <p className="Factdetail">
      Factdetail Greetings! I'm Abhiraj Verma, a passionate and dedicated Computer Science Engineering graduate from Asansol Engineering College. With a commendable CGPA of 8.77, I have a strong academic foundation that I've coupled with hands-on experience in the realm of web development, particularly focusing on React, Node.js, and JavaScript. This showcases my journey, skills, and projects in the world of web development.

      </p>
      <div className="stats">
        <div className="statdiv">
          <p className="Numbers">2</p>
          <div className="statsdetail">Finished Projects</div>
        </div>
        <div className="statdiv">
          <p className="Numbers">120</p>
          <div className="statsdetail">Working Hours</div>
        </div>
        <div className="statdiv">
          <p className="Numbers">300</p>
          <div className="statsdetail">Coffee Cups</div>
        </div>
      </div>
    </div>
  );
}

export default Fact;
