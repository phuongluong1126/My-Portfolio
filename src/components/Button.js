import React from "react";
import "./Button.css";

const STYLES = ["btn--primary"];

const SIZES = ["btn--medium", "btn--large"];


export const Button = ({ onClick, buttonStyle, buttonSize, link, children }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
      >
        {children}
      </button>

  );
};
