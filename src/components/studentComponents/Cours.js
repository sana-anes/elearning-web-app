import React,{useState,useEffect}from 'react'
import {useParams } from "react-router-dom";
import ViewCourse  from '../clientComponents/chapter'
import { getCourse} from '../../actions/student.service';

function Course(props ) {
    let {idCourse}= useParams()
   const listChapters=[]

    const [coursestate, setCoursestate] = useState({
      description:'',
      title:'',
      estimatedTime:'',
      chapters:[]
    });

 useEffect(async() =>  {
    console.log("getCourse11")
 getCourse(idCourse)
 .then(response=>{console.log("getCourse");
   console.log(response);
  //  for (let i=0;i<response.data.chapters.length;i++){
  //    listChapters.push(response.data.chapters[i].chapterTitle)
  //  }
   setCoursestate({
  description:response.data.description,
  title:response.data.title,
  estimatedTime:response.data.estimatedTime,
  chapters:response.data.chapters,

   })
     console.log(coursestate)
      
 })
.catch()
   },[])



    return (
        <>
        
            <div>
            <section id="CourseTitle" className="d-flex align-items-center">
        <div className="container  position-relative" data-aos="fade-in" data-aos-delay="200">
            

           
            <main id="main">
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title" data-aos="fade-left">
          <h2>{coursestate.title? coursestate.title:"rien"}</h2>
          <p>{coursestate.description? coursestate.description:"rien"}</p>
        </div>
       </div>
    </section> </main> </div></section>
   <div className="container">
    <div className="row">
      <div className="col-lg-2">
        <h1 className="my-4">Course Plan</h1>
        <div  id="plan" className="list-group">
          
         {coursestate.chapters? coursestate.chapters.map((item,index)=>(<>
      
       
        <a href="#" className="list-group-item">{item.chapterTitle}</a></>
          )):null} 
          
        </div>
      </div>
    
      <div className="col-lg-10">
        <div className="card mt-4">
         
        </div>
        <div id="chapter">
        <div className="">
         
<ViewCourse/>
            
          
        </div></div>
        
      </div>
      
    </div>
  </div>
 
  
</div>

        </>
    )
}

export default Course;
