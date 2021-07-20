import React from "react";
import { statusTask } from "../App/App.component";
import "./AddTaskForm.styles.scss";

export function AddTaskForm({ taskList, task, setTaskList, setTask }) {
  return (
    <form
      className="form-container"
      onSubmit={function (event) {
        event.preventDefault();
        const newList = taskList.concat({
          id: +new Date(),
          title: task,
          status: statusTask.ACTIVE,
          avoidDelay: true,
        });
        setTaskList(newList);
        setTask("");
      }}
    >
      <input
        className="input-add"
        type="text"
        name="add-details"
        placeholder="add details"
        value={task}
        required
        onChange={function (event) {
          setTask(event.target.value);
        }}
      ></input>
      <button className="action-button action-button--add">Add</button>
    </form>
  );
}
