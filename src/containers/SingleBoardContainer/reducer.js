import { 
  SELECT_BOARD,
  SELECT_BOARD_SUCCESS,
  ADD_LIST_SUCCESS // move add list into create list container
} from './constants';

const initialState = {
  loading: true,
  activeBoard: null,
  activeBoardId: null
};

function activeBoardReducer(state = initialState, action) {
  switch(action.type) {
    case SELECT_BOARD:
      return { ...state, loading: true, activeBoard: action.activeBoard, activeBoardId: action.id };
    case SELECT_BOARD_SUCCESS:
      return { ...state, activeBoard: action.activeBoard, loading: false };
    // case ADD_LIST:
    //   console.log('add list reducer', state)
    //   return state;
    case ADD_LIST_SUCCESS:
      return {
        ...state,
        activeBoard: {
          ...state.activeBoard,
          lists: [
            ...state.lists, action.listName
          ]
        }
      };
    default:
      return state;
  }
};

export default activeBoardReducer;
