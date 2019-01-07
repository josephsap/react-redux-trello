import { ADD_TASK, ADD_TASK_SUCCESS } from './constants';

export function addTask(cardName, activeBoard, activeBoardId, activeListId, activeList) {
  console.log(activeBoard, 'add 000000000090990909')
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
  console.log(cardName, 'add success', activeList)
  return {
    type: ADD_TASK_SUCCESS,
    cardName,
    activeListId,
    activeList
  }
};


export function sendActiveBoardToActiveBoardReducer(activeBoard) {
  return {
    type: 'SEND_BOARD',
    activeBoard
  };
}
