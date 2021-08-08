import React from "react";
import { buttonsTitles } from "../../core/core.constants";
import { NavButton } from "../NavButton/NavButton.component";
import "./Nav.styles.scss";

export function Nav({ activeSection, setActiveSection }) {
  return (
    <nav className="app-nav">
      {buttonsTitles.map((title) => {
        const isActive = activeSection === title;
        const onClick = () => {
          setActiveSection(title);
        };
        return (
          <NavButton
            key={title}
            isActive={isActive}
            onClick={onClick}
            title={title}
          />
        );
      })}
    </nav>
  );
}
