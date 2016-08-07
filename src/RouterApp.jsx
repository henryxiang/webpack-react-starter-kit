import React from 'react';
import {Router, Route, browserHistory, hashHistory} from 'react-router';
import Index from "./component/Index";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={Index}>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
    </Route>
  </Router>
);

export default router;