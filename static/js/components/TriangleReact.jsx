import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

import Users from './Users.jsx';

class TriangleReact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users
    }
  }

  render() {
    const {
      users
    } = this.state;
    const UserArea = (
        users.map(info => 
            <Users  email={info["email"]}
              first_name={info["first_name"]}
              last_name={info["last_name"]}
              gender={info["gender"]}
              id={info["id"]} 
            />
        )
    );
    return (
      <div className="triangle-react-container">
        <h2 className="triangle-react-container-label"><strong>Triangle ReactJS Users</strong></h2>
        {UserArea}
      </div>
    );
  }
}

export default TriangleReact;
