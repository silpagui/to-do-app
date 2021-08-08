import React from "react";
import { assetsURL } from "../../core/core.constants";
import "./Confirmation.styles.scss";

export function Confirmation({ onClose, question, handleOnYes, isOpen }) {
  const handleOnClose = () => onClose({ message: question, show: false });

  return (
    <div>
      <div
        onClick={handleOnClose}
        className={`confirmation-wrapper ${
          isOpen ? "confirmation-wrapper--open" : ""
        }`}
      ></div>
      <div
        className={`message-container ${
          isOpen ? "message-container--open" : ""
        }`}
      >
        <button className="close-button" onClick={handleOnClose}>
          <svg width="14" height="14" viewBox="0 0 14 14">
            <use href={`${assetsURL}vectors/cross-icon.svg#cross-icon`} />
          </svg>
        </button>
        <p className="delete-confirmation-message">{question}</p>
        <div className="buttons-confirmation-container">
          <button
            onClick={() => {
              handleOnYes();
              handleOnClose();
            }}
            className="action-button"
          >
            Yes
          </button>
          <button onClick={handleOnClose} className="action-button">
            No
          </button>
        </div>
      </div>
    </div>
  );
}
