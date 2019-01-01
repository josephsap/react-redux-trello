import { ADD_TASK, ADD_TASK_SUCCESS } from './constants';

export function addTask(task) {
  return {
    type: ADD_TASK,
    task
  }
};

export function addTaskSuccess(taskName, taskDescription, listId, activeBoardId) {
  console.log(taskName, taskDescription, listId, activeBoardId, 'add task success')
  return {
    type: ADD_TASK_SUCCESS,
    taskName,
    taskDescription,
    listId,
    activeBoardId
  }
};