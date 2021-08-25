import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../images/logo.svg";
import "./NavigationBar.css";

export default function NavigationBar() {
  const [chooseLogo, setChooseLogo] = useState(true);
  useEffect(() => {
    var tabs = document.querySelectorAll(".navbar--link");
    console.log(tabs);
    tabs.forEach((tab, index) => {
      tab.onclick = function () {
        if (chooseLogo === false)
          document
            .querySelector(".navbar--link.navbar--active")
            .classList.remove("navbar--active");
        this.classList.add("navbar--active");
        setChooseLogo(false);
      };
    });
  }, [chooseLogo]);

  return (
    <nav className="navbar">
      <Link
        to="/"
        onClick={() => {
          if (chooseLogo === false) document
          .querySelector(".navbar--link.navbar--active")
          .classList.remove("navbar--active");
          setChooseLogo(true);
        }}
      >
        <Logo className={chooseLogo === false ? "logo logo-active" : "logo"}/>
        {/* <Logo className="logo logo-active"/> */}

      </Link>
      <Link to="/about" className="about--link navbar--link">
        About
      </Link>
      <Link to="/projects" className="projects--link navbar--link">
        Projects
      </Link>
      <Link to="/contact" className="navbar--link">
        Contact
      </Link>
    </nav>
  );
}
