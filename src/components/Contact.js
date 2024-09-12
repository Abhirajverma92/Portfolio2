import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { WhatsappShareButton } from "react-share"; // Import WhatsappShareButton
import "./Contact.css";

function Contact() {
  return (
    <div id="CONTACT" className="Contact">
      <div className="Cmain">
        <div className="line1"></div>
        <div>
          <h2 className="Cheading">
            Get In <span className="hskills">Touch</span>
          </h2>
          <p className="Cdetail">
            I'm always excited to connect with you. Whether you have questions,
            feedback, or a collaboration in mind, we're here to listen. Feel
            free to reach out through any of the following channels:
          </p>
        </div>
      </div>

      <Row>
        <Col md={4}>
          <div className="Info">
            <div className="fact">
              <i className="fas fa-map-marker-alt"></i>
              <p className="Contact-title">Gopalganj, Bihar</p>
            </div>
            <div className="fact">
              <i className="fas fa-phone-alt"></i>
              <p className="Contact-title">+91 9939170170</p>
            </div>
            <div className="fact">
              <i className="fas fa-inbox"></i>
              <p className="Contact-title">abhiraj11aeccse@gmail.com</p>
            </div>
          </div>
        </Col>
        <Col md={7} className="Contact-form">
          <p className="what-i-do">
            How Can I <span>Help You?</span>
          </p>
          <form
            method="post"
            name="Contact"
            onSubmit="submit"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="form"
          >
            <input type="hidden" name="form-name" value="Contact" />
            <div hidden>
              <input name="bot-field" />
            </div>
            <div className="inputs">
              <input
                className="mr-4"
                type="text"
                placeholder="Your Name"
                name="Name"
                required
              />
              <input type="text" placeholder="Subject" name="Subject" />
            </div>
            <input type="email" placeholder="Your Email" name="Email" />

            <br />
            <textarea
              name="Message"
              id="Message"
              rows="5"
              placeholder="Your Message"
            ></textarea>
            <br />
            <button type="submit" className="download-btn">
              SUBMIT
            </button>
          </form>
        </Col>
        <Col md={1}>
          <ul className="contact-links">
            <li>
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip id="tooltip-right">INSTAGRAM</Tooltip>}
              >
                <a
                  href="https://www.instagram.com/apka_abhiraj.verma/?igsh=cGxwaXcyOHZibjIy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram silvericon"></i>
                </a>
              </OverlayTrigger>
            </li>
            <li>
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip id="tooltip-right">LINKEDIN</Tooltip>}
              >
                <a
                  href="https://www.linkedin.com/in/abhiraj-verma-8aa7981b6/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin silvericon"></i>
                </a>
              </OverlayTrigger>
            </li>
            <li>
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip id="tooltip-right">GITHUB</Tooltip>}
              >
                <a
                  href="https://github.com/Abhirajverma92?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github silvericon"></i>
                </a>
              </OverlayTrigger>
            </li>
            <li>
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip id="tooltip-right">Topmate</Tooltip>}
              >
                <a
                  href="https://topmate.io/apka_abhiraj_verma/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube silvericon"></i>
                </a>
              </OverlayTrigger>
            </li>
            <li>
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip id="tooltip-right">WHATSAPP</Tooltip>}
              >
                <a>
                <WhatsappShareButton
                  className="sharebox"
                  title="Please do visit my portfolio --> "
                  url="ABCD"
                  phone="+919939170170"
                >
                  <i className="fab fa-whatsapp silvericon"></i>
                </WhatsappShareButton>
                </a>
              </OverlayTrigger>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
