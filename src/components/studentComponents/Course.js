import React,{useState,useEffect}from 'react'
import {useParams } from "react-router-dom";

import { getNomchapter,getCourse} from '../../actions/student.service';

function Course(props ) {
  

  useEffect(async() =>  {
    console.log(idStudent);
 
    getNomchapter(idStudent,idCourse)
    .then(response=>{console.log("getnomchapter");
      console.log(response);
      
      console.log(response.data[0].coursesNotFinished);
      for(let i=0;i<response.data[0].coursesNotFinished.length;i++){
        if (response.data[0].coursesNotFinished[i]._id===idCourse){
          console.log(response.data[0].coursesNotFinished[i].chapter._id);
        setIdchapter(response.data[0].coursesNotFinished[i].chapter._id);
        console.log(idchapter);
        setScore(response.data[0].coursesNotFinished[i].score);
        console.log(score);
      }}
  } )
    .catch(console.log("ARRIIIIIIIIJJJJJJ"))

  }
,[])


const {idStudent,idCourse} = useParams();
const [idchapter, setIdchapter] = useState("");
const [chapter, setChapter] = useState({});
const [description, setDescription] = useState("");
const [quiz, setQuiz] = useState([{}]);
const [score, setScore] = useState();
const [lengthh, setLengthh] = useState();
const listChapters=[];
    return (
        <>
        
            <div>
            <section id="CourseTitle" className="d-flex align-items-center">
        <div className="container  position-relative" data-aos="fade-in" data-aos-delay="200">
            

           
            <main id="main">
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title" data-aos="fade-left">
          <h2>Our Courses</h2>
          <p>{description? description :"rien"}</p>
        </div>
       </div>
    </section> </main> </div></section>
   <div className="container">
    <div className="row">
      <div className="col-lg-2">
        <h1 className="my-4">Course Plan</h1>
        <div  id="plan" className="list-group">
         {listChapters.map((index,item)=>(<>
        <a href="#" className="list-group-item active">{item}</a>
          <a href="#" className="list-group-item">{quiz}</a></>
          ))}
          
        </div>
      </div>
    
      <div className="col-lg-10">
        <div className="card mt-4">
          <img className="card-img-top img-fluid" src="http://placehold.it/900x400" alt />
          <div className="card-body">
            <h3 className="card-title">Product Name</h3>
            <h4>$24.99</h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure, ducimus!</p>
            <span className="text-warning">★ ★ ★ ★ ☆</span>
            4.0 stars
          </div>
        </div>
       
        <div className="card card-outline-secondary my-4">
          <div className="card-header">
            Product Reviews
          </div>
          <div className="card-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
            <small className="text-muted">Posted by Anonymous on 3/1/17</small>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
            <small className="text-muted">Posted by Anonymous on 3/1/17</small>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
            <small className="text-muted">Posted by Anonymous on 3/1/17</small>
            <hr />
           
           
           
            <div  id="plan" className="row">
            
            <div className="col-lg-2">
        <a href="#" className="list-group-item ">&laquo; previous</a>
        </div> 
        <div className="col-lg-7"></div>
        <div className="col-lg-3">
        <a href="#" className="list-group-item ">chapter finished &raquo;</a>
        </div>
        
        
        </div>
        </div>
            
          
        </div>
        
      </div>
      
    </div>
  </div>
 
  
</div>

        </>
    )
}

export default Course;


