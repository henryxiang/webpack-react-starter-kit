import React from "react"
import ReactDom from "react-dom"
import {Router, Route, browserHistory, hashHistory} from 'react-router';
import App from "./App";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";


// ReactDom.render(<App />, document.getElementById("app"))

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
    </Route>
  </Router>
);

ReactDom.render(routes, document.getElementById("app"));
