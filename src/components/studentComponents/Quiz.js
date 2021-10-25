import React ,{useEffect, useState} from 'react'
import { getFile } from "../../actions/course.service";
import {  useParams,NavLink,withRouter} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AssignmentIcon from '@material-ui/icons/Assignment';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

import {useHistory} from 'react-router-dom'

import { Typography } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';


import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Divider from '@material-ui/core/Divider';
import { getNomchapter,ModifyCourseStudent,getCourse,updateScore,VerifCourse,addCourseFinishedToStudent} from '../../actions/student.service';



function Quiz(props){
    let history=useHistory();

    let {idCourse,idStudent}= useParams()
 const [clicked,setClicked]=useState(false)
 const [scorre,setScorre]=useState()

  const {questions ,total,score,numberOfChapters,chapterNumber}=props;
  const list=[]
  const listAK=[]
  const listP=[]
//**********************************nextChapter******************************************
  const handlerClick=()=> {
    console.log("handlerclick");
    console.log(chapterNumber);
    var attributs;
    getCourse(idCourse)
    .then((response)=>{
      console.log(" getCourse ")
       console.log(response.data.image)
       console.log(response.data.chapters.length)
       console.log(chapterNumber)
       console.log(numberOfChapters);   
       let num=chapterNumber+1;
       attributs={
        startChapterDate:Date(),
        title : response.data.title,
        topic: response.data.topic,
        estimatedTime: response.data.estimatedTime,
        language: response.data.language,
        image: response.data.image,
        id: response.data._id,
        chapterNumber :num ,
        chapter: response.data.chapters[chapterNumber],
        description: response.data.description,
        createdBy : response.data.createdBy,
      }
       VerifCourse(idStudent,idCourse)
       .then((response)=>{console.log(response.data.coursesNotFinished[0].score);
      setScorre(response.data.coursesNotFinished[0].score);
    attributs={...attributs,score:response.data.coursesNotFinished[0].score,
    }
      console.log(attributs)
      console.log("debut add")
      ModifyCourseStudent(attributs,idStudent)
      .then(()=>{console.log("debut add");    
        // history.push(`/student/course/${idStudent}/${idCourse}`);
    }
      )
      .catch(()=>{console.log("errr add")})


  })})
  .catch(()=>{console.log("khraj")})}
//}

useEffect(()=>{},[clicked])
//*********************************submit loul*****************************
  const handleClick=()=> {
    console.log(score);
    console.log(scorre);
    
    var sco=0;
    for(let i=0;i<listP.length;i++){sco+=listP[i]}
    console.log(sco)
    var scoree = parseInt(score)
    setClicked(!clicked)
    updateScore(sco,scoree,idStudent,idCourse)
  .then(()=>{console.log("debut modification");setScorre(scoree+sco);})
  .catch(()=>{console.log("errr modif")})
 // window.location.reload();

  }
  //*********************************************submit theny********************************
  const handleClick2=()=> {
    var sco=0;
    for(let i=0;i<listP.length;i++){sco+=listP[i]}
    console.log(sco)
    var scoree = parseInt(score)
    setClicked(!clicked)
    updateScore(sco,scoree,idStudent,idCourse)
  .then(()=>{console.log("debut modification")})
  .catch(()=>{console.log("errr modif")})
 // window.location.reload();
VerifCourse(idStudent,idCourse)
 .then((response)=>{console.log(response.data.coursesNotFinished[0].score);
setScorre(response.data.coursesNotFinished[0].score);
})
  .catch(()=>{console.log("errr modif")})

  }
  //*************************Finish******************
   const handleClickF=()=>{
    console.log(" Hand111")

      VerifCourse(idStudent,idCourse)
        .then((response)=>{
          console.log(" Hand ")
           console.log(response.data)
           console.log(response.data.coursesNotFinished);
          let attributs={
             startDate:response.data.coursesNotFinished[0].startDate,
             title : response.data.coursesNotFinished[0].title,
             topic: response.data.coursesNotFinished[0].topic,
           estimatedTime: response.data.coursesNotFinished[0].estimatedTime,
            language: response.data.coursesNotFinished[0].language,
           image: response.data.coursesNotFinished[0].image,
          id: response.data._id,
          }
          console.log(attributs)
          console.log("debut add")
          addCourseFinishedToStudent(attributs,idStudent)
           .then(()=>{console.log("debut add")})
          .catch(()=>{console.log("errr add")})
         })
         .catch((error)=>{console.log("erreur")});

      }

     // window.location=`/student/course/${response.data.result._id}/${idCourse}`;
    
        
         
        


  return (<>
    <div>

{ questions.map((ques, i)=> (
  
  <div key={i}>
               
                        <div style={{marginBottom: "9px"}}>
     
   <Accordion   expanded={true}>

     <AccordionSummary   aria-controls="panel1c-content"  id="panel1c-header" >
     <div >
     <Typography gutterBottom variant="h5" component="h2">
         Question {i+1} / {total} </Typography>   
     </div>
    
     </AccordionSummary>
 
   
   <AccordionDetails >
  
   <div style={{display: 'flex',flexDirection:'column', alignItems:'flex-start', marginLeft: '15px', marginTop:'-15px'}}>
       <div style={{display: 'flex',flexDirection:'row', alignItems:'flex-start', marginLeft:'-13px'}}>
       
       <Typography component="h3">
       {ques.questionText}
          </Typography>  
            
      </div>  
      <br/>
         
     
         <div style={{width: '100%'}}>
         {ques.options.map((op, j)=>(
           
          <div key={j} style={{display:'flex', flexDirection:'row', marginLeft:'-13px'}}>

              <Radio         
                             value={ques.options[j].value}
                            onChange={(e)=>{
                             
                                  
                list[i]=e.target.value;
                listAK[i]=ques.answerKey;
                if (list[i]===listAK[i]){listP[i]=parseInt(ques.points);
                } else{listP[i]=0;}

                              console.log(list)
                              console.log(listAK)
                              console.log(listP)


                            }

                              }

             />  
                 <span style={{padding:'8px'}} >
              {ques.options[j].optionText} 
          </span>
  
          </div>
              
         ))}  
         </div>  
         

        
       </div>
       <Divider />

   </AccordionDetails>
   
</Accordion>

   </div>  
</div>
       

)
)
                            }                         
    </div>
    
    {(chapterNumber!==numberOfChapters)?(<>
        <button type="button" className="btn btn-style-1 " onClick={handleClick} data-toggle="modal" data-target="#exampleModalCenter"> Submit</button>

    <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">You have successfully completed this Chapter!</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
     
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

        <button type="button" className="btn btn-style-1" onClick={()=>{handlerClick()}}><NavLink
       to={`/student/course/${idStudent}/${idCourse}`} >Next Chapter&raquo;</NavLink></button>
      </div>
    </div>
  </div>
</div></>):(  <> <div className="container d-flex justify-content-center">
    <div className="row">
      <div className="col-md-6"> <button type="button" className="btn  " data-toggle="modal" data-target="#myModal"><a href="#" className="btn btn-style-1 " onClick={handleClick2} >  
                 Submit</a></button> </div>
    </div>
  </div>
  <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
      <div className="card">
        <div className="text-right cross"> <i className="fa fa-times" /> </div>
        <div className="card-body text-center"> <img src="https://img.icons8.com/bubbles/200/000000/trophy.png" />
          <h4>CONGRATULATIONS!</h4>
          <p>You have successfully completed this course!</p>  <p>your total score is:<b>{scorre}</b></p>
          <button type="button" href="/home" className="btn btn-style-1 "  onClick={handleClickF()}> 
         
                    Finish</button>  
        </div>
      </div>
    </div>
  </div>
 </>)}

    
    
    
    </>
   
  ) 
  
 
 







  }
  export default withRouter(Quiz)