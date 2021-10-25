import React from "react";
import Signup from "../components/clientComponents/Signup";
import logo from "../img/bgg.jpg"
import { useHistory,useRouteMatch } from "react-router-dom";

function SignUpPage() {
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
        <Signup/>
            {/* <Route path="/forgotpassword" exact component={ForgotPassWord} /> */}
          
      </div>
</div> 

     
    </div>
  );
}
export default SignUpPage;