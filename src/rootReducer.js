import { combineReducers } from 'redux';
import boardReducer from './containers/NavigationContainer/reducer';
// import activeBoardReducer from './containers/SingleBoardContainer/reducer';

const rootReducer = combineReducers({
  boardReducer
});

export default rootReducer;