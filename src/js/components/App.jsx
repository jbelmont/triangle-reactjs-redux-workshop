import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import TriangleReact from './TriangleReact.jsx';
import Users from './Users.jsx';

render(
  <Router history={hashHistory}>
    <Route path="/" component={TriangleReact}>
      <IndexRoute component={Users}></IndexRoute>
    </Route>
  </Router>,
  document.getElementById('reduxWorkshopContainer')
);