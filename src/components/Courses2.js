import React,{useState,useEffect} from 'react'
 import {getAllCourses,getCoursesByLevel } from './../actions/course.service';
 import Carousel2 from '././clientComponents/carousel2'

 function Courses2() {

  const [data, setData] = useState([{}]);
  const [lengthh, setLengthh] = useState();
  const handlerClick=(level)=>{
    getCoursesByLevel(level)
    .then(response=>{console.log(response);
      
       setData(response.data);
         setLengthh(response.data.length);
        console.log(lengthh);
  
      }
        )
        .catch(()=>{
          console.log("err");
  
        })
  }

const list=[]
useEffect(() => {
 
  getCoursesByLevel('II1')
  .then(response=>{
    console.log(response);
     setData(response.data);
       setLengthh(response.data.length);
      console.log(lengthh);

    })

    
  },[]);
    for(let i=0 ; i<lengthh;i+=3){
      if(i===0){
        
  if (lengthh===1 )
  {list.push(<div className="carousel-item active "><Carousel2  first={data[i]}   /></div>);}
  if (lengthh===2 )
  {list.push(<div className="carousel-item active "><Carousel2  first={data[i]} second={data[i+1]}   /></div>);}
  else {list.push(<div className="carousel-item active "><Carousel2 first={data[i]} second={data[i+1]}  third={data[i+2]}  /></div>);}
}

  else{list.push(<div className="carousel-item "><Carousel2   first={data[i]} second={(i+1<lengthh)?data[i+1]:null}  third={(i+2<lengthh)?data[i+2]:null} /></div>)}
  }
     return (


 <main id="main">
    <section id="portfolio" className="portfolio">
<div className="container">
  <div className="section-title" data-aos="fade-left">
  <h2>Courses</h2>
     <p>Learn how to search, find and choose your perfect course<br/>
    You can find many content creation tools such as PDF documents, text,quizz and video content.</p>
  </div>
  <div className="row" data-aos="fade-up" data-aos-delay={100}>
    <div className="col-lg-12 d-flex justify-content-center">
      <ul id="portfolio-flters">
        <li data-filter="*" className="filter-active" onClick={()=>{handlerClick('II1')}}>II1</li> 
        <li data-filter=".filter-app" onClick={()=>{handlerClick('II2')}}>II2</li>
        <li data-filter=".filter-card" onClick={()=>{handlerClick('II3')}}>II3</li>
        <li data-filter=".filter-web" onClick={()=>{handlerClick('M1')}}> M1</li>
        <li data-filter=".filter-web "onClick={()=>{handlerClick('M2')}}> M2</li>
        </ul>
    </div>
  </div>

       
     
  <section className="pt-5 pb-5">
   <div className="container">
     <div className="row">
<div className="col-6">
  <h3 className="mb-3"> </h3>
</div>
<div className="col-6 text-right">
  <a className="btn mb-3 mr-1 flech" href="#carouselExampleIndicators2" role="button" data-slide="prev">
    <i className="fa fa-arrow-left" />
  </a>
  <a className="btn mb-3 flech " href="#carouselExampleIndicators2" role="button" data-slide="next">
    <i className="fa fa-arrow-right" />
  </a>
</div>
    

<div className="col-12">
  <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
   
    {list.map((item)=>item)}
    
  
    
         </div>

</div>
</div>
</div>
     </div>
  
 </section>
         
       
     
         
          
          
  </div>
      
     </section>
   </main>

     )
 }

 export default Courses2;