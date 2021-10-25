import React from "react";
import {userService} from '../../services/auth.header'
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import { NavLink } from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
function AdminNavBar() {

  return (
    <div>
         <nav className="sb-topnav navbar navbar-expand fixed-top">
    
      
      <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
       
      </form>
      <ul className="navbar-nav ml-auto ml-md-0">
        <li className="nav-item dropdown">
          
        <div className="row" style={{textColor:"white"}}>
             <NavLink to={`/admin/profile`}>
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
                      onClick={()=>{userService.logout ();  window.location='/';}
                    }
                    >        
                    Log Out
                    </Button> 
               
              </div>

     

        </li>
      </ul>
    </nav>
   
 
     </div>
  
  
  );
}

export default AdminNavBar;
