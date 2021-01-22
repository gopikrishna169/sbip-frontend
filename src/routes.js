import {
  BrowserRouter as Router,
  Route, Redirect, Switch
} from 'react-router-dom';
import React from 'react';

import LandingPage from './pages/LandingPage/LandingPage.Container'

const routes = () => (
  <Router>
    <Route exact path="/" component={LandingPage} />
  </Router>
)
export default routes;