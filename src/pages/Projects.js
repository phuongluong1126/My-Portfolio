import React from "react";
import ProjectItem from "../components/ProjectItem";
import "./Projects.css";
import video1 from "../videos/01.mp4";
import video2 from "../videos/02.mp4";
import video3 from "../videos/03.mp4";
import video4 from "../videos/04.mp4";
import video5 from "../videos/05.mp4";
import video6 from "../videos/06.mp4";
import img1 from "../images/projects/01.png";
import img2 from "../images/projects/02.png";
import img3 from "../images/projects/03.png";
import img4 from "../images/projects/04.png";
import img5 from "../images/projects/05.png";
import img6 from "../images/projects/06.png";

export default function Projects() {

  return (
    <div className="page projects--page">
      <div className="left--container">
        <h1 className="projects--heading stroke--text2">Creative Zone</h1>
        <h2 className="projects--heading">front end | back end | UI</h2>
        <h5 className="projects--heading">the projects make me better</h5>
        <div className="project--container-left">
          <ProjectItem
            urlImage={img1}
            urlVideo={video1}
            name="Foodition Web | Front End | ReactJS"
            linkGithub="https://github.com/phuongluong1126/FooDiction-WebApp"
          />
        </div>
        <div className="project--container-left">
          <ProjectItem
            urlImage={img2}
            urlVideo={video2}
            name="Foodition App | Front End | Flutter"
            linkGithub="https://github.com/phuongluong1126/FooDiction-MobileApp"
          />
        </div>
        <div className="project--container-left item--bottom--left">
          <ProjectItem
             urlImage={img3}
             urlVideo={video3}
             name="Simple Blog | Full Stack | ReactJS NodeJS"
             linkGithub="https://github.com/phuongluong1126/FooDiction-WebApp"
          />
        </div>
      </div>
      <div className="right--container">
        <div className="project--container-right">
          <ProjectItem
            urlImage={img4}
            urlVideo={video4}
            name="VNU volunteer activities | Front End | html css"
            linkGithub="https://github.com/phuongluong1126/VNU-volunteer"
          />
        </div>
        <div className="project--container-right">
          <ProjectItem
            urlImage={img5}
            urlVideo={video5}
            name="Junges in Jungle Game | UI | Ai"
            linkGithub="https://github.com/LuongKimPhuong2611/JungesInJungle"
          />
        </div>
        <div className="project--container-right item--bottom--right">
          <ProjectItem
            urlImage={img6}
            urlVideo={video6}
            name="Noluv Game | Full Stack | C#"
            linkGithub="https://github.com/phuongluong1126/NoLuv-Game"
          />
        </div>
        <div className="end--text--projects">
        <h1 className="projects--heading stroke--text2 on--right">More Project</h1>
        <h2 className="projects--heading sub--on--right">Comming soon :v</h2>
        </div>
      </div>
    </div>
  );
}
