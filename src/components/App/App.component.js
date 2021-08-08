import React, { useEffect, useState } from "react";
import "./App.styles.scss";

import { Nav } from "../Nav/Nav.component";
import { AddTaskForm } from "../AddTaskForm/AddTaskForm.component";
import { TaskList } from "../TaskList/TaskList.component";
import { Footer } from "../Footer/Footer.component";
import { Confirmation } from "../Confirmation/Confirmation.component";
import { Copyright } from "../Copyright/Copyright.component";
import { sections, statusTask } from "../../core/core.constants";
import {
  getTaskListFromCache,
  setTaskListToCache,
} from "../../core/core.utils";

export function App() {
  const [activeSection, setActiveSection] = useState(sections.ALL);
  const [taskList, setTaskList] = useState(getTaskListFromCache() || []);
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
      setTaskListToCache(taskList);
    },
    [taskList]
  );

  useEffect(
    function updateScroll() {
      const body = document.getElementsByTagName("body");
      const bodyStyle = body[0].style;
      bodyStyle.overflow = confirmation.show ? "hidden" : "";
    },
    [confirmation]
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
        {activeSection === sections.COMPLETED && filteredTasks.length !== 0 && (
          <Footer
            setShowDeletionConfirmation={setConfirmation}
            setTaskList={setTaskList}
          />
        )}
        <Copyright />
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
