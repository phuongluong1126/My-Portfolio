import React from "react";
import "./ProjectItem.css";
import { Link } from "react-router-dom";
import HoverVideoPlayer from 'react-hover-video-player';
export default function ProjectItem(props) {
  return (
    <div>
      <div className="project--item">
        {/* <Link className="project--item--link" to={`/projects/${props.id}`}>
        </Link> */}
        <HoverVideoPlayer
          videoSrc={props.urlVideo}
          pausedOverlay={
            <img className="project--item--img"
              src={props.urlImage}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          }
          loadingOverlay={
            <div className="loading-overlay">
              <div className="loading-spinner" />
            </div>
          }
        />
        <div className="project--item--info">
          <h6 className="project--item--name">{props.name}</h6>
          <h3 className="project--item--discription">{props.discription}</h3>
          <div className="project--links">
            {/* <a href={props.linkDemo} target="_blank" className="project--link--item">
              Demo
            </a> */}
            <a href={props.linkGithub} target="_blank" className="project--link--item">
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
