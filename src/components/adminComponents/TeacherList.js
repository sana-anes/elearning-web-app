import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import { deleteTeacher, getTeachers } from "../../services/admin.service";
import { useRouteMatch } from "react-router-dom";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

function TeacherList() {
  const c = useRouteMatch();
  const history = useHistory();
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState([
    {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      
    },
  ]);

  const initialValues = {
    firstname: "",
  };
  let teacher ={firstname:""}

  function onSubmit(values) {
     teacher.firstname= values.firstname
     const c=values.firstname;
    window.location=`/admin/searchforteacher/${c}`
  }

  //redirect
  const redirectToAdd = () => {
    history.push("/admin/addteacher");
  };

  //Delete Teacher
  const handleDelete = (id) => {
    //  call to service
    deleteTeacher(id)
      .then(() => {
        console.log("teacher deleted");
      })
      .catch((error) => {
        console.log(error);
      });
    setClicked(!clicked);
  };

  //DidMount behavior

  useEffect(() => {

      getTeachers()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.log(error);
      });}
    
  , [clicked]);

  const formik = useFormik({ initialValues, onSubmit});

  return (
    <div id="layoutSidenav_content">
      <main>
        <div className="container-fluid">
          <div className="row">
            <div class="col-lg-9">
              {" "}
              <h1 className="mt-4">Teachers List</h1>
            </div>
            <div className="col-lg-3">
              <br />
              <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0" 
                    onSubmit={formik.handleSubmit}
                    >
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    name="firstname"
                    placeholder="Search By Name..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    value={formik.values.firstname}
                  onChange={formik.handleChange}
                  />
                  <div className="input-group-append">
                    <button className="btn btn-secondary" type="submit"
                  name="submit">
                      <i className="fas fa-search" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* <button type="button" onClick={redirectToAdd} class="btn" id="kk">
            Add Teacher
          </button> */}
          <Button
                      variant="contained"
                      color="default"
                      className="float-lg-right"
                      startIcon={<AddIcon />}
                      onClick={redirectToAdd}
                    >        
                    Add Teacher
                    </Button>
          <br />
          <br />
          <div className="card mb-4">
            <div className="card-header">
              <i className="fas fa-table mr-1" />
              Data
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellSpacing={0}
                >
                  <thead>
                    <tr>
                      <th>FirstName</th>
                      <th>LastName</th>
                      <th>specialization</th>
                      <th>E-mail</th>
                      <th>Phone number</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>FirstName</th>
                      <th>LastName</th>
                      <th>specialization</th>
                      <th>E-mail</th>
                      <th>Phone number</th>
                      <th>Delete</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    {data.map((item, index) => (
                      <tr>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.specialization}</td>
                        <td>{item.email}</td>
                        <td>{item.phonenumber}</td>
                        <td>
                          {/* <h3>
                          <a href="#" onClick={() => handleDelete(item._id)}>
                            <i className="fa fa-trash" aria-hidden="true"></i>
                          </a></h3> */}
                          <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(item._id)}
                  >
                  <DeleteIcon />
                  </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TeacherList;
