import { 
  SELECT_BOARD,
  SELECT_BOARD_SUCCESS
} from './constants';

import { ADD_LIST_SUCCESS } from '../CreateListContainer/constants';

const initialState = {
  loading: true,
  activeBoard: null,
  activeBoardId: null
};

function activeBoardReducer(state = initialState, action) {
  switch(action.type) {
    case SELECT_BOARD:
      return { ...state, loading: true, activeBoard: action.activeBoard, activeBoardId: action.activeBoardId };
    case SELECT_BOARD_SUCCESS:
      return { ...state, loading: false, activeBoard: action.activeBoard, activeBoardId: parseInt(action.activeBoardId) };
    case 'SEND':
      return { ...state, activeBoardId: action.id };
    case ADD_LIST_SUCCESS:
      console.log(state, 'al success', action)
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
