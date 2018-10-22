import { ADD_LIST_SUCCESS, ADD_LIST } from './constants';

const initialState = {
 lists: [],
 loading: false
};

function createListReducer(state = initialState, action) {
 switch(action.type) {
  case ADD_LIST:
    return state;
  case ADD_LIST_SUCCESS:
     console.log(state, action, '--99--')
     return { ...state, lists: [...state.lists, action.listName] };
     // return { ...state, coinCollection: [...state.coinCollection,  action.selectedCoin] };
   default:
     return state;
 }
}

export default createListReducer;
