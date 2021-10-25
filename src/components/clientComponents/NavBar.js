import React,{useEffect, useState } from "react";
import { NavLink, useParams} from "react-router-dom";
import {getInfo} from '../../actions/student.service';
import {getToken, logout} from  '../../actions/Auth.service'
import decode from 'jwt-decode'
function NavBar(props) {
  
  const token =getToken();
  if (token){
 var decoded = decode(token);
 console.log("kakak");
 console.log(decoded.userName);}
 

 if(props.auth){
  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container">
          <div className="header-container d-flex align-items-center justify-content-between">
            <div className="logo">
              <h1 className="text-light">
                <a href="/">
                  <span>ENSI-learning</span>
                </a>
              </h1>
            </div>
            <nav id="navbar" className="navbar">
              <ul>
               
             
                <li>
                  <a className="nav-link scrollto" href="/student/home#portfolio">
                Courses

                  </a>
                </li>
                <li>
                    <li class="dropdown">
                
                <a href="#"
                  className="nav-link getstarted scrollto "
                  to="/signin"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                 <b class="bi bi-chevron-down">{decoded.userName}</b>
                </a>
                <ul>
                <li><a href="#">
                   <NavLink className="nav-link" to={`/student/myprofile/${decoded.id}`}>
                       Account
                       </NavLink></a></li>
                <li><a href="#">
                <NavLink className="nav-link" to={`/student/mycourses/${decoded.id}`}>
                    My courses
                    </NavLink>
                    </a></li>

                <li><a href="/" onClick={logout} >                 
                <div className="nav-link" >
                      Log out
                      </div></a>
                      </li>
                
              </ul>

              </li>  
                
         
                     
                    </li>      
       
              </ul>
              {/* <i className="bi bi-list mobile-nav-toggle" /> */}
            </nav>
          </div>
        </div>
      </header>
    </>
  );}
  else { return(
    <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container">
          <div className="header-container d-flex align-items-center justify-content-between">
            <div className="logo">
              <h1 className="text-light">
                <a href="/">
                  <span>ENSI-learning</span>
                </a>
              </h1>
            </div>
            <nav id="navbar" className="navbar">
              <ul>
                <li>
                <NavLink
                      className="nav-link getstarted scrollto"
                      to="/signin"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      Sign in
                    </NavLink>
                    </li>
              </ul>
              {/* <i className="bi bi-list mobile-nav-toggle" /> */}
            </nav>
          </div>
        </div>
      </header>
    
  );
  }
}

export default NavBar;