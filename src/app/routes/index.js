import React from 'react';
import { IndexRoute, Route } from 'react-router';
import Layout from './Layout';
import Home from './Home';
import Ballot from './Ballot';
import Election from './Election';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="ballot/:electionId" component={Ballot} />
    <Route path="election" component={Election} />
  </Route>
);
