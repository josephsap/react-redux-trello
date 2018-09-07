import { 
  SELECT_BOARD,
  SELECT_BOARD_SUCCESS 
} from './constants';

export function selectBoard(activeBoard) {
    console.log('action active board', activeBoard)
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
