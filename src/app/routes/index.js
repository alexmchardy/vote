import React from 'react';
import { IndexRoute, Route } from 'react-router';
import Layout from './Layout.jsx';
import Home from './Home.jsx';
import Vote from './Vote.jsx';
import Election from './Election.jsx';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="vote/:id" component={Vote} />
    <Route path="election" component={Election} />
  </Route>
);
