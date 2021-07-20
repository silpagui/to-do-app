import React from "react";
import "./TaskItem.styles.scss";
import trashcan from "../../assets/images/trashcan.svg";
import { statusTask } from "../App/App.component";

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
        for={`task-${taskItem.id}`}
        class="item-checkbox"
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
        <img src={trashcan} alt="trashcan-icon" className="trashcan-icon" />
      </button>
    </li>
  );
}
