import { 
  SELECT_BOARD,
  SELECT_BOARD_SUCCESS,
  ADD_LIST,
  ADD_LIST_SUCCESS,
  ADD_LIST_FAILED,
  ADD_LIST_CANCELLED
} from './constants';

export function selectBoard(activeBoardId) {
  return {
    type: SELECT_BOARD,
    activeBoardId
  };
}

export function selectBoardSuccess(activeBoard, activeBoardId) {
  return {
    type: SELECT_BOARD_SUCCESS,
    activeBoard,
    activeBoardId
  };
}

export function sendActiveBoardToTaskReducer(activeBoardId) {
  return {
    type: 'SEND',
    activeBoardId
  };
}

export function addList(listName, activeBoardId) {
  return {
    type: ADD_LIST,
    listName,
    activeBoardId
  };
}

export function addListSuccess(listName, activeBoardId) {
  return {
    type: ADD_LIST_SUCCESS,
    listName,
    activeBoardId
  };
}

export function addListFailed(listName, message) {
  return {
    type: ADD_LIST_FAILED,
    listName,
    message
  };
}

export function addListCancelled() {
  return {
    type: ADD_LIST_CANCELLED
  };
}