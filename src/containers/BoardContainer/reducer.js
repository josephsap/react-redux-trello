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
      return { ...state, loading: true };
    case SELECT_BOARD_SUCCESS:
      console.log(action.activeBoard)
      return { ...state, activeBoard: action.activeBoard, loading: false };
    default:
      return state;
  }
};

export default boardReducer;
