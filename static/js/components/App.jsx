import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from '../store/store';

import TriangleReact from './TriangleReact.jsx';
import Main from './Main.jsx';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={TriangleReact}></IndexRoute>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('reduxWorkshopContainer'));