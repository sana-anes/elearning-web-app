import React, { useEffect , useState}from 'react'
import { NavLink } from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import {getToken, logout} from  '../../actions/Auth.service'
import decode from 'jwt-decode'

function Navbar() {

  const [id,setId]=useState()

var decoded;
  useEffect(() => {

    const token =getToken();
  if (token){
  decoded = decode(token);
  setId(decoded.id)

  }

  }, []);



  const  handleLogout = () =>{
    logout()
  window.location='/'
  }

 


    return (
      <nav className="sb-topnav navbar navbar-expand  fixed-top">
   
      
      <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
       
      </form>
      <ul className="navbar-nav ml-auto ml-md-0">
        <li className="nav-item dropdown">
  
             <div className="row" style={{textColor:"white"}}>
             <NavLink to={`/teacher/profile`}>
              <Button
                      color="default"
                      className="float-lg-right"
                      startIcon={< PersonIcon/>}
                    >        
      
                   Account
                    </Button>
                    </NavLink>
                      <Button
                      color="default"
                      className="float-lg-right"
                      startIcon={< ExitToAppIcon/>}
                      onClick={handleLogout}
                    >        
                    Log Out
                    </Button> 
               
              </div>
             
            
               
        </li>
      </ul>
    </nav>
   
  
     
        
    )
}

export default Navbar
