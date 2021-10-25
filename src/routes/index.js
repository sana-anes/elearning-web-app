import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Teacher from "./Teacher";
import Admin from "./Admin";
import Student from  './student'
import ClientRoute from  './Client'

function Routes() {
  return (
    <Router>
      <Switch>
        {/* <Route path="" exact component={ClientRoute} /> */}
        <Route path="/teacher"   component={Teacher} />
        <Route path="/admin"  component={Admin} />
        <Route path="/student"   component={Student} />
         <Route path="/"   component={ClientRoute} /> 



      </Switch>
    </Router>
  );
}

export default Routes;