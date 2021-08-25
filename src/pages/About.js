import React from "react";
import profileAva from "../images/ava.jpg";
import { ReactComponent as Logo } from "../images/logo.svg";
import { Button } from "../components/Button";
import "./About.css";
// import { jsPDF } from "jspdf";

export default function About() {
  return (
    <div className="page about--page">
      {/* <div className="heading medium--text">About Me</div> */}
      <div className="heading--gap"></div>
      <div className="hero--section">
      <div className="right--container">
          <div className="avatar">
            <img src={profileAva} alt="ava-img" />
          </div>
        </div>
        <div className="left--container">
          {/* <Logo className="logo--about" /> */}

          <div className="education--section">
            <div className="edu--icon">
              <i class="fas fa-graduation-cap"></i>
              <h3>Education</h3>
            </div>
            <div className="discription--text">
              I am a student of <span>Software Engineering</span> at 
              <br></br>
            the University of Information Technology Vietnam
            National University Ho Chi Minh (VNU - HCM)
              <div className="discription--text sub--text">
                <span>Graduate in: </span>February 2022
              </div>
              <div className="discription--text sub--text">
                <span>GPA: </span>7.9/10
              </div>
            </div>
          </div>
          <div className="education--section">
            <div className="edu--icon">
              <i class="fas fa-code"></i>
              <h3>Specialist Skills</h3>
            </div>
            <div className="skills">
              <div className="skill--item">HTML</div>
              <div className="skill--item">CSS</div>
              <div className="skill--item">JAVA SCRIPT</div>
              <div className="skill--item">DART</div>
              <div className="skill--item">REACTJS</div>
              <div className="skill--item">NODEJS</div>
              <div className="skill--item">FLUTTER</div>
              <div className="skill--item">MONGODB</div>
              {/* <div className="skill--item">EXPRESS</div> */}
            </div>
          </div>

          <div className="education--section section--3">
            <div className="edu--icon">
            <i class="fas fa-hand-point-right"></i>
              <h3>Explore more</h3>
            </div>
          </div>
          {/* <Tabs /> */}
          <a
            href="https://drive.google.com/file/d/1hMkCw8A8geOpzXLfdro6aipoPep2cpPT/view?usp=sharing"
            target="_blank"
          >
            <Button>Download My CV</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
