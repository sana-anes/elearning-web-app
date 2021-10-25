import React  from 'react'
import {
  BrowserRouter as Router,
  useRouteMatch,
  Route,
  Switch,
} from "react-router-dom";
import AdminAddTeacher from "../pages/Admin-AddTeacher";
import AdminTeacher from "../pages/AdminTeacher";
import AdminCourseList from "../pages/Admin-CourseList";
import AdminProfile from '../pages/AdminProfile';
import AdminStudent from '../pages/Admin-Student';
import AdminNavBar from '../components/adminComponents/AdminNavBar';
import SideNav from '../components/adminComponents/SideNav';
import EditPassword from '../components/adminComponents/EditPassword';
import {userService} from '../services/auth.header';
import Page401 from '../components/adminComponents/Page401';
import ChaptersOfCourse from '../components/adminComponents/CourseChapters';
import EditName from '../components/adminComponents/EditName';
import SearchTeacher from '../components/adminComponents/SearchTeacher';
import SearchCourse from '../components/adminComponents/SearchCourse';
import SearchStudent from '../components/adminComponents/SearchStudent';
import ViewCourse from '../components/adminComponents/ViewCourse';
import ClientHome from "../pages/ClientHome";


function Admin() {
    const { url } = useRouteMatch();
    let token = userService.getToken()  
    if(!token ||  userService.isTokenExpired(token)==true){
      return <ClientHome/>;
    
  }
      return (
 
            <Router>
              <div className="sb-nav-fixed"> 
        <AdminNavBar />

      <div id="layoutSidenav" >
          <SideNav />
              <Switch>     
                <Route path={[`${url}`,`${url}/profile`]} exact component={AdminProfile } />                                                                                                      
                <Route path={`${url}/teacherlist`} exact component={AdminTeacher } />
                <Route path={`${url}/addteacher`} exact component={AdminAddTeacher } />
                <Route path={`${url}/courselist`} exact component={AdminCourseList } />
                <Route path={`${url}/studentlist`} exact component={AdminStudent } />
                <Route path={`${url}/profile`} exact component={AdminProfile } />                                                                           
                <Route path={`${url}/editname/:id/:ch`} exact component={EditName } />
                <Route path={`${url}/searchforteacher/:teacherName`} exact component={SearchTeacher } />
                <Route path={`${url}/searchcourse/:courseTitle`} exact component={SearchCourse } />
                <Route path={`${url}/searchstudent/:userName`} exact component={SearchStudent } />
                <Route path={`${url}/editpassword/:id/:ch`} exact component={EditPassword } />
                <Route path={`${url}/coursechapters/:coursename/:id`}  component={ViewCourse } /> 
                {/* affichage de quiz chez l'admin  */}
                {/* <Route path={`${url}/coursechapters/quiz/:id`}  component={ChaptersOfCourse } /> */}  
              </Switch></div>
            </div>
            </Router>
            
      
);
    // }
    
}

export default Admin


// import React, { Component ,  } from 'react'
// import {
//   BrowserRouter as Router,
//   useRouteMatch,
//   Route,
//   Switch,
// } from "react-router-dom";
// import AdminAddTeacher from "../pages/Admin-AddTeacher";
// import AdminTeacher from "../pages/AdminTeacher";
// import AdminCourseList from "../pages/Admin-CourseList";
// import AdminProfile from '../pages/AdminProfile';
// import AdminStudent from '../pages/Admin-Student';
// import AdminNavBar from '../components/adminComponents/AdminNavBar';
// import SideNav from '../components/adminComponents/SideNav';
// import EditProfile from '../components/adminComponents/EditProfile';
// import EditPassword from '../components/adminComponents/EditPassword';
// import {userService} from '../services/auth.header'


// export default class Admin extends Component {
//   constructor() {
//     super();
//     this.state = { counter: 0 };

//   }

//   componentDidMount(){
//     let token = userService.getToken();
//     if(!token){
//           window.location='/nonauthentifie'
//       } 
//   }
//   render= ({ match: { url } }) => {
//     return (
//       <>
//         <div className="row">
//         <AdminNavBar />
//         </div>
//         <div className="row">
//         <div className="col-lg-2">
//           <SideNav />
//         </div>
//         <div className="col-lg-10">
//             <Router>
            
//               <Switch>
//                 <Route path={`${url}/teacherlist`} exact component={AdminTeacher } />
//                 <Route path={`${url}/addteacher`} exact component={AdminAddTeacher } />
//                 <Route path={`${url}/courselist`} exact component={AdminCourseList } />
//                 <Route path={`${url}/studentlist`} exact component={AdminStudent } />
//                 <Route path={`${url}/profile`} exact component={AdminProfile } />
//                 <Route path={`${url}/editprofile`} exact component={EditProfile } />
//                 <Route path={`${url}/editpassword`} exact component={EditPassword } />
//               </Switch>
//             </Router>
//             </div>
//             </div>
//         </>
//     )
//   }
// }
