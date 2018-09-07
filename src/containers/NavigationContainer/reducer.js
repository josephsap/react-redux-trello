import { 
  REQUEST_BOARDS, 
  REQUEST_BOARDS_SUCCESS,
  SELECT_BOARD,
  SELECT_BOARD_SUCCESS
} from './constants';

const initialState = {
  boards: [],
  loading: false,
  activeBoard: null
};

function boardReducer(state = initialState, action) {
  switch(action.type) {
    case REQUEST_BOARDS:
      return { ...state, loading: true };
    case REQUEST_BOARDS_SUCCESS:
      return { ...state, boards: action.boards, loading: false };
    case SELECT_BOARD:
      console.log('select board', action)
      return { ...state, loading: true, activeBoard: action.activeBoard };
    case SELECT_BOARD_SUCCESS:
      console.log('select board success', action)
      return { ...state, activeBoard: action.activeBoard, loading: false };
    default:
      return state;
  }
};

export default boardReducer;
