import { 
  REQUEST_BOARDS, 
  REQUEST_BOARDS_SUCCESS,
  SELECT_BOARD,
  SELECT_BOARD_SUCCESS
} from './constants';

export function requestBoards() {
  return {
    type: REQUEST_BOARDS
  };
}

export function requestBoardsSuccess(boards) {
  return {
    type: REQUEST_BOARDS_SUCCESS,
    boards
  };
}

export function selectBoard(activeBoard) {
  return {
    type: SELECT_BOARD,
    activeBoard
  };
}

export function selectBoardSuccess(activeBoard) {
  console.log('action', activeBoard)
  return {
    type: SELECT_BOARD_SUCCESS,
    activeBoard
  };
}

