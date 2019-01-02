import { ADD_TASK, ADD_TASK_SUCCESS } from './constants';

const initialState = {
  loading: true, // need to look at this
  activeBoardId: null,
  activeListId: null
};

function createTaskReducer(state = initialState, action) {
  switch(action.type) {
    case 'SEND':
      return { ...state, activeBoardId: action.activeBoardId };
    case ADD_TASK:
      console.log({...state, loading: true, activeListId: action.activeListId}, 'task add56789876');
      return { ...state, loading: true, activeListId: action.activeListId };
    case ADD_TASK_SUCCESS:
      console.log(state, 'task add success', action);
      return { ...state, loading: true, activeListId: action.activeListId };
    default:
      return state;
  }
}


export default createTaskReducer;