import React, { useEffect , useState}from 'react'
import {getToken} from  '../../actions/Auth.service'
import decode from 'jwt-decode'

function Sidebar() {
  const [name,setName]=useState()
  const [id,setId]=useState()

var decoded;
  useEffect(() => {

    const token =getToken();
  if (token){
  decoded = decode(token);
  setName(decoded.userName)
  setId(decoded.id)


  }

  }, []);
 




    return (
    
  <div id="layoutSidenav_nav"  >
     
  <nav className="sb-sidenav accordion sb-sidenav-light " id="sidenavAccordion" >
  <div className="navbar-brand" >
Dashboard
</div>
<br/>
      <div className="sb-sidenav-menu ">
        <div className="nav">
      
          <div className="nav-link sb-sidenav-menu-heading"  >
     
            <div className="sb-nav-link-icon">
              <i className="fas fa-user-shield" />
            </div>
            {name}
          </div >
          <div className="sb-sidenav-menu-heading">Courses</div>
        
            
            <a className="nav-link" href={`/teacher/courses`}>
              <div className="sb-nav-link-icon">
                <i className="fas fa-list" />
              </div>
            List of Courses
                             </a>
            
       
          <div className="sb-sidenav-menu-heading">Students</div>
            <a className="nav-link" href={`/teacher/StudentsList`}>
              <div className="sb-nav-link-icon">
                <i className="fas fa-list" />
              </div>
            List of Students
                             </a>
          
          
          
      
        </div>
      </div>
      
                  
                 
      </nav></div>
     
    )
}

export default Sidebar
