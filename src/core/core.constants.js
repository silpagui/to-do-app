export const publicURL = process.env.PUBLIC_URL;
export const assetsURL = `${publicURL}/assets/`;

export const statusTask = {
  ACTIVE: "active",
  DONE: "done",
};

export const sections = {
  ALL: "All",
  ACTIVE: "Active",
  COMPLETED: "Completed",
};

export const localStorageKeys = {
  TASK_LIST: "taskList",
};

export const buttonsTitles = [
  sections.ALL,
  sections.ACTIVE,
  sections.COMPLETED,
];
