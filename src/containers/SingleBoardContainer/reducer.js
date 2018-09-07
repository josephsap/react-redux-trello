import { 
  SELECT_BOARD,
  SELECT_BOARD_SUCCESS
} from './constants';

const initialState = {
  loading: true,
  activeBoard: null
};

function activeBoardReducer(state = initialState, action) {
  switch(action.type) {
    case SELECT_BOARD:
      console.log(action, 'atn')
      return { ...state, loading: true, activeBoard: action.activeBoard };
    case SELECT_BOARD_SUCCESS:
      return { ...state, activeBoard: action.activeBoard, loading: false };
    default:
      return state;
  }
};

export default activeBoardReducer;
