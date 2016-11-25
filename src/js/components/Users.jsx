import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Users extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="users-container">
        <span className="users-container-label">Here are users.</span>
      </div>
    );
  }
}

export default Users;
