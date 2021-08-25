import React from "react";
import { Button } from "../components/Button";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page home--page">
      <div className="carousel--container carousel--text">
        <div className="stroke--text">PHUONG LUONG</div>
        <div className="stroke--text">PHUONG LUONG</div>
        <div className="stroke--text">PHUONG LUONG</div>
        <div className="stroke--text">PHUONG LUONG</div>
        <div className="stroke--text">PHUONG LUONG</div>
        <div className="stroke--text">PHUONG LUONG</div>
        <div className="stroke--text">PHUONG LUONG</div>
        <div className="stroke--text">PHUONG LUONG</div>
        <div className="stroke--text">PHUONG LUONG</div>
      </div>
      <div className="hero--section home--section">
        <div className="left--container left--home">
          <div className="respone--deco">
            <div className="img--frame decor-3"></div>
            <div className="img--frame decor-1"></div>
            <div className="img--frame decor-2"></div>
          </div>
          <div className="small--text">Hi, I am</div>
          <div className="medium--text name--container">Phuong Luong</div>
          <div className="fast--action--container">
            <Link to="/about" className="fast--action">
              <Button className="btn--action">About me</Button>
            </Link>
            <Link to="/projects" className="fast--action">
              <Button className="btn--action">Projects</Button>
            </Link>
          </div>
          {/* <div className="large--text">A Developer</div> */}
          {/* <div className="action--container">
            <Button>Hello</Button>
          </div> */}
        </div>
        <div className="right--container right--home">
          <div className="img--frame decor-3"></div>
          <div className="img--frame decor-1"></div>
          <div className="img--frame decor-2"></div>
        </div>
      </div>
    </div>
  );
}
