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
import App from './components/App';
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
      <>
        <NavigationContainer />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/boards/:id" component={SingleBoardContainer} />
        </Switch>
      </>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
