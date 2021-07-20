import React from "react";
import "./Confirmation.styles.scss";

export function Confirmation({ onClose, question, handleOnYes, isOpen }) {
  const handleOnClose = () => onClose({ message: question, show: false });

  return (
    <div
      className={`confirmation-wrapper ${
        isOpen ? "confirmation-wrapper--open" : ""
      }`}
    >
      <div className="message-container">
        {/* TODO: Apply hover */}
        <button className="close-button" onClick={handleOnClose}>
          X
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
            SI
          </button>
          <button onClick={handleOnClose} className="action-button">
            NO
          </button>
        </div>
      </div>
    </div>
  );
}
