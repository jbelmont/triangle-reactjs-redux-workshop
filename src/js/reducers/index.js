import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import users from './users';

export const rootReducer = combineReducers({users});

export default rootReducer;
