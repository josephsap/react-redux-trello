import { ADD_TASK, ADD_TASK_SUCCESS } from './constants';

const initialState = {
  loading: true, // need to look at this
  activeBoardId: null,
  activeListId: null,
  activeBoard: null,
  activeList: null,
  card: null
};

function createTaskReducer(state = initialState, action) {
  switch(action.type) {
    case 'SEND':
      return { ...state, activeBoardId: action.activeBoardId };
    case ADD_TASK:
      return { ...state, loading: true, card: action.cardName, activeListId: parseInt(action.activeListId), activeList: action.activeList, activeBoard: action.activeBoard };
    case ADD_TASK_SUCCESS:
      const aBoard = [...state.activeBoard];

      const updatedActiveBoard = aBoard.map(item => {
        if(parseInt(item.id) === state.activeListId) {
          return  {
            ...item, cards: [
              ...item.cards, action.cardName
            ]
          };
        }
        return item;
      });

      return { 
        ...state,
        loading: true,
        activeBoard: updatedActiveBoard,
        activeList: {
          ...state.activeList,
          cards: [
            ...state.activeList.cards, action.cardName
          ]
        } 
      };
    default:
      return state;
  }
}


export default createTaskReducer;