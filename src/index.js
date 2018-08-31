import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory'


import rootReducer from './rootReducer';
import ReduxComponentConnect from './connectComponent';
import sampleSaga from './saga';

import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sampleSaga);


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={ReduxComponentConnect}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
