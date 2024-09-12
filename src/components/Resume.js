import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import styles from "./Resume.css"; // Import local CSS module

import ResumePDF from "../Resume.pdf"; // Assuming this is your resume PDF path

function Resume() {
  return (
    <div className={`container ${styles.Resume}`} id="RESUME">
      
      {/* Heading Content */}
      <div className="text-center mb-5">
        <h1 className={`${styles.backslash} display-4`}>
          MY RESUME<span className={styles.Rhighlight}></span>
        </h1>
        <a 
          className={`btn btn-primary ${styles.DownloadButton}`} 
          href={ResumePDF} 
          download="Resume.pdf"
        >
          Download Resume
        </a>
      </div>

      {/* Detail Content */}
      <div className={styles.Rmain}>
        <h2 className={`${styles.mainheading} text-center`}>
          MY AWESOME <span className={styles.Shighlight}>STORY</span>
        </h2>
        <hr className={styles.mainline}></hr>
        <p className={`${styles.Rdetail} text-center`}>
          I've always been a great problem solver. I started learning to code when I was a teenager, though it was always more of a hobby than a career focus.
        </p>
      </div>

      <div className="row mt-4">
        
        {/* CDAC PG_DAC */}
        <div className="col-md-4 mb-4">
          <div className={`card ${styles.Rcontent}`}>
            <div className="card-body">
              <h3 className={`card-title ${styles.Sname}`}>
                <i className="fas fa-graduation-cap"></i> CDAC-PUNE
              </h3>
              <h5 className={`card-subtitle mb-2 text-muted ${styles.year}`}>Mar 2024 - Aug 2024</h5>
              <p className={`card-text ${styles.Rdescription}`}>
                Post Graduation Diploma in Advanced Computing.
              </p>
            </div>
          </div>
        </div>
        {/* Asansol Engineering College */}
        <div className="col-md-4 mb-4">
          <div className={`card ${styles.Rcontent}`}>
            <div className="card-body">
              <h3 className={`card-title ${styles.Sname}`}>
                <i className="fas fa-graduation-cap"></i> Asansol Engineering College
              </h3>
              <h5 className={`card-subtitle mb-2 text-muted ${styles.year}`}>2019-2023</h5>
              <p className={`card-text ${styles.Rdescription}`}>
                Graduated with a BTech in Computer Science and Engineering.
              </p>
            </div>
          </div>
        </div>

        {/* Gyanda International School */}
        <div className="col-md-4 mb-4">
          <div className={`card ${styles.Rcontent}`}>
            <div className="card-body">
              <h3 className={`card-title ${styles.Sname}`}>
                <i className="fas fa-university"></i> Gyanda International School
              </h3>
              <h5 className={`card-subtitle mb-2 text-muted ${styles.year}`}>2017-2019</h5>
              <p className={`card-text ${styles.Rdescription}`}>
                Completed my intermediate with first division.
              </p>
            </div>
          </div>
        </div>

        {/* Delhi Public School */}
        <div className="col-md-4 mb-4">
          <div className={`card ${styles.Rcontent}`}>
            <div className="card-body">
              <h3 className={`card-title ${styles.Sname}`}>
                <i className="fas fa-school"></i> Delhi Public School
              </h3>
              <h5 className={`card-subtitle mb-2 text-muted ${styles.year}`}>2016-2017</h5>
              <p className={`card-text ${styles.Rdescription}`}>
                Completed my matriculation with a 9.4 CGPA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
