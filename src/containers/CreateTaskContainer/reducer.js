import { ADD_TASK, ADD_TASK_SUCCESS } from './constants';

const initialState = {
  loading: true, // need to look at this
  activeBoardId: null,
  activeListId: null,
  activeBoard: null,
  card: null
};

function createTaskReducer(state = initialState, action) {
  switch(action.type) {
    case 'SEND':
      return { ...state, activeBoardId: action.activeBoardId };
    case ADD_TASK:
      console.log(action, 'new card');
      return { ...state, loading: true, card: action.cardName, activeListId: action.activeListId };
    case ADD_TASK_SUCCESS:
      console.log(state, 'task add success', action);
      return { ...state, loading: true, activeListId: action.activeListId };
    default:
      return state;
  }
}


export default createTaskReducer;