import { 
  SELECT_BOARD,
  SELECT_BOARD_SUCCESS 
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
