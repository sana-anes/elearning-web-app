import React, {useEffect,useState} from "react";
import { deleteStudent, getStudents } from "../../services/admin.service";
import { useFormik } from "formik";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

function StudentList() {
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState([
    {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      salary: "",
    },
  ]);
  const initialValues = {
    userName: "",
  };
  let student={}
  function onSubmit(values) {
    student.firstname= values.userName
    const c=values.userName;
   window.location=`/admin/searchstudent/${c}`
 }

  //Delete Student 
  const handleDelete = (id) => {
    //  call to service 
    deleteStudent(id)
      .then(() => {
        console.log("Student deleted");
      })
      .catch((error) => {
        console.log(error);
      });
    setClicked(!clicked);
  };

  //DidMount behavior

  useEffect(() => {
    //call to service
    getStudents()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [clicked]);
  const formik = useFormik({ initialValues, onSubmit});


  return (
  
      <div id="layoutSidenav_content">
        <main>
          <div className="container-fluid">
          <div className="row">
            <div class="col-lg-9">
              {" "}
              <h1 className="mt-4">Students List</h1>
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
                    name="userName"
                    placeholder="Search By Name..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    value={formik.values.userName}
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
                        <th>Student Name</th>
                        <th>E-mail</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>Student Name</th>
                        <th>E-mail</th>
                        <th>Delete</th>
                      </tr>
                    </tfoot>
                    <tbody>
                    {data.map((item, index) => (
                        <tr>
                          <td>{item.userName}</td>
                          <td>{item.email}</td>
                          <th>
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

                          </th>
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

export default StudentList;
