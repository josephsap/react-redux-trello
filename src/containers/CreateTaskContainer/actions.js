import { ADD_TASK, ADD_TASK_SUCCESS, DELETE_CARD, DELETE_CARD_SUCCESS } from './constants';

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

export function deleteCard(activeBoardId, activeListId, cardId) {
  console.log(activeBoardId, activeListId, cardId, 'del card')
  return {
    type: DELETE_CARD,
    cardId,
    activeBoardId,
    activeListId
  }
};


export function deleteCardSuccess(card) {
  console.log(card, 'del card success')
  return {
    type: DELETE_CARD_SUCCESS,
    card
  }
};

