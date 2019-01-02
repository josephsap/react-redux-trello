import { ADD_TASK, ADD_TASK_SUCCESS } from './constants';

export function addTask(cardName, activeBoardId, activeListId) {
  console.log(cardName, activeBoardId, 'add ',activeListId)
  return {
    type: ADD_TASK,
    cardName,
    activeBoardId,
    activeListId
  }
};


export function addTaskSuccess(cardName) {
  console.log(cardName, 'add success')
  return {
    type: ADD_TASK_SUCCESS,
    cardName
  }
}; 
