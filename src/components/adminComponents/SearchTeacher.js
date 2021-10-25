import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useHistory, useParams } from "react-router-dom";
import { deleteTeacher, getTeachers,searchTeacher } from "../../services/admin.service";
import {
  BrowserRouter as Router,
  useRouteMatch,
} from "react-router-dom";

function Search() {
  const c = useRouteMatch();
  const {teacherName}=useParams()
  const history = useHistory();
  const [clicked, setClicked] = useState(false);
  const [result, setResult] = useState(true);

  const [data, setData] = useState([
    {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      salary: "",
    },
  ]);

  //redirect
  const redirectTeachers = () => {
    history.push("/admin/teacherlist");
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
    //call to service
    console.log("one")
      searchTeacher(teacherName)
      .then((response)=>{
        
        if(response.length==0){ 
          setResult(false)}
       else{          
         
         setResult(true)
       }
       setData(response);
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  , [clicked]);

  return (
    <div id="layoutSidenav_content">
      <main>
        <div className="container-fluid">
          <br/>
              <h3>
                <a href="" onClick={redirectTeachers}>
                  <i className="fas fa-arrow-circle-left"></i>
                </a>
              </h3>
          <div className="row">
            <div className="col-lg-9">
              {" "}
              <h1 className="mt-4">Search for {teacherName}</h1>
            </div>
            <div className="col-lg-3">
              <br/>
            </div>
          </div>


          
          
          <br />
          <div className="card mb-4">
            <div className="card-header">
              <i className="fas fa-table mr-1" />
              Data
            </div>
            <div className="card-body">
              <div className="table-responsive">
                {result===true ? 
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
                      <th>Salary</th>
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
                      <th>Salary</th>
                      <th>Delete</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    {data.map(item => (
                      <tr>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.specialization}</td>
                        <td>{item.email}</td>
                        <td>{item.phonenumber}</td>
                        <td>{item.salary}</td>
                        <td>
                          <a href="#" onClick={() => handleDelete(item._id)}>
                            <i className="fa fa-trash" aria-hidden="true"></i>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                : <div>no results</div> }
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Search;
