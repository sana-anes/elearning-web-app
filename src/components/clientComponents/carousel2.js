import React,{useEffect,useState}from 'react'
import {getFile} from '../../actions/course.service'
import { VerifCourse,getCourse,addCourseToStudent } from '../../actions/student.service';
import decode from 'jwt-decode'
import {useHistory} from 'react-router-dom'
import { getToken } from '../../actions/Auth.service';

function Carousel2(props) {
  let history=useHistory();

  const token=getToken();
 
  if(token){  
    var decoded = decode(token);
    var idStudent=decoded.id;}
  
    const handlerClick=(idCourse)=>{
      if(token){
        console.log("9bal verif")
      VerifCourse(idStudent,idCourse)
      .then(response=>{console.log(response);
      console.log("then mt3 verif")
      console.log(response.data.coursesNotFinished)
        console.log(response.data.coursesNotFinished.length===0)
        if(response.data.coursesNotFinished.length===0){
         
          getCourse(idCourse)
          .then((response)=>{
            console.log(" getCourse ")
             console.log(response.data.image)
             console.log(response.data.chapters[0])
            let attributs={
              startDate:Date(),
              startChapterDate:Date(),
              title : response.data.title,
              topic: response.data.topic,
              estimatedTime: response.data.estimatedTime,
              language: response.data.language,
              image: response.data.image,
              id: response.data._id,
              chapter: response.data.chapters[0],
              chapterNumber : 1,
              numberOfChapters :  response.data.chapters.length,
              description: response.data.description,
              createdBy : response.data.createdBy,
            }
            console.log(attributs)
            console.log("debut add")
            addCourseToStudent(attributs,idStudent)
            .then(()=>{console.log("debut add")})
            .catch(()=>{console.log("errr add")})
          })
          .catch((error)=>{console.log("erreur")});

        }

        //window.location=`/student/course/${response.data.result._id}/${idCourse}`;
      })
     .catch(()=>{
            console.log("err veriff"); })
            history.push(`/student/course/${idStudent}/${idCourse}`);}
            else {      history.push(`/home/signin/${idCourse}`);}
          }
     
    
    const [firstimageState, setFirstImageState] = useState("");
    const [secondimageState, setSecondImageState] = useState("");
    const [thirdimageState, setThirdImageState] = useState("");
 function getImage1(path){
   getFile({
   path:path
  })
   .then((response) => {
     console.log(response.data);
     setFirstImageState(response.data)
   })
   .catch((error) => {
     console.log(error);
   });}
   /******/ 

   function getImage2(path){
    getFile({
    path:path
  
  
   })
    .then((response) => {
      console.log(response.data);
      setSecondImageState(response.data)
    })
    .catch((error) => {
      console.log(error);
    });}
       /******/ 
       function getImage3(path){
        getFile({
        path:path
      
      
       })
        .then((response) => {
          console.log(response.data);
          setThirdImageState(response.data)
        })
        .catch((error) => {
          console.log(error);
        });}
        useEffect(() => { 
            if(props.first){
              const path1=props.first.image.path;
            
    getImage1(path1)}

    if(props.second){
      const path2=props.second.image.path;
    
    getImage2(path2)}
    
    if(props.third){
      const path3=props.third.image.path;
    
    getImage3(path3)}
    
          },[])
    
    return (     
   
      <div className="row">

{props.first?
      <div className="col-md-4 mb-3">
          
      <div className="card">
           { 
                          firstimageState?(<img alt="100%x280" className="img-fluid" id="image" src={URL.createObjectURL(firstimageState)} width="350px" heigth="100px"/>):''
                }   
             
             
        <div className="card-body">

        <h4 className="card-title">{props.first.title}</h4>
          <p className="card-text topic">{props.first.topic}</p>
          <p className="card-text description">{props.first.description}</p>     
           <p className="card-text description2"><b className="text"> Estmated Time:</b><b>{props.first.estimatedTime}Hours</b><br/>
           <b className="text"> language:</b>{props.first.language}</p>


          <a href="#" className="btn btn-style-1 " onClick={()=>{handlerClick(props.first._id)}}>start</a>

        </div>
      </div>
    </div>:null}
         
{props.second?
    <div className="col-md-4 mb-3">
  
      <div className="card">
  {
                          secondimageState?(<img alt="100%x280" className="img-fluid" id="image" src={URL.createObjectURL(secondimageState)} width="350px" heigth="100px"/>):''

                }         
                      <div className="card-body">
        <h4 className="card-title">{props.second.title}</h4>
          <p className="card-text topic">{props.second.topic}</p>
          <p className="card-text description">{props.second.description}</p>     
           <p className="card-text description2"><b className="text"> Estmated Time:</b><b>{props.second.estimatedTime}Hours</b><br/>
           <b className="text"> language:</b>{props.second.language}</p>
           <a href="#" className="btn btn-style-1 " onClick={()=>{handlerClick(props.second._id)}}>start</a>

        </div>
      </div>
    </div>:null}
    
{props.third?
    <div className="col-md-4 mb-3">
   

      <div className="card">
{
                          thirdimageState?(<img alt="100%x280" className="img-fluid" id="image" src={URL.createObjectURL(thirdimageState)} width="350px" heigth="100px"/>):''

                }         
                       <div className="card-body">
        <h4 className="card-title">{props.third.title}</h4>
          <p className="card-text topic">{props.third.topic}</p>
          <p className="card-text description">{props.third.description}</p>     
           <p className="card-text description2"><b className="text"> Estmated Time:</b><b>{props.third.estimatedTime}Hours</b><br/>
           <b className="text"> language:</b>{props.third.language}</p>
           <a href="#" className="btn btn-style-1 " onClick={()=>{handlerClick(props.third._id)}} >start</a>


        </div>
      </div>
      </div>:null}
 
      </div>
   
    )
}

export default Carousel2