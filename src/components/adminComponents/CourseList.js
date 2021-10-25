import React , {useState, useEffect} from "react";
import { useFormik } from "formik";
import { deleteCourse, getCourses } from "../../services/admin.service";
import { useHistory } from "react-router-dom";  
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';

function CourseList() {
  const history = useHistory();
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState([{},]);
  const initialValues = {
    title: "",
  };
  let course ={title:""}

  function onSubmit(values) {
    course.title= values.title
     const c=values.title;
    window.location=`/admin/searchcourse/${c}`
  }
  const redirectToChapter = (coursename , id) => {
    history.push(`/admin/coursechapters/${coursename}/${id}`);
  };
  //Delete Teacher 
  const handleDelete = (id) => {
    //  call to service 
    deleteCourse(id)
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
    getCourses()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.log("error ............................");
        console.log(error);
      });
  }, [clicked]);
  const formik = useFormik({ initialValues, onSubmit});

  return (
   
      <div id="layoutSidenav_content">
        <main>
          <div className="container-fluid">
            {/* <h1 className="mt-4">Courses List</h1> */}
            <div className="row">
            <div class="col-lg-9">
              {" "}
              <h1 className="mt-4">Courses List</h1>
            </div>
            <div className="col-lg-3">
              <br />
              <form 
                    className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0" 
                    onSubmit={formik.handleSubmit}
                    >
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    name="title"
                    placeholder="Search By Title..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                    value={formik.values.title}
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
                        <th>Title</th>
                        <th>Topic</th>
                        <th>Language</th>
                        <th>Estimated Time</th>
                        <th>View</th>
                        <th>Delete</th>

                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>Title</th>
                        <th>Topic</th>
                        <th>Language</th>
                        <th>Estimated Time</th>
                        <th>View</th>
                        <th>Delete</th>

                      </tr>
                    </tfoot>
                    <tbody>
                      
                      {data.map((item, index) => (
                        <tr>
                          <td>{item.title}</td>
                          <td>{item.topic}</td>
                          <td>{item.language}</td>
                          <td>{item.estimatedTime} hours</td>
                          <td>
                            {/* <h4><a href="" 
                            onClick={() => redirectToChapter(item.title , item._id)}
                            >
                            <i class="far fa-folder-open"></i>
                            </a></h4> */}
                                              <Button variant="contained"    
                                              onClick={() => redirectToChapter(item.title , item._id)} 
                                              style={{marginRight:"10px" }}>
                      <VisibilityIcon />     
                  </Button>
                          </td>

                          <td>
                            {/* <h4>
                            <a href="#" onClick={() => handleDelete(item._id)}>
                              <i className="fa fa-trash" aria-hidden="true"></i>
                            </a></h4> */}
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

export default CourseList;