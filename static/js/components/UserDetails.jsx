import React, { Component } from 'react';
import {browserHistory} from 'react-router';

import store from '../store/store';

const UserDetails = userInfo => {
    
    const userInformation = store && store.getState() && store.getState()["userInfo"];
    const {
        firstName,
        email,
        lastName,
        gender,
        id
    } = userInformation;
    const userDetail = event => {

    };

    return (
        <div className="user-details-container">
            <span className="email">{email}</span>
            <span className="first-name">{firstName}</span>
            <span className="last-name">{lastName}</span>
            <span className="gender">{gender}</span>
        </div>
    );
}

export default UserDetails;
