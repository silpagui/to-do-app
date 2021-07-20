import React, { useEffect, useState } from "react";
import "./App.styles.scss";

import { Nav } from "../Nav/Nav.component";
import { AddTaskForm } from "../AddTaskForm/AddTaskForm.component";
import { TaskList } from "../TaskList/TaskList.component";
import { Footer } from "../Footer/Footer.component";
import { Confirmation } from "../Confirmation/Confirmation.component";

export const statusTask = {
  ACTIVE: "active",
  DONE: "done",
};

export const sections = {
  ALL: "All",
  ACTIVE: "Active",
  COMPLETED: "Completed",
};

const localStorageKeys = {
  TASK_LIST: "taskList",
};

export const buttonsTitles = [
  sections.ALL,
  sections.ACTIVE,
  sections.COMPLETED,
];

function getTaskListFromCache() {
  try {
    const taskList = localStorage.getItem(localStorageKeys.TASK_LIST);
    const parsedTaskList = JSON.parse(taskList);
    return parsedTaskList;
  } catch (error) {
    console.warn("getTaskListFromCache", "Something did happened");
  }
}

const taskListCache = getTaskListFromCache();

export function App() {
  const [activeSection, setActiveSection] = useState(sections.ALL);
  const [taskList, setTaskList] = useState(taskListCache || []);
  const [task, setTask] = useState("");
  const [confirmation, setConfirmation] = useState({
    message: "",
    handleOnYes: () => {},
    show: false,
  });

  const filteredTasks = taskList.filter((task) => {
    const shouldShowCompleted =
      activeSection === sections.COMPLETED && task.status === statusTask.DONE;

    const shouldShowActive =
      activeSection === sections.ACTIVE && task.status === statusTask.ACTIVE;

    const shouldShowAll = activeSection === sections.ALL;

    return shouldShowCompleted || shouldShowActive || shouldShowAll;
  });

  useEffect(
    function updateCache() {
      localStorage.setItem(
        localStorageKeys.TASK_LIST,
        JSON.stringify(
          taskList.map((task) => {
            return {
              id: task.id,
              status: task.status,
              title: task.title,
            };
          })
        )
      );
    },
    [taskList]
  );

  return (
    <div className="app-container">
      <div className="content-container">
        <h1 className="title">#todo</h1>
        <Nav
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        <AddTaskForm
          taskList={taskList}
          task={task}
          setTaskList={setTaskList}
          setTask={setTask}
        />

        <TaskList
          taskList={taskList}
          setTaskList={setTaskList}
          filteredTasks={filteredTasks}
          setShowDeleteTaskConfirmation={setConfirmation}
        />
        <Footer
          setShowDeletionConfirmation={setConfirmation}
          setTaskList={setTaskList}
        />
      </div>

      <Confirmation
        isOpen={confirmation.show}
        onClose={setConfirmation}
        question={confirmation.message}
        handleOnYes={confirmation.handleOnYes}
      />
    </div>
  );
}
