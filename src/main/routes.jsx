import React from "react";
import { Router, Route, IndexRoute, Redirect, hashHistory } from "react-router";

import AuthOrApp from "./authOrApp";
import Dashboard from "../dashboard/dashboard";
import BillingCycle from "../billingCycle/billingCycle";

export default function routes(props) {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={AuthOrApp}>
        <IndexRoute component={Dashboard} />
        <Route path="billingCycles" component={BillingCycle} />
      </Route>
      <Redirect path="*" to="/" />
    </Router>
  );
}
