import React from 'react';
import {Router, Route, browserHistory, hashHistory} from 'react-router';
import Index from "./component/Index";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import CounterApp from "./CounterApp";
import TodoApp from "./component/TodoApp";


const router = (
  <Router history={hashHistory}>
    <Route path="/" component={Index}>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/counter" component={CounterApp}/>
      <Route path="/todo" component={TodoApp}/>
    </Route>
  </Router>
);

export default router;