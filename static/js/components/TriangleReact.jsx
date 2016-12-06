import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

import Users from './Users.jsx';
import ReactModal from './ReactModal.jsx';
import UserContainer from '../containers/UserFilter.js';

import * as constants from '../constants/constants';

class TriangleReact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users
    }
    this._openModal = this._openModal.bind(this);
    this._closeModal = this._closeModal.bind(this);
  }

  _openModal() {
    this.setState({
      modalIsOpen: true
    });
  }

  _closeModal() {
    this.setState({
        modalIsOpen: false
    });
  }

  render() {

    const {
      users,
      modalIsOpen
    } = this.state;

    const { store } = this.context;

    const {
      TRIANGLE_REACTJS_USERS,
      ADD_USER
    } = constants;

    const UserArea = (
        users.map(info => 
            <Users  email={info["email"]}
              first_name={info["first_name"]}
              last_name={info["last_name"]}
              gender={info["gender"]}
              id={info["id"]}
              onClick={this.props.addUserInfo}
            />
        )
    );
    
    return (
      <div className="triangle-react-container">
        <div className="add-user-btn-container">
          <ReactModal modalIsOpen={modalIsOpen} openModal={this._openModal} closeModal={this._closeModal} />
        </div>
        <h2 className="triangle-react-container-label"><strong>{TRIANGLE_REACTJS_USERS}</strong></h2>
        <UserContainer />
        {UserArea}
      </div>
    );
  }
}

TriangleReact.childContextTypes = {
  store: React.PropTypes.object
};

export default TriangleReact;
