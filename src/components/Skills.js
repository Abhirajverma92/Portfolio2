import React from "react";
import "./Skills.css";
import { ProgressBar } from "react-bootstrap";

function Skills() {
  return (
    <div className="Skills" id="SKILLS">
      <div>
        <h1 className="backslash1">
          Experience<span className="Rhighlight"> //</span>
        </h1>
        <div className="Smain">
          <div className="line1"></div>
          <div>
            <h2 className="Sheading">
              Tata Technologies <span className="hskills">Java Developer</span>
            </h2>
            <p className="Sdetail">
              <b>• Developed and maintained Java-based applications.</b><br />
              <b>• Worked with .NET Core Web API and Entity Framework.</b><br />
              <b>• Implemented RESTful APIs using Spring Boot.</b><br />
              <b>• Collaborated on front-end features using React JS.</b><br />
              <b>• Utilized MySQL for database management.</b><br />
              <b>• Managed source code with GitHub.</b><br />
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="Secondmain">
          <div className="line1"></div>
          <div>
            <h2 className="Secondheading">
              Persistent System <span className="hskills">Summer Intern</span>
            </h2>
            <p className="Sdetail">
              <b>• Collaborated with the team to ensure code quality and consistency.</b><br />
              <b>• Utilized JavaScript for front-end development.</b><br />
              <b>• Worked on tasks using React and Node.js.</b><br />
            </p>
          </div>
        </div>
      </div>

      <div className="SkillsetContainer">
        <h2 className="skills-heading">Skill Set</h2>
        <div className="Bargraph">
          <div className="Planguage">
            Java<span className="percent1">90%</span>
          </div>
          <ProgressBar
            animated
            className="progress"
            striped
            variant="warning"
            now={90}
          />
          <div className="Planguage">
            C#<span className="percent2">80%</span>
          </div>
          <ProgressBar
            animated
            className="progress"
            striped
            variant="warning"
            now={80}
          />
          <div className="Planguage">
            .NET Core Web API<span className="percent3">75%</span>
          </div>
          <ProgressBar
            animated
            className="progress"
            striped
            variant="warning"
            now={75}
          />
          <div className="Planguage">
            Spring Boot REST API<span className="percent4">85%</span>
          </div>
          <ProgressBar
            animated
            className="progress"
            striped
            variant="warning"
            now={85}
          />
          <div className="Planguage">
            React JS<span className="percent5">80%</span>
          </div>
          <ProgressBar
            animated
            className="progress"
            striped
            variant="warning"
            now={80}
          />
          <div className="Planguage">
            MySQL<span className="percent6">75%</span>
          </div>
          <ProgressBar
            animated
            className="progress"
            striped
            variant="warning"
            now={75}
          />
          <div className="Planguage">
            GitHub<span className="percent7">80%</span>
          </div>
          <ProgressBar
            animated
            className="progress"
            striped
            variant="warning"
            now={80}
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
