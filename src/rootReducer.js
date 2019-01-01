import { combineReducers } from 'redux';
import boardReducer from './containers/NavigationContainer/reducer';
import activeBoardReducer from './containers/SingleBoardContainer/reducer';
import createTaskReducer from './containers/CreateTaskContainer/reducer';

const rootReducer = combineReducers({
  boardReducer,
  activeBoardReducer,
  createTaskReducer
});

export default rootReducer;