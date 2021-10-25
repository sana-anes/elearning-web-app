import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getInfo } from "../../services/admin.service";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {userService} from '../../services/auth.header'


function Profile() {

  const history = useHistory();

  const redirectToAdd = (id, s) => {
    if (s=="Name"){
      history.push(`/admin/editname/${id}/${s}`);

    }
    else if(s=="Password"){
      history.push(`/admin/editpassword/${id}/${s}`);
    }
 
  };

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [id, setid] = useState("");

  useEffect(() => {
    getInfo()
      .then((response) => {
        console.log(response);
        setFirstname(response.firstname);
        setLastname(response.lastname);
        setEmail(response.email);
        setid(response._id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
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
                    <h4>{firstname + " " + lastname}</h4>
                    <h5>Administrator of ENSI e-learning website</h5>
                  </div>
                  <div className="col-lg-4">
                    <div className="row">
                    <Button
                      variant="contained"
                      color="default"
                      className="float-lg-right"
                      startIcon={<EditIcon />}
                      onClick={() => redirectToAdd(id, "Password")}
                    >        
                    Edit Password
                    </Button>
                    </div>
                    <br/>
                    <div className="row">
                    <Button
                      variant="contained"
                      color="default"
                      className="float-lg-right"
                      startIcon={<EditIcon />}
                      onClick={() => redirectToAdd(id, "Name")}
                    >        
                    Edit Name
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
                        {firstname + " "} {lastname}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
