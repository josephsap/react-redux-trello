import { ADD_TASK, ADD_TASK_SUCCESS } from './constants';

const initialState = {
  tasks: [],
  loading: false
};

function createTaskReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_TASK:
      console.log(state, 'task add');
      return state;
    case ADD_TASK_SUCCESS:
      console.log(state, 'task add success');
      return state;
    default:
      return state;
  }
}


export default createTaskReducer;