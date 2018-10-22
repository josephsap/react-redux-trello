import { combineReducers } from 'redux';
import boardReducer from './containers/NavigationContainer/reducer';
import createListReducer from './containers/CreateListContainer/reducer';
import activeBoardReducer from './containers/SingleBoardContainer/reducer';
import requestCardsReducer from './containers/CardListContainer/reducer';

const rootReducer = combineReducers({
  boardReducer,
  activeBoardReducer,
  requestCardsReducer,
  createListReducer
});

export default rootReducer;