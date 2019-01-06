import { ADD_TASK, ADD_TASK_SUCCESS } from './constants';

export function addTask(cardName, activeBoardId, activeListId, activeBoard) {
  console.log(cardName, activeBoardId, 'add ',activeBoard)
  return {
    type: ADD_TASK,
    cardName,
    activeBoardId,
    activeListId,
    activeBoard
  }
};


export function addTaskSuccess(cardName, activeListId) {
  console.log(cardName, 'add success')
  return {
    type: ADD_TASK_SUCCESS,
    cardName,
    activeListId
  }
}; 
