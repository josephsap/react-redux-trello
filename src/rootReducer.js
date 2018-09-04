import { combineReducers } from 'redux';
import boardReducer from './containers/BoardContainer/reducer';
// import activeBoardReducer from './containers/SingleBoardContainer/reducer';

const rootReducer = combineReducers({
  boardReducer
});

export default rootReducer;