import { localStorageKeys } from "./core.constants";

export function getTaskListFromCache() {
  try {
    const taskList = localStorage.getItem(localStorageKeys.TASK_LIST);
    const parsedTaskList = JSON.parse(taskList);
    return parsedTaskList;
  } catch (error) {
    console.warn("getTaskListFromCache", "Something happened");
  }
}

export function setTaskListToCache(taskList) {
  try {
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
  } catch (error) {
    console.warn("setTaskListToCache", "Something happened");
  }
}
