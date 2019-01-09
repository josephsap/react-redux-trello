import { ADD_TASK, ADD_TASK_SUCCESS } from './constants';

export function addTask(card, activeBoard, activeBoardId, activeListId, activeList) {
  return {
    type: ADD_TASK,
    card,
    activeBoard,
    activeBoardId,
    activeListId,
    activeList
  }
};


export function addTaskSuccess(card, activeListId, activeList) {
  return {
    type: ADD_TASK_SUCCESS,
    card,
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
