import { combineReducers } from 'redux';
import boardReducer from './containers/NavigationContainer/reducer';
import activeBoardReducer from './containers/SingleBoardContainer/reducer';
//import createBoardReducer from './containers/CreateBoardContainer/reducer';

const rootReducer = combineReducers({
  boardReducer,
  activeBoardReducer,
  //createBoardReducer
});

export default rootReducer;