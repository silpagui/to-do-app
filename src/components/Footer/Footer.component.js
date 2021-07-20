import React from "react";
import "./Footer.styles.scss";
import trashcan from "../../assets/images/trashcan.svg";
import trashcanWhite from "../../assets/images/trashcan-white.svg";

export function Footer({ setTaskList, setShowDeletionConfirmation }) {
  return (
    <footer className="app-footer">
      <button
        className="action-button action-button--delete"
        onClick={() => {
          setShowDeletionConfirmation({
            message: "Are you sure you want to delete all?",
            show: true,
            handleOnYes: () => {
              setTaskList([]);
            },
          });
        }}
      >
        <div className="delete-all-icon-container">
          <img
            src={trashcanWhite}
            alt="trashcan-icon"
            className="trashcan-icon-white"
          />
          <img src={trashcan} alt="trashcan-icon" className="trashcan-icon" />
        </div>
        Delete all
      </button>
    </footer>
  );
}
