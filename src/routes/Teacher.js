import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import NavBar from "../components/teacherComponents/Navbar";
import SideBar from "../components/teacherComponents/Sidebar";
import Profile from "../components/teacherComponents/Profile";
import Courses from "../components/teacherComponents/Courses";
import AddCourse from "../components/teacherComponents/AddCourse1";
import ViewCourse from "../components/teacherComponents/ViewCourse";
import editCourse from "../components/teacherComponents/EditCourse";
import StudentsList from "../components/teacherComponents/StudentsList";

import EditData from "../components/teacherComponents/EditProfile";
import EditPass from "../components/teacherComponents/EditPassword";


import ClientHome from "../pages/ClientHome";
import {isTokenExpired,getToken} from '../actions/Auth.service'

function Teacher() {
  let url = useRouteMatch();
  // let token = getToken()  
  // if(!token ||  isTokenExpired(token)==true){
  //   return <ClientHome/>;
  // }
      return(
    <Router  >
    <div className="sb-nav-fixed"> 
            <NavBar  />   

    
          <div id="layoutSidenav" >
              <SideBar />
             
                <Switch>
                  {/* <Route path={`${url}`}   component={CourseList} /> */}
                  {/* <Route path={`${url.path}/courseList`} exact component={CourseList} /> */}
                  <Route path={`${url.path}/profile`}  exact component={Profile} />
                  <Route path={`${url.path}/Profile/editProfile/:id`}  exact component={EditData} />
                  <Route path={`${url.path}/Profile/editPassword/:id`}  exact component={EditPass} />
    
                  <Route path={`${url.path}/addCourse/:id`}  exact component={AddCourse} />
                  <Route path={`${url.path}/courses`}  exact component={Courses} />
                  <Route path={`${url.path}/studentsList`}  exact component={StudentsList} />
                  <Route path={`${url.path}/viewCourse/:idC`}  exact component={ViewCourse} />
                  <Route path={`${url.path}/editCourse/:idC`}  exact component={editCourse} />
    
    
    
                </Switch>
              
            </div>
        </div>
        </Router>
    
       ) }


export default Teacher;
