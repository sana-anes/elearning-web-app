// import React , {useState, useEffect} from "react";
// import {useParams,useHistory} from "react-router-dom";
// import { deleteCourse, getCourse } from "../../services/admin.service";

// function ChaptersOfCourse() {
//   const history = useHistory();

//   let {coursename, id} = useParams();
//   const [clicked, setClicked] = useState(false);
//   const [data, setData] = useState([
//     {
//       firstname: "",
//       lastname: "",
//       email: "",
//       phonenumber: "",
//       salary: "",
//     },
//   ]);
//   const redirectToQuiz = (id,idQuiz) => {
//     history.push(`/admin/coursechapters/quiz/${id}/${idQuiz}`);
//   };

//   //DidMount behavior

//   useEffect(() => {
//     //call to service
//         console.log(coursename,id);
//         console.log(coursename);

//     getCourse(id)
//       .then((response) => {
//         setData(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [clicked]);

//   return (
 
//       <div id="layoutSidenav_content">
//         <main>
//           <div className="container-fluid">
//             {/* <h1 className="mt-4">Course : {   }</h1> */}
//             <h2 className="mt-4">Chapters of course : 
//              <span className="course">{"   " + coursename }</span>
//              </h2>
//             <br />
//             <br />
//             <div className="card mb-4">
//               <div className="card-header">
//                 <i className="fas fa-table mr-1" />
//                 Data
//               </div>
//               <div className="card-body">
//                 <div className="table-responsive">
//                   <table
//                     className="table table-bordered"
//                     id="dataTable"
//                     width="100%"
//                     cellSpacing={0}
//                   >
//                     <thead>
//                       <tr>
//                         <th>Chapter Title</th>
//                         <th>Chapter Time</th>
//                         <th>Chapter File</th>
//                         <th>Points</th>
//                         <th>Quiz</th>

//                       </tr>
//                     </thead>
//                     <tfoot>
//                       <tr>
//                       <th>Chapter Title</th>
//                         <th>Chapter Time</th>
//                         <th>Chapter File</th>
//                         <th>Points</th>
//                         <th>Quiz</th>
//                       </tr>
//                     </tfoot>
//                     <tbody>
                      
//                       {data.map((item, index) => (
//                         <tr>
//                           <td>{item.chapterTitle}</td>
//                           <td>{item.chapterTime} hours</td>
//                           <th>
//                             {/* {item.chapterFile} */}
//                             </th>
//                           <td>{item.points}</td>
//                           <td>
//                             <a href="" 
//                             onClick={() => redirectToQuiz(id,item._id)}
//                             >
//                             <i class="far fa-folder-open"></i>
//                             </a>
//                           </td>

                      
//                         </tr>
//                       ))}
                     
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
    
//   );
// }

// export default ChaptersOfCourse;
