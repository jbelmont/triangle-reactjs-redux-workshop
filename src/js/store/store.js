import { createStore } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

import {ajax} from '../utils/ajax.js';
import rootReducer from '../reducers/index';

function getUsersRequest() {
  return {
      type: 'GET',
      route: '/api/v1/users'
    }
}

function getStateObject() {
  const getUsers = getUsersRequest();
  return ajax(getUsers)
    .then(users)
    .catch(err);
}

// create an object for the default data
const defaultState = getStateObject();
const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
