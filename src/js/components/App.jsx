import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from '../store/store';

import TriangleReact from './TriangleReact.jsx';
import Users from './Users.jsx';

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={TriangleReact}>
        <IndexRoute component={Users}></IndexRoute>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('reduxWorkshopContainer')
);