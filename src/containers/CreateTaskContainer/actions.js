import { ADD_TASK, ADD_TASK_SUCCESS } from './constants';

export function addTask(cardName, activeBoard, activeBoardId, activeListId, activeList) {
  return {
    type: ADD_TASK,
    cardName,
    activeBoard,
    activeBoardId,
    activeListId,
    activeList
  }
};


export function addTaskSuccess(cardName, activeListId, activeList) {
  return {
    type: ADD_TASK_SUCCESS,
    cardName,
    activeListId,
    activeList
  }
};


export function sendActiveBoardToActiveBoardReducer(justAddedTask) {
  return {
    type: 'SEND_BOARD',
    justAddedTask
  };
}
