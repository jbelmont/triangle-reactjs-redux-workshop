import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

import { Button, Radio, FormGroup, FormControl, ControlLabel, HelpBlock, FieldGroup } from 'react-bootstrap/lib';

import Users from './Users.jsx';

import * as constants from '../constants/constants';

class TriangleReact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users,
      showModal: false
    }
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  open() {
    this.setState({
      showModal: true
    });
  }

  close() {
    this.setState({
        showModal: false
    });
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {

    const {
      users,
      showModal
    } = this.state;

    const {
      TRIANGLE_REACTJS_USERS,
      ADD_USER,
      ADD,
      MALE,
      FEMALE
    } = constants;

    const FieldGroup = ({ id, label, help, ...props }) => {
      return (
        <FormGroup controlId={id}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl {...props} />
          {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
      );
    }

    const FormInstance = (
      <form>
        <FieldGroup
          id="emailInput"
          type="email"
          label="Email address"
          placeholder="Enter email"
        />
        <FieldGroup
          id="firstNameINput"
          type="text"
          label="text"
          placeholder="Enter First Name"
        />
        <FieldGroup
          id="lastNameInput"
          label="text"
          type="text"
          placeholder="Enter Last Name"
        />
        <FormGroup>
          <Radio checked inline readOnly>
            {MALE}
          </Radio>
          {' '}
          <Radio checked inline readOnly>
            {FEMALE}
          </Radio>
      </FormGroup>
        <Button bsStyle="primary" bsSize="large">{ADD}</Button>
      </form>
    );

    const UserArea = (
        users.map(info => 
            <Users  email={info["email"]}
              first_name={info["first_name"]}
              last_name={info["last_name"]}
              gender={info["gender"]}
              id={info["id"]}
              props={this.props}
              onClick={this.props.addUserInfo}
            />
        )
    );
    
    return (
      <div className="triangle-react-container">
        <div className="add-user-btn-container">
          <Button bsStyle="primary" bsSize="large" onClick={this.open}>{ADD_USER}</Button>
        </div>
        {FormInstance}
        <h2 className="triangle-react-container-label"><strong>{TRIANGLE_REACTJS_USERS}</strong></h2>
        {UserArea}
      </div>
    );
  }
}

export default TriangleReact;
