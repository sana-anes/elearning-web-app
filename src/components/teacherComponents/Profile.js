import React, { useEffect, useState } from "react";
import { getInfo } from "../../services/admin.service";
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import {  getTeacher } from "../../services/teacher.service";
import {withRouter ,useHistory,NavLink,useParams} from 'react-router-dom';
import {getToken} from  '../../actions/Auth.service'
import decode from 'jwt-decode'



function Profile() { 
  const [id,setId]=useState()
  const [data, setData] = useState({} );

 


//  let{id}=useParams()

   const history=useHistory();
  useEffect(() => {
    const token =getToken();
    if (token){
    const decoded = decode(token);
    setId(decoded.id)
  
    
    getTeacher(decoded.id)
      .then((response) => {
        setData({
          firstname: response.response.firstname,
          lastname: response.response.lastname,
          specialization: response.response.specialization,
          phonenumber: response.response.phonenumber,
          email:response.response.email,
          password:response.response.password,

        });
    
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });

    }

  }, []);

 

  

  // function onSubmit(values){
  //   var pass;
  //  if(values.currentpassword==="") pass=data.password
  //  else pass=values.currentpassword
  //     const update={
  //     userId:iduser,
  //     firstname: values.firstname,
  //      lastname: values.lastname,
  //     specialization: values.specialization,
  //     phonenumber: values.phonenumber,
  //     email: values.email,
  //     password: pass
  //         }
  //     updateTeacher(update)
  //     .then((response) => {
  //       history.push('/teacher/profile')           
  //     })
  //     .catch((error) => {
  //         console.log(error);
  //       });
  
  // }
  const redirectToAdd = (id, s) => {
    if (s=="Name"){
      history.push(`/admin/editname/${id}/${s}`);

    }
    else if(s=="Password"){
      history.push(`/admin/editpassword/${id}/${s}`);
    }
 
  };

  return (

    <div id="layoutSidenav_content">
    <div className="container emp-profile">
      <form method="post">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-2">
            <div className="">
              <img
                src="../../../assets/img/admin.png"
                alt="admin picture"
                className="adminpic"
              />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="profile-head">
              <div className="row">
                <div className="col-lg-8">
                  <h4>{data.firstname + " " + data.lastname}</h4>
                  <h5>{`Specialization : ${data.specialization}`}</h5>
                </div>
                <div className="col-lg-4">
               
                <br/>
                <div className="row">
                  <Button
                    variant="contained"
                    color="default"
                    className="float-lg-right"
                    startIcon={<EditIcon />}
                    onClick={() => history.push(`/teacher/Profile/editProfile/${id}`)}
                  >        
                  Edit Profile
                  </Button>
                  </div>
                  <br/>

                  <div className="row">
                  <Button
                    variant="contained"
                    color="default"
                    className="float-lg-right"
                    startIcon={<EditIcon />}
                    onClick={() => history.push(`/teacher/Profile/editPassword/${id}`)}
                  >        
                  Edit Password
                  </Button>
                  </div>
               
                 
                </div>
              </div>

              <br />
              <br />
              <br />
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-8">
            <div className="tab-content profile-tab" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label>Name</label>
                  </div>
                  <div className="col-md-6">
                    <p>
                      {data.firstname + " "} {data.lastname}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Email</label>
                  </div>
                  <div className="col-md-6">
                    <p>{data.email}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Phone</label>
                  </div>
                  <div className="col-md-6">
                    <p>{data.phonenumber}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>



























//     <div id="layoutSidenav_content">
//     <main >
  
//       <div className=" profile">
//       <br/><br/>

//         <form id="msform"   >
//             <fieldset>
//             <h2 className="fs-title">PROFILE</h2>

//             <div >
//           <table className="profile-data">
//            <tr> <td>First Name :</td>    <td>{data.firstname}</td> </tr>
//            <tr> <td>Last Name :</td>    <td>{data.lastname}</td> </tr>
//            <tr> <td>Specialization :</td>    <td>{data.specialization}</td> </tr>
//            <tr> <td>Phone :</td>    <td>{data.phonenumber}</td> </tr>
//            <tr> <td>email :</td>    <td>{data.email}</td> </tr>
//            </table>
//                 </div>
//                 <br/>
// <div style={{flex:'row'}}>
// <div className="update-btn" >  
// <NavLink to={`/teacher/profile/editProfile/${id}`}>
//               change profile
//                     </NavLink> </div>
// <div  className="update-btn" >
//    <NavLink to={`/teacher/profile/editPassword/${id}`}>
//               change password
//                     </NavLink> 
//                     </div>
// </div>  
       
//                 </fieldset>

//         </form>
      
//         </div>  
       
//   <div>
       
  
//             </div>
//     </main>
//     </div>
   );
}

export default withRouter(Profile)
