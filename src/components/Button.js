import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary"];

const SIZES = ["btn--medium", "btn--large"];

const LINKS = ["/", "/about", "/projects", "/contact"];

export const Button = ({ onClick, buttonStyle, buttonSize, link, children }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkLink = LINKS.includes(link) ? link : LINKS[0];

  return (
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
      >
        {children}
      </button>

  );
};
