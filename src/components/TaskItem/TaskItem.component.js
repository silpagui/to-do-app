import React from "react";
import "./TaskItem.styles.scss";
import { assetsURL, statusTask } from "../../core/core.constants";

export function TaskItem({
  taskList,
  setTaskList,
  setShowDeleteTaskConfirmation,
  taskItem,
  position,
  avoidDelay,
}) {
  const isChecked = taskItem.status === "done";
  const delayElementsStyle =
    position <= 10 && !avoidDelay
      ? { animationDelay: `${0.3 * position}s` }
      : {};

  return (
    <li className="item-task" style={delayElementsStyle}>
      <label
        htmlFor={`task-${taskItem.id}`}
        className="item-checkbox"
        title={taskItem.title}
      >
        <input
          type="checkbox"
          name={`task-${taskItem.id}`}
          id={`task-${taskItem.id}`}
          className="item-checkbox"
          checked={isChecked}
          onChange={() => {
            const newStatus = isChecked ? statusTask.ACTIVE : statusTask.DONE;

            const updatedList = taskList.map((item) => {
              if (taskItem.id === item.id) {
                item.status = newStatus;
              }
              return item;
            });

            setTaskList(updatedList);
          }}
        />
        <span className="item-title">{taskItem.title}</span>
      </label>
      <button
        className="trash-button"
        onClick={() => {
          setShowDeleteTaskConfirmation({
            message: `Are you sure you want to delete "${taskItem.title}"?`,
            show: true,
            handleOnYes: () => {
              const filteredList = taskList.filter((task) => {
                return task.id !== taskItem.id;
              });
              setTaskList(filteredList);
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
      </button>
    </li>
  );
}
