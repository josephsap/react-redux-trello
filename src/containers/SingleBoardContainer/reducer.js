import { 
  SELECT_BOARD,
  SELECT_BOARD_SUCCESS
} from './constants';

import { ADD_LIST_SUCCESS } from '../CreateListContainer/constants';

const initialState = {
  loading: true,
  activeBoard: null,
  activeBoardId: null,
  activeList: null,
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
      const aBoard = [...state.activeBoard];

      const updatedActiveBoard = aBoard.map(item => {
        if(item.id === action.justAddedTask.listId) {
          return  {
            ...item, cards: [
              ...item.cards, action.justAddedTask
            ]
          };
        }
        return item;
      });

      return { 
        ...state,
        loading: false,
        activeBoard: updatedActiveBoard
      };
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
