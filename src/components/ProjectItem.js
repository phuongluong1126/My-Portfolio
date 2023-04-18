import React, { useState } from "react";
import "./ProjectItem.css";
import HoverVideoPlayer from 'react-hover-video-player';
import { BallTriangle } from "react-loader-spinner";

export default function ProjectItem(props) {
        const [isLoading, setIsLoading] = useState(true);

  const handleImageLoaded = () => {
    setIsLoading(false);
  };
  return (
    <div>
      <div className="project--item">
        {/* <Link className="project--item--link" to={`/projects/${props.id}`}>
        </Link> */}
                            {isLoading && (
          <BallTriangle 
            type="ThreeDots"
            color="#EB3B5A"
            height={50}
            width={50}
            className="image--loader"
          />
        )}
        <HoverVideoPlayer
          videoSrc={props.urlVideo}
           onLoad={handleImageLoaded}
          pausedOverlay={
   
            <img className="project--item--img"
              src={props.urlImage}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: isLoading ? "none" : "block"
              }}
            onLoad={handleImageLoaded}
            />
          }
           loadingOverlay={
    isLoading && (
      <BallTriangle 
        type="ThreeDots"
        color="#EB3B5A"
        height={50}
        width={50}
        className="video--loader"
      />
    )
  }
        />
        <div className="project--item--info">
          <h6 className="project--item--name">{props.name}</h6>
          <h3 className="project--item--discription">{props.discription}</h3>
          <div className="project--links">
            {/* <a href={props.linkDemo} target="_blank" className="project--link--item">
              Demo
            </a> */}
            <a href={props.linkGithub} target="_blank" className="project--link--item" rel="noreferrer">
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
