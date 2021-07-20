import React from "react";
import "./TaskList.styles.scss";

import { TaskItem } from "../TaskItem/TaskItem.component";

export function TaskList({
  taskList,
  setTaskList,
  filteredTasks,
  setShowDeleteTaskConfirmation,
}) {
  return (
    <ul className="list-task">
      {filteredTasks.map((taskItem, position) => {
        return (
          <TaskItem
            avoidDelay={taskItem.avoidDelay}
            position={position}
            key={taskItem.id}
            taskItem={taskItem}
            taskList={taskList}
            setTaskList={setTaskList}
            setShowDeleteTaskConfirmation={setShowDeleteTaskConfirmation}
          />
        );
      })}
    </ul>
  );
}
