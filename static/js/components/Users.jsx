import React, { Component } from 'react';
import {browserHistory} from 'react-router';

// import store from '../store/store';
import {addUserInfo} from '../actions/index';

const Users = ({ email, first_name, last_name, gender, id }) => {

  const userDetail = event => {
    const element = Array.from(event.currentTarget.children);
    const userDetails = {
      email: element.filter(elem => elem["dataset"]["email"])[0].dataset["email"],
      firstName: element.filter(elem => elem["dataset"]["firstName"])[0].dataset["firstName"],
      lastName: element.filter(elem => elem["dataset"]["lastName"])[0].dataset["lastName"],
      gender: element.filter(elem => elem["dataset"]["gender"])[0].dataset["gender"],
      id: element.filter(elem => elem["dataset"]["id"])[0].dataset["id"]
    };
    store.dispatch(addUserInfo(userDetails));
    browserHistory.push(`/user/${userDetails["id"]}`);
  };

  return (
    <div className="users-container" onClick={userDetail}>
        <span data-email={email} className="users-container-email">{email}</span>
        <span data-first-name={first_name} className="users-container-first-name">{first_name}</span>
        <span data-last-name={last_name} className="users-container-last-name">{last_name}</span>
        <span data-gender={gender} className="users-container-gender">{gender}</span>
        <span data-id={id} className="users-container-id">{id}</span>
    </div>
  )
}

export default Users;
