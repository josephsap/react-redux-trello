import { 
  SELECT_BOARD,
  SELECT_BOARD_SUCCESS,
  ADD_LIST,
  ADD_LIST_SUCCESS,
  ADD_LIST_FAILED,
  ADD_LIST_CANCELLED
} from './constants';

export function selectBoard(id) {
  return {
    type: SELECT_BOARD,
    id
  };
}

export function selectBoardSuccess(activeBoard) {
  return {
    type: SELECT_BOARD_SUCCESS,
    activeBoard
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