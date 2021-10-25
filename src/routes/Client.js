import React from "react";
import {BrowserRouter as Router ,Switch,Route, useRouteMatch}  from "react-router-dom";
import SignUpPage from "../pages/SignUpPage"
import SignInPage from "../pages/SignInPage"
import ClientHome from "../pages/ClientHome";


function ClientRoute() {
  
   const { url } = useRouteMatch();
 
  return (<Router>
    
      <Switch>
   
      <Route path={`${url}signin`} exact component={SignInPage} />
      <Route path={`${url}signup`} exact component={SignUpPage} />
      <Route path={`${url}`} exact component={ClientHome} />
      </Switch>

   </Router> )  
  
  
  
}

export default ClientRoute;