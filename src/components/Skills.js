import React from "react";
import "./Skills.css";
import { ProgressBar } from "react-bootstrap";
import { Donut, DonutValue } from "react-donut-component";

function Skills() {
  return (
    <div className="Skills" id="SKILLS">
      <div>
        <h1 className="backslash1">
          ATTAINMENTS<span className="Rhighlight"> //</span>
        </h1>
        <div className="Smain">
          <div className="line1"></div>
          <div>
            <h2 className="Sheading">
              TechEnhance <span className="hskills">Front-end Developer</span>
            </h2>
            <p className="Sdetail">
            <br></br>• Used markup languages to create user-friendly web pages.
            <br></br>• Maintain and improve website.
            <br></br>• Doing troubleshooting and problem-solving.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="donutchart">
        <div className="spacing">
          <Donut
            animate="true"
            color="black"
            indicatorColor="#fac921"
            linecap="round"
            size={150}
            strokeWidth={25}
            trackColor="lightgray"
          >
            <DonutValue
              style={{
                fontSize: "20px",
              }}
            >
              80
            </DonutValue>
          </Donut>
          <div className="tags">HTML</div>
        </div>
        <div className="spacing">
          <Donut
            animate="true"
            color="black"
            indicatorColor="#fac921"
            linecap="round"
            size={150}
            strokeWidth={25}
            trackColor="lightgray"
          >
            <DonutValue
              style={{
                fontSize: "20px",
              }}
            >
              70
            </DonutValue>
          </Donut>
          <div className="tags">CSS</div>
        </div>
        <div className="spacing">
          <Donut
            animate="true"
            color="black"
            indicatorColor="#fac921"
            linecap="round"
            size={150}
            strokeWidth={25}
            trackColor="lightgray"
          >
            <DonutValue
              style={{
                fontSize: "20px",
              }}
            >
              40
            </DonutValue>
          </Donut>
          <div className="tags">REACT</div>
        </div>
      </div> */}
      <div>
        <div className="Secondmain">
          <div className="line1"></div>
          <div>
            <h2 className="Secondheading">
              PeerXP <span className="hskills">Web Developer</span>
            </h2>
            <p className="Sdetail">
              <b>• Building reusable components and front-end libraries for future use.</b>
              <b>• Reviewing application requirements and interface designs.</b>
              <b>• Developing new user-facing features using React js.</b>
            </p>
          </div>
        </div>
      </div>
      {/* <div className="Bargraph"> */}
        {/* <div className="Planguage">
          C<span className="percent1">90%</span>
        </div>
        <ProgressBar
          animated
          className="progress"
          striped
          variant="warning"
          now={90}
        />
        <div className="Planguage">
          C++<span className="percent2">90%</span>
        </div>
        <ProgressBar
          animated
          className="progress"
          striped
          variant="warning"
          now={90}
        />
        <div className="Planguage">
          Python<span className="percent3">70%</span>
        </div>
        <ProgressBar
          animated
          className="progress"
          striped
          variant="warning"
          now={70}
        />
        <div className="Planguage">
          Java<span className="percent4">50%</span> */}
        {/* </div>
        <ProgressBar
          animated
          className="progress"
          striped
          variant="warning"
          now={50}
        />
        <div className="Planguage">
          SQL<span className="percent5">80%</span>
        </div>
        <ProgressBar
          animated
          className="progress"
          striped
          variant="warning"
          now={80}
        />
      </div> */}
      <div>
        <div className="Smain1">
          <div className="line1"></div>
          <div>
            <h2 className="Sheading">
              Persistent System <span className="hskills">Summer Intern</span>
            </h2>
            <p className="Sdetail">
              <b>• Collaborated with the team to know about code quality and consistency.</b>
              <b>• Used Javascript.</b>
              <b>• Did task using React and Node</b>
            </p>
          </div>
        </div>
      </div>
      {/* <div className="donutchart1">
        <div className="spacing">
          <Donut
            animate="true"
            color="black"
            indicatorColor="#fac921"
            linecap="round"
            size={150}
            strokeWidth={25}
            trackColor="lightgray"
          >
            <DonutValue
              style={{
                fontSize: "20px",
              }}
            >
              75
            </DonutValue>
          </Donut>
          <div className="tags">ENGLISH</div>
        </div>
        <div className="spacing">
          <Donut
            animate="true"
            color="black"
            indicatorColor="#fac921"
            linecap="round"
            size={150}
            strokeWidth={25}
            trackColor="lightgray"
          >
            <DonutValue
              style={{
                fontSize: "20px",
              }}
            >
              80
            </DonutValue>
          </Donut>
          <div className="tags">HINDI</div>
        </div>
        <div className="spacing">
          <Donut
            animate="true"
            color="black"
            indicatorColor="#fac921"
            linecap="round"
            size={150}
            strokeWidth={25}
            trackColor="lightgray"
          >
            <DonutValue
              style={{
                fontSize: "20px",
              }}
            >
              50
            </DonutValue>
          </Donut>
          <div className="tags">GERMAN</div>
        </div>
        <div className="spacing">
          <Donut
            animate="true"
            color="black"
            indicatorColor="#fac921"
            linecap="round"
            size={150}
            strokeWidth={25}
            trackColor="lightgray"
          >
            <DonutValue
              style={{
                fontSize: "20px",
              }}
            >
              100
            </DonutValue>
          </Donut>
          <div className="tags">MARATHI</div>
        </div>
      </div> */}
    </div>
  );
}

export default Skills;
