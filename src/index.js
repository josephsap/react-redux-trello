import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './rootReducer';
import rootSaga from './sagas';

import './index.css';
import NavigationContainer from './containers/NavigationContainer';
import SingleBoardContainer from './containers/SingleBoardContainer';
import BoardContainer from './containers/BoardContainer';
import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <NavigationContainer />
        <Switch>
          <Route exact path="/" component={BoardContainer} />
          <Route exact path="/boards/:id" component={SingleBoardContainer} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
