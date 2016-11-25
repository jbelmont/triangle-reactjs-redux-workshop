import React, { Component } from 'react';

const Users = ({ email, first_name, last_name, gender, id }) => {
  return (
    <div className="users-container">
        <span className="users-container-email">{email}</span>
        <span className="users-container-first-name">{first_name}</span>
        <span className="users-container-last-name">{last_name}</span>
        <span className="users-container-gender">{gender}</span>
        <span className="users-container-id">{id}</span>
    </div>
  )
}

export default Users;
