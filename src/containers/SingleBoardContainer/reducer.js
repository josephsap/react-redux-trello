import { 
  SELECT_BOARD,
  SELECT_BOARD_SUCCESS,
  ADD_LIST_SUCCESS,
  ADD_LIST
} from './constants';

const initialState = {
  loading: true,
  activeBoard: null,
  lists: []
};

function activeBoardReducer(state = initialState, action) {
  switch(action.type) {
    case SELECT_BOARD:
      return { ...state, loading: true, activeBoard: action.activeBoard };
    case SELECT_BOARD_SUCCESS:
      return { ...state, activeBoard: action.activeBoard, loading: false };
    case ADD_LIST:
      return state;
    case ADD_LIST_SUCCESS:
       console.log({ ...state, lists: [...state.lists, action.listName] })
       return { ...state, lists: [...state.lists, action.listName] };
    default:
      return state;
  }
};

export default activeBoardReducer;

// import { ADD_LIST_SUCCESS, ADD_LIST } from './constants';

// const initialState = {
//  lists: [],
//  loading: false
// };

// function createListReducer(state = initialState, action) {
//  switch(action.type) {
//   case ADD_LIST:
//     console.log(state, 'r999')
//     return state;
//   case ADD_LIST_SUCCESS:
//      console.log({ ...state, lists: [...state.lists, action.listName] })
//      return { ...state, lists: [...state.lists, action.listName] };
//      // return { ...state, coinCollection: [...state.coinCollection,  action.selectedCoin] };
//    default:
//      return state;
//  }
// }

// export default createListReducer;
