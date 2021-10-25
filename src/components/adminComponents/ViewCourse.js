// import React ,{useEffect, useState} from 'react'
// import { getCours ,getFile} from "../../services/admin.service";
// import {  useParams} from "react-router-dom";


// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import AssignmentIcon from '@material-ui/icons/Assignment';
// import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';


// import { Typography } from '@material-ui/core';
// import Radio from '@material-ui/core/Radio';


// import Accordion from '@material-ui/core/Accordion';
// import AccordionSummary from '@material-ui/core/AccordionSummary';
// import AccordionDetails from '@material-ui/core/AccordionDetails';
// import Divider from '@material-ui/core/Divider';


// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//       width: '100%',
//       backgroundColor: theme.palette.background.paper,

//     },
//     tabs:{
//      background: '#e6e6e6',

//     },
//     tab:{
//       color: 'white',

//     }

//   }));

// function ViewCourse() {
//   let {id}= useParams()
  
//           useEffect(() => {      

//           if(id !== undefined){  
        
//             getCours(id)
//             .then((response) => {
//                setCourseState({
//                 title: response.response.title,
//                 topic: response.response.topic,
//                 language: response.response.language,
//                 description: response.response.description,

//                 estimatedTime: response.response.estimatedTime,
//                 image:response.response.image,
//                 chapters:response.response.chapters,
//               });
//               console.log(courseState);
//               getImg(response.response.image.path);
//             })
//             .catch((error) => {
//               console.log(error);
//             });
  
//           }



//             },[]);


            
        
//             function getImg(imgPath){
//               getFile({
//               path:imgPath

    
//              })
//               .then((response) => {
//                 console.log(response.data);
//                 setImageState(response.data)
//               })
//               .catch((error) => {
//                 console.log(error);
//               });
    
            
//             }
  
  
             
              
//   const classes = useStyles();

//     const [imageState, setImageState] = useState("");
//     const [courseState, setCourseState] = useState({});
//     const [value, setValue] = React.useState(0);


//     const handleChange = (event, newValue) => {
//           setValue(newValue);
//           console.log(newValue);
//         };
     

//     return (
//                <div id="layoutSidenav_content">
//         <main >

        
//           <div id="crsBox" >
//                   <div className="crs-header  ">
//                     <div  style={{float:"left"}}>
//                     {
//                           imageState?(<img alt="" id="image" src={URL.createObjectURL(imageState)} height="100" width="100"/>):''

//                 }  
//                     </div>
//               <div style={{  margin: '0 auto'}}>
//               <h1 className="fs-title">{ courseState.title }</h1>

                      
//                     <label  className="courseInfo">Topic : {  courseState.topic }  </label>   
//                     <label   className="courseInfo" style={{marginLeft:'50px'}}>Language : { courseState.language }</label>  
//                     <label   className="courseInfo" style={{marginLeft:'50px'}}>Time : { courseState.estimatedTime } hours</label> <br/> 
//                     <label   className="courseInfo" style={{marginLeft:'50px'}}> { courseState.description!==undefined?courseState.description:'' }</label>  

//                </div>
// <br/>
//                <div className="crs-row"  >
//                 <div className={classes.root}>
               
//                <AppBar position="static" color="default">
//         <Tabs
//         className={classes.tabs}
//           value={value}
//          onChange={handleChange}
//           indicatorColor="primary"
//           textColor="primary"
//           variant="scrollable"
//           scrollButtons="auto"
//           aria-label="scrollable auto tabs example"
//         >



// { courseState.chapters?(
//                   courseState.chapters.map((item,index)=>{
//                                                       return(
                                                      
//                                                            <Tab 
//                                                            wrapped label={item.chapterTitle} 
//                                                             value={index} />
                                                                     
//                                                       )
//                                                         })
                                                      
                                                                        
//                                        ):''                 
//                 }
         
      
//         </Tabs>
//       </AppBar>
//       { courseState.chapters?(
     
//                  <MainPanel value={value} chapter={courseState.chapters[value]}  />                    
  
//                  ):''                 
//                 }

//       </div>


//                   </div>
//            </div>
//       </div>

 
// </main>
// </div>

//     )


// }


// export default ViewCourse



// function MainPanel(props) {
//   const {  chapter } = props;
// const [pdfFile,setPdfFile]=useState('');
// const [value, setValue] = React.useState(0);


//   useEffect(() => {      
//     getFile({
//       path:chapter.chapterFile.path
//      })
//       .then((response) => {
//         console.log(response.data);
//         setPdfFile(response.data)
//       })
//       .catch((error) => {
//         console.log(error);
//       });

//   },[chapter]) 


//   const handleChange = (event, newValue) => {
//     setValue(newValue);

//     console.log(newValue);
//   };

//   return (
// <>
//     <AppBar position="static" color="default">
//         <Tabs
//           value={value}
//          onChange={handleChange}
//           indicatorColor="primary"
//           textColor="primary"
//           variant="standard "
//         >

//       <Tab icon={<InsertDriveFileIcon />} label="Course" value={0} style={{minWidth:"50%"}}/>                                      
//       <Tab icon={<AssignmentIcon />}  label="Quiz" value={1} style={{minWidth:"50%"}}/>
                                                                     
             
      
//         </Tabs>
//       </AppBar>
//       <br/>
//     <div className="frameBox">
// {!value?(
//       pdfFile?(<iframe id="viewer"  className="frame" src={URL.createObjectURL(pdfFile)}/> ):''
// )

// :(<Quiz questions={chapter.quiz} total={chapter.quiz.length}/>)




// }
    
//     </div>
//     </>
//   );
// }


// function Quiz(props){
// const {questions ,total}=props;
// return  questions.map((ques, i)=> (

//   <div key={i}>
               
//                         <div style={{marginBottom: "9px"}}>
     
//    <Accordion   expanded={true}>

//      <AccordionSummary   aria-controls="panel1c-content"  id="panel1c-header" >
//      <div >
//      <Typography gutterBottom variant="h5" component="h2">
//          Question {i+1} / {total} </Typography>   
//      </div>
    
//      </AccordionSummary>
 
   
//    <AccordionDetails >
  
//    <div style={{display: 'flex',flexDirection:'column', alignItems:'flex-start', marginLeft: '15px', marginTop:'-15px'}}>
//        <div style={{display: 'flex',flexDirection:'row', alignItems:'flex-start', marginLeft:'-13px'}}>
       
//        <Typography component="h3">
//        {ques.questionText}
//           </Typography>  
            
//       </div>  
//       <br/>
         

//          <div style={{width: '100%'}}>
//          {ques.options.map((op, j)=>(
//           <div key={j} style={{display:'flex', flexDirection:'row', marginLeft:'-13px'}}>

//               <Radio 
//              value={ques.options[j].value}
//              checked={ques.answerKey ===ques.options[j].value}

//              />  
            
//                  <span style={{padding:'8px'}} >
//               {ques.options[j].optionText} 
//           </span>

//           </div>
           
//          ))}  
//          </div>  
         

        
//        </div>
//        <Divider />

//    </AccordionDetails>
// </Accordion>

//    </div>
// </div>
              

// )
// )

// }