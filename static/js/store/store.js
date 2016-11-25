import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

import {ajax} from '../utils/ajax.js';
import rootReducer from '../reducers/index';
import data from '../data/data';

function getStateObject(users) {
  return {
    users
  };
}

// create an object for the default data
const defaultState = getStateObject(data.users);
const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
