import * as constants from '../constants/constants.js';

const {
    GET_USERS
} = constants;

export function getusers({users}) {
  return {
    type: GET_USERS,
    users
  };
}