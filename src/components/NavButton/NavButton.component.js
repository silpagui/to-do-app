import React from "react";
import "./NavButton.styles.scss";

export function NavButton({ isActive, onClick, title }) {
  return (
    <button
      className={`tab-button ${isActive ? "tab-button--selected" : ""}`}
      onClick={onClick}
    >
      {title}
      <span className="button-decoration"></span>
    </button>
  );
}
