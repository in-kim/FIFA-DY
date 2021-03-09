import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from "Routes/Home";
import Detail from "Routes/Detail";
import Board from "Routes/Board";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail/:name/:id/" component={Detail} />
        <Route path="/board/:id" exact component={Board} />
        <Redirect from="*" to="/"/>
      </Switch>
    </>
  </Router>
)