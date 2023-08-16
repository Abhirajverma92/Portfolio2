import React, {useEffect} from 'react'
import "./TopBar.css"


const TopBar = () => {
        useEffect(() => {
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
    });
});
})  
  return (
    <>
      <div className="TopBar">
        <ul className="navigation">
          <li>
            <a href="#HOME">
              {" "}
              <i class="fas fa-minus"></i> Home{" "}
            </a>
          </li>
          <li>
            <a href="#ABOUT">
              {" "}
              <i class="fas fa-minus"></i> About{" "}
            </a>
          </li>
          <li>
            <a href="#RESUME">
              {" "}
              <i class="fas fa-minus"></i> Resume{" "}
            </a>
          </li>
          <li>
            <a href="#SKILLS">
              {" "}
              <i class="fas fa-minus"></i> Skills + Experience{" "}
            </a>
          </li>
          <li>
            <a href="#CONTACT">
              {" "}
              <i class="fas fa-minus"></i> Contact{" "}
            </a>
          </li>
        </ul>
        <div className="contact">
          <a className="GetInTouch" href="#CONTACT">
            <i class="far fa-envelope"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default TopBar
