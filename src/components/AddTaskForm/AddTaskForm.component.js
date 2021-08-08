import React, { useRef } from "react";
import { statusTask } from "../../core/core.constants";
import "./AddTaskForm.styles.scss";

export function AddTaskForm({ taskList, task, setTaskList, setTask }) {
  const input = useRef();

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
        input.current.focus();
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
        ref={input}
      ></input>
      <button className="action-button action-button--add">Add</button>
    </form>
  );
}
