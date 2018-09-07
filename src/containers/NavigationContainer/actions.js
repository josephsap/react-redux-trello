import { 
  REQUEST_BOARDS, 
  REQUEST_BOARDS_SUCCESS
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
