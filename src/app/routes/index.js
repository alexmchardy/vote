import React from 'react';
import { IndexRoute, Route } from 'react-router';
import Layout from './Layout';
import Home from './Home';
import Vote from './Vote';
import Election from './Election';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="vote/:id" component={Vote} />
    <Route path="election" component={Election} />
  </Route>
);
