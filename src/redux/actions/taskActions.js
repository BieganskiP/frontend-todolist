import { ADD_TASK } from "./types";

export const addTask = (taskData) => {
  return {
    type: ADD_TASK,
    payload: taskData,
  };
};
