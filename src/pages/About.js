import React, { useState } from "react";
import profileAva from "../images/ava.jpg";
import { Button } from "../components/Button";
import { BallTriangle  } from "react-loader-spinner";

import "./About.css";
// import { jsPDF } from "jspdf";

export default function About() {
    const [isLoading, setIsLoading] = useState(true);

  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  return (
    <div className="page about--page">
      {/* <div className="heading medium--text">About Me</div> */}
      <div className="heading--gap"></div>
      <div className="hero--section">
        <div className="right--container">
          <div className="avatar">
                 {isLoading && (
          <BallTriangle 
            type="ThreeDots"
            color="#EB3B5A"
            height={50}
            width={50}
            className="image--loader"
          />
        )}
            <img src={profileAva} alt="ava-img"  style={{ display: isLoading ? "none" : "block" }} onLoad={handleImageLoaded} />
          </div>
        </div>
        <div className="left--container">
          {/* <Logo className="logo--about" /> */}

          <div className="education--section">
            <div className="edu--icon">
              <i class="fas fa-graduation-cap"></i>
              <h3>General</h3>
            </div>
            <div className="discription--text">
              I am a <span>Full Stack Software Engineer</span> with nearly 2
              years of experience in Web Development.
              <div className="discription--text sub--text">
                <span>Good Graduation</span> from the University of Information
                Technology Vietnam National University Ho Chi Minh.
              </div>
            </div>
          </div>
          <div className="education--section">
            <div className="edu--icon">
              <i class="fas fa-code"></i>
              <h3>Specialist Skills</h3>
            </div>
            <div className="skills">
              <div className="skill--item">JavaScript</div>
              <div className="skill--item">TypeScript</div>
              <div className="skill--item">HTML</div>
              <div className="skill--item">CSS</div>
              <div className="skill--item">ReactJS</div>
              <div className="skill--item">NextJS</div>
              <div className="skill--item">NestJS</div>
              <div className="skill--item">ExpressJS</div>
              <div className="skill--item">AWS</div>
              <div className="skill--item">Postgres</div>
              <div className="skill--item">ORM </div>
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
            href="https://drive.google.com/file/d/110Okr3CG7w-LJp_deEFS_VFkJC68aqpV/view"
            target="_blank"
            rel="noreferrer"
          >
            <Button>Download My CV</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
