import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import smurfs from './reducers';

const store = createStore(
  smurfs,
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
