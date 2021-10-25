
import React , {useState, useEffect} from "react";
import { deleteCourse, searchCourse } from "../../services/admin.service";
import { useHistory, useParams } from "react-router-dom";  


function SearchCourse() {
    const {courseTitle}=useParams()
  const history = useHistory();
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState([{},]);
  const [result, setResult] = useState(true);

  const redirectCourses = () => {
    history.push(`/admin/courselist`);
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
    searchCourse(courseTitle)
      .then((response) => {
          console.log(response)
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
                <a href="" onClick={redirectCourses}>
                  <i className="fas fa-arrow-circle-left"></i>
                </a>
              </h3>
          <h1 className="mt-4">Search for {courseTitle}</h1>

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
                        <th>Title</th>
                        <th>Topic</th>
                        <th>Created By</th>
                        <th>Language</th>
                        <th>Estimated Time</th>
                        <th>Chapters</th>
                        <th>Delete</th>

                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>Title</th>
                        <th>Topic</th>
                        <th>Created By</th>
                        <th>Language</th>
                        <th>Estimated Time</th>
                        <th>Chapters</th>
                        <th>Delete</th>

                      </tr>
                    </tfoot>
                    <tbody>
                      
                      {data.map((item, index) => (
                        <tr>
                          <td>{item.title}</td>
                          <td>{item.topic}</td>
                          <td>{item.createdBy}</td>
                          <td>{item.language}</td>
                          <td>{item.estimatedTime} hours</td>
                          <td>
                            <a href="" 
                            onClick={() => redirectCourses(item.title , item._id)}
                            >
                            <i class="far fa-folder-open"></i>
                            </a>
                          </td>

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

export default SearchCourse;
