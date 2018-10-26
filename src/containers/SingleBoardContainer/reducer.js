import { 
  SELECT_BOARD,
  SELECT_BOARD_SUCCESS,
  ADD_LIST_SUCCESS
} from './constants';

const initialState = {
  loading: true,
  activeBoard: null
};

function activeBoardReducer(state = initialState, action) {
  switch(action.type) {
    case SELECT_BOARD:
      return { ...state, loading: true, activeBoard: action.activeBoard };
    case SELECT_BOARD_SUCCESS:
      return { ...state, activeBoard: action.activeBoard, loading: false };
    // case ADD_LIST:
    //   console.log('add list reducer', state)
    //   return state;
    case ADD_LIST_SUCCESS:
      // const stuff = [...state.activeBoard.lists];
      // console.log([...state.activeBoard.lists], 'hi');



      // console.log( {
      //   ...state,
      //   activeBoard: {
      //     ...state.activeBoard, lists: [...state.activeBoard.lists, action.listName]
      //   }
      // } , '----------------')
      return state;
      //return { ...state, activeBoard: { ...state.activeBoard, lists: [...state.activeBoard.lists, action.listName] } };
      //const ab = [ ...state.activeBoard.lists ];
      // let s = insertNewList(ab, action);
      // let lsts = [...state.activeBoard.lists, s];
      // let newActiveBoard = { ...state, activeBoard: lsts };
      // activeBoard: [...state.activeBoard.lists, s]
      //let listItems = [...state.activeBoard.lists, action.listName]; 
      // console.log({ ...state, lists: [...state.lists, action.listName] })
     // console.log(newActiveBoard, '0009-')
      //return { ...state, activeBoard: newActiveBoard };
    default:
      return state;
  }
};

function insertNewList(lists, action) {
  console.log(lists, 'hihi')
  let activeBoardListArray = lists.slice();
  activeBoardListArray.push(action.listName);
  return activeBoardListArray;
}

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
