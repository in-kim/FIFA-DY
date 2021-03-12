import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from "Routes/Home";
import Detail from "Routes/Detail";
import Board from "Routes/Board";
import BoardDetail from 'Routes/Board/view'
import BoardEdit from 'Routes/Board/edit'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail/:name/:id/" component={Detail} />
        <Route path="/board/:page/list" exact component={Board} />
        <Route path="/board/:page/detail/:contentId" exact component={BoardDetail} />
        <Route path="/board/:page/edit/:contentId" exact component={BoardEdit} />
        <Redirect from="*" to="/"/>
      </Switch>
    </>
  </Router>
)