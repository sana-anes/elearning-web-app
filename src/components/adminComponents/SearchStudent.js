import React, {useEffect,useState} from "react";
import { deleteStudent, SearchStudents } from "../../services/admin.service";
import { useFormik } from "formik";
import { useHistory, useParams } from "react-router";

function SearchStudent() {
    const history=useHistory()
    const {userName}= useParams()
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState([{},]);
  const [result, setResult] = useState(true);


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
  const redirectStudents = () => {
    history.push(`/admin/studentlist`);
  };
  //DidMount behavior

  useEffect(() => {
    //call to service
    SearchStudents(userName)
      .then((response) => {
          if(response.length==0){ 
            setResult(false)}
         else{          
           
           setResult(true)
         }
        setData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [clicked]);


  return (
  
      <div id="layoutSidenav_content">
        <main>
          <div className="container-fluid">
          <br/>
          <h3>
                <a href="" onClick={redirectStudents}>
                  <i className="fas fa-arrow-circle-left"></i>
                </a>
              </h3>
          <div className="row">
            <div class="col-lg-9">
              {" "}
              <h1 className="mt-4">Search for {userName}</h1>
            </div>
            <div className="col-lg-3">
              <br />
              
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
                {result===true ? 
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
                            <a href="#" onClick={() => handleDelete(item._id)}>
                              <i className="fa fa-trash" aria-hidden="true"></i>
                            </a>
                          </th>
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

export default SearchStudent;
