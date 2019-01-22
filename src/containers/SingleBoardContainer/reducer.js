import { 
  SELECT_BOARD,
  SELECT_BOARD_SUCCESS
} from './constants';

import { ADD_LIST_SUCCESS } from '../CreateListContainer/constants';
import { DELETE_CARD_SUCCESS } from '../CreateTaskContainer/constants';
import { MOVE_CARD_TO_LIST, MOVE_CARD_TO_LIST_SUCCESS } from '../MoveCardSelectContainer/constants';

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

    case DELETE_CARD_SUCCESS:
      const activeBoard1 = [...state.activeBoard];

      const updatedActiveBoard1 = activeBoard1.map(item => {
        if(item.id === action.card.listId) {
          const updatedCardsArr = item.cards.filter(cardItem => cardItem.id !== action.card.id);
          return  {
            ...item, cards: updatedCardsArr
          };
        }
        return item;
      });

      return {
        ...state,
        activeBoard: updatedActiveBoard1
      };

    case MOVE_CARD_TO_LIST:
      console.log(action, 'move card reducer')
      
    default:
      return state;
  }
};

export default activeBoardReducer;
