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
      showAddPopDown: false
    }
    this.togglePopDown = this.togglePopDown.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  togglePopDown() {
    this.setState({
      showAddPopDown: !this.state.showAddPopDown
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
      showAddPopDown
    } = this.state;

    const {
      TRIANGLE_REACTJS_USERS,
      ADD_USER,
      ADD,
      CLOSE,
      MALE,
      FEMALE
    } = constants;

    let FieldGroup, FormInstance;
    if (showAddPopDown) {
      FieldGroup = ({ id, label, help, ...props }) => {
        return (
          <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
          </FormGroup>
        );
      }

      FormInstance = (
        <form>
          <FieldGroup
            id="emailInput"
            type="email"
            label="Email address:"
            placeholder="Enter email"
          />
          <FieldGroup
            id="firstNameINput"
            type="text"
            label="First Name:"
            placeholder="Enter First Name"
          />
          <FieldGroup
            id="lastNameInput"
            type="text"
            label="Last Name:"
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
    }

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
          <Button bsStyle="primary" 
                  bsSize="large" 
                  onClick={this.togglePopDown}>{!showAddPopDown && ADD_USER || CLOSE}
          </Button>
        </div>
        {FormInstance}
        <h2 className="triangle-react-container-label"><strong>{TRIANGLE_REACTJS_USERS}</strong></h2>
        {UserArea}
      </div>
    );
  }
}

export default TriangleReact;
