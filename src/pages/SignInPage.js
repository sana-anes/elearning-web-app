import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from "../components/clientComponents/Signin";
import Signup from "../components/clientComponents/Signup";
import ForgotPassWord from "../components/clientComponents/ForgotPassWord";
import logo from "../img/bgg.jpg"
import { useHistory,useRouteMatch } from "react-router-dom";

function SignPage() {

    const history = useHistory();
    function redirectToAdminProfile(){
      history.push("/");
      
    }
  return (
  <div>
      <div class="card bg-dark text-white " >
      <img src={logo} className="card-img bg" alt="Beauty" /> 
      <div class="card-img-overlay  ">
      <a href="" onClick={redirectToAdminProfile} style={{color:'#2a6480'}}>
                        <i className="fas fa-arrow-circle-left"></i> back Home
                        </a>
          <Signin/>
              {/* <Route path="/forgotpassword" exact component={ForgotPassWord} /> */}
            
        </div>
  </div> 

       
      </div>
    
  );
}

export default SignPage;
