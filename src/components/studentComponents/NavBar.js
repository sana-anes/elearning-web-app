import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  
  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container">
          <div className="header-container d-flex align-items-center justify-content-between">
            <div className="logo">
              <h1 className="text-light">
                <a href="index.html">
                  <span>ENSI-learning</span>
                </a>
              </h1>
            </div>
            <nav id="navbar" className="navbar">
              <ul>
                <li>
                  <a className="nav-link scrollto active" href="#hero">
                    <NavLink className="nav-link" to="/home">
                      Home
                    </NavLink>
                  </a>
                </li>
                
                <li>
                  <a className="nav-link scrollto" href="/home#services">
                    All Courses
                  </a>
                </li>

              

                <li>
                  <a className="nav-link scrollto" href="/home#contact">
                    Contact
                  </a>
                </li>
                <li class="dropdown">
                
                    <a href="#"
                      className="nav-link getstarted scrollto "
                      to="/signin"
                      activeStyle={{
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                     AK <i class="bi bi-chevron-down"></i>
                    </a>
                    <ul>
                    <li><a href="#">
                       <NavLink className="nav-link" to="/student/myprofile">
                           My profile
                           </NavLink></a></li>
                    <li><a href="#">
                    <NavLink className="nav-link" to="/student/mycourses">
                        My courses
                        </NavLink>
                        </a></li>
                    

                    <li><a href="#">                    <NavLink className="nav-link" to="/home">
Sign out</NavLink> </a></li>
                    
                  </ul>

                 
                </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;