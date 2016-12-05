import * as constants from '../constants/constants.js';

const {
    GET_USERS,
    ADD_USER_DETAIL_INFO
} = constants;

export function getusers({users}) {
  return {
    type: GET_USERS,
    users
  };
}

export function addUserInfo({email, firstName, lastName, gender, id}) {
  return {
    type: ADD_USER_DETAIL_INFO,
    email,
    firstName,
    lastName,
    gender,
    id
  };
}