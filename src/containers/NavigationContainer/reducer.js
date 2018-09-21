import { 
  REQUEST_BOARDS, 
  REQUEST_BOARDS_SUCCESS
} from './constants';

import { ADD_BOARD_SUCCESS } from '../CreateBoardContainer/constants';

const initialState = {
  boards: [],
  loading: false
};



function boardReducer(state = initialState, action) {
  switch(action.type) {
    case REQUEST_BOARDS:
      return { ...state, loading: true };
    case REQUEST_BOARDS_SUCCESS:
      return { ...state, boards: action.boards, loading: false };
    case ADD_BOARD_SUCCESS:
      return { ...state, boards: [...state.boards,  action.boardName] };
    default:
      return state;
  }
};

export default boardReducer;
