import React from "react";
import { assetsURL } from "../../core/core.constants";
import "./Footer.styles.scss";

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
        <svg
          width="59"
          height="80"
          viewBox="0 0 59 80"
          className="trashcan-icon"
        >
          <use href={`${assetsURL}vectors/trashcan.svg#trashcan`} />
        </svg>
        Delete all
      </button>
    </footer>
  );
}
