import React from "react";
import "./LeftSideBar.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { WhatsappShareButton } from "react-share";

function LeftSideBar() {
  return (
    <div className="LeftSideBar">
      <div className="dp">
        <img
          src={process.env.PUBLIC_URL + "/Assets/logo.png"}
          alt="logo"
          className="logo"
        />
        <a href="#">
          <i class="fas fa-bars ham"></i>
        </a>
        <h5 className="menu">MENU</h5>
      </div>
      <div className="line"></div>
      <ul className="links">
        <li>
          {["right"].map((placement) => (
            <OverlayTrigger
              key={placement}
              placement={placement}
              overlay={
                <Tooltip className="tt" id={`tooltip-${placement}`}>
                  INSTAGRAM
                </Tooltip>
              }
            >
              <a
                href="https://www.instagram.com/apka_abhiraj.verma/"
                target="_blank"
              >
                <i class="fab fa-instagram silvericon"></i>
              </a>
            </OverlayTrigger>
          ))}
        </li>
        <li>
          {["right"].map((placement) => (
            <OverlayTrigger
              key={placement}
              placement={placement}
              overlay={<Tooltip id={`tooltip-${placement}`}>LINKEDIN</Tooltip>}
            >
              <a
                href="https://www.linkedin.com/in/abhiraj-verma-8aa7981b6/"
                target="_blank"
              >
                <i class="fab fa-linkedin silvericon"></i>
              </a>
            </OverlayTrigger>
          ))}
        </li>
        <li>
          {["right"].map((placement) => (
            <OverlayTrigger
              key={placement}
              placement={placement}
              overlay={<Tooltip id={`tooltip-${placement}`}>GITHUB</Tooltip>}
            >
              <a href="https://github.com/Abhirajverma92?tab=repositories" target="_blank">
                <i class="fab fa-github silvericon"></i>
              </a>
            </OverlayTrigger>
          ))}
        </li>
        <li>
          {["right"].map((placement) => (
            <OverlayTrigger
              key={placement}
              placement={placement}
              overlay={<Tooltip id={`tooltip-${placement}`}>YOUTUBE</Tooltip>}
            >
              <a href="https://topmate.io/apka_abhiraj_verma/" target="_blank">
                <i class="fab fa-youtube silvericon"></i>
              </a>
            </OverlayTrigger>
          ))}
        </li>
      </ul>
      <WhatsappShareButton
        className="sharebox"
        title="Please do visit my portfolio --> "
        url="ABCD"
      >
        <i class="fas fa-share share"></i>
      </WhatsappShareButton>
    </div>
  );
}

export default LeftSideBar;
