import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class TriangleReact extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {

    return (
      <div className="triangle-react-container">
        <div className="triangle-react-container-label">Triangle ReactJS Users</div>
      </div>
    );
  }
}

export default TriangleReact;
