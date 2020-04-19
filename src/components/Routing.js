import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login.js";
import UrlQuery from "./UrlQuery";
import QueryFinished from "./QueryFinished";
import NoMatch from "./NoMatch";

export default function Routing() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/UrlQuery" component={UrlQuery} />
          <Route path="/QueryFinished" component={QueryFinished} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </>
  );
}
