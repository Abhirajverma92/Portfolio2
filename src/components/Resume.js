import React from "react"; //rfce
import "./Resume.css";

function Resume() {
  return (
    <div className="Resume" id="RESUME">
      <a className="Download" href={Resume} download="Yogeshwar's Resume.pdf">
          Download CV
        </a>
      {/* Heading Content */}
      <div>
        <h1 className="backslash">
          MY RESUME<span className="Rhighlight"> //</span>
        </h1>
        <div className="Rmain">
          <br></br>
          <br></br>
          <h2 className="mainheading">
            MY AWESOME <span className="Shighlight">STORY</span>
          </h2>
          <hr className="mainline"></hr>
          <p className="Rdetail">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            officia alias facilis eos. Autem sint ullam, quos dignissimos
            voluptate ratione.
          </p>
        </div>
      </div>
      {/* Detail Content */}
      <div className="Parentclass">
        <div className="Rcontent">
          <h3 className="Sname">
            <i class="fas fa-graduation-cap"></i>
            <div>
              Asansol Engineering College.
              <div className="year">2019-2023</div>
            </div>
          </h3>
          <div className="Rdescription">
            Graduated here with BTech in stream of Computer Science and Engineering.
          </div>
        </div>
        <div className="Rcontent">
          <h3 className="Sname">
            <i class="fas fa-university"></i>
            <div className="justify-content-center d-flex flex-column">
              Gyanda International School.
              <div className="year">2017-2019</div>
            </div>
          </h3>
          <div className="Rdescription">
            Completed my intermidiate with first division of grade.
          </div>
        </div>
        <div className="Rcontent">
          <h3 className="Sname">
            <i class="fas fa-school"></i>
            <div>
              Delhi Public School.
              <div className="year">2016-2017</div>
            </div>
          </h3>
          <div className="Rdescription">
          Completed my matriculation with 9.4 CGPA of grade.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
