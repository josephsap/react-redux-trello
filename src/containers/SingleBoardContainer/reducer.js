import { 
  SELECT_BOARD,
  SELECT_BOARD_SUCCESS
} from './constants';

import { ADD_LIST_SUCCESS } from '../CreateListContainer/constants';

const initialState = {
  loading: true,
  activeBoard: null,
  activeBoardId: null,
  one: null
};

function activeBoardReducer(state = initialState, action) {
  switch(action.type) {
    case SELECT_BOARD:
      return { ...state, loading: true, activeBoard: action.activeBoard, activeBoardId: action.activeBoardId };
    case SELECT_BOARD_SUCCESS:
      return { ...state, loading: false, activeBoard: action.activeBoard, activeBoardId: parseInt(action.activeBoardId) };
    case 'SEND':
      return { ...state, activeBoardId: action.id };
    case 'SEND_BOARD':
      console.log(state, '999999999999999999999999999999', action)
      return { ...state, activeBoard: action.activeBoard, one: 'hi' };
    case ADD_LIST_SUCCESS:
      return {
        ...state,
        activeBoard: [
          ...state.activeBoard, action.listName
        ]
      };
    default:
      return state;
  }
};

export default activeBoardReducer;
