import React , { useState } from 'react'
import { Typography } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import {TextField }from '@material-ui/core';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import { uploadFile } from "../../services/teacher.service";




const AddChapter =props=>{
    
      const [chapterState, setChapterState] = useState(
        { 
            chapterTitle: '',
            chapterTime: '',
            chapterFile:{ name:"",
                           path:""},
            points:'',
             quiz: [
                {questionText: "Question",
                options : [
                    {optionText: "option 1" ,value:"option-1"}
                 ], 
                 open: true,
                 points:"0",
                 answerKey:""
             }

             ] }
        );


    const handleChapterChange = (e) => {
        setChapterState({
            ...chapterState,
            [e.target.className]: e.target.value,
          });
          console.log(chapterState)
      };




//------------questions---------------------

function addMoreQuestionField(){
    expandCloseAll(); 
    var quests=chapterState.quiz;
quests=[...quests ,{questionText: "Question", options : [{optionText: "option 1",value:"option-1"}], open: true}]
setChapterState({...chapterState, quiz:quests});

}

function removeQuestion(i){
    var quests =chapterState.quiz ;
    if(quests.length > 1){
        quests.splice(i, 1);
        setChapterState({...chapterState, quiz:quests});
    }   
  }



  function changeQuestion(text,i){
    var quests= chapterState.quiz;
    quests[i].questionText=text;
    setChapterState( {...chapterState, quiz:quests});
}


    //-----options-----------

    function addOption(i){
        var quests = chapterState.quiz;
        if(quests[i].options.length < 5){
            quests[i].options.push({optionText: "option ",value:"option"})
            setChapterState( {...chapterState, quiz:quests});

        } else{
          console.log("Max  5 options ");  
        }
    
      }

      function removeOption(i, j){
        var quests = chapterState.quiz;
            if(quests[i].options.length > 1){
                if(quests[i].options[j].value===quests[i].answerKey)
                quests[i].answerKey="";
                quests[i].options.splice(j, 1);
                setChapterState( {...chapterState, quiz:quests});
            }   
      }
      function changeOption(text,i,j){
        var quests = chapterState.quiz;
        if(quests[i].options[j].value===quests[i].answerKey)
        quests[i].answerKey=text.toLowerCase().replace(" ","-");
        quests[i].options[j].optionText=text;
        quests[i].options[j].value=text.toLowerCase().replace(" ","-");
        setChapterState( {...chapterState, quiz:quests});
    
        }


        function setOptionAnswer(answer,index){
            var quests = chapterState.quiz;
            quests[index].answerKey=answer;
            setChapterState({...chapterState, quiz:quests});

            }
   

    function setOptionPoints(points,index){
        var quests = chapterState.quiz;
        quests[index].points=points;
        setChapterState({...chapterState, quiz:quests});
    } 


    function expandCloseAll(){
        let quests = chapterState.quiz;
         for (let j = 0; j < quests.length; j++) {  
            quests[j].open = false;
         }
         setChapterState({...chapterState, quiz:quests});
        }
        
      function handleExpand(i){
        let quests = chapterState.quiz;
        for (let j = 0; j < quests.length; j++) {
          if(i ===j ){
            quests[j].open = true;
          } else{
            quests[j].open = false;
           }
        }
        setChapterState({...chapterState, quiz:quests});
    }


//**********file upload*******************

const [file ,setFile]=useState('')
const fileType=['application/mp4'];

const handlePdfFileChange=(e)=>{
  let selectedFile=e.target.files[0];

  if(selectedFile){
   

    //if(selectedFile&&fileType.includes(selectedFile.type)){
              setFile(e.target.files[0]);

    //}
    //else{
      //console.log('select a valid type ');
    //}
  }
  else{
    console.log('select your file');
  }
}



//submit form------------------------
 const submitHandler = (e) => {
  e.preventDefault() //prevent the default behaviour of a form : redirect to other page

 const fd = new FormData() 
   //fd.append('files', chapterState.chapterFile)
 
  //  fd.append('title', chapterState.chapterTitle)
  //  fd.append('time', chapterState.chapterTime)
  //  fd.append('points', chapterState.points)
  //  fd.append('quiz',JSON.stringify(chapterState.quiz) )
   fd.append('files', file)

   uploadFile(fd)
        .then((response) => {     
          console.log("uploaded successfully")
          props.onChange({...chapterState,
            chapterFile:{name:response.data.filename,
            path:response.data.path}});

          })
       
          
        //  .then(()=> {   
        //    })
        .catch((error) => {
            console.log("uploaded failed");
          });



 }
 
 //------------------Questions UI------------------


 function questionsUI(){
    return  chapterState.quiz.map((ques, i)=> (

       <div key={i}>
                    
                             <div style={{marginBottom: "9px"}}>
          
        <Accordion  onChange={()=>{handleExpand(i)}} expanded={chapterState.quiz[i].open}>

          <AccordionSummary   aria-controls="panel1c-content"  id="panel1c-header" >
          <div >
            <Typography >Question {i+1}</Typography>   
          </div>
         
          </AccordionSummary>
      
        
        <AccordionDetails >
       
        <div style={{display: 'flex',flexDirection:'column', alignItems:'flex-start', marginLeft: '15px', marginTop:'-15px'}}>
            <div style={{display: 'flex',flexDirection:'row', alignItems:'flex-start', marginLeft:'-13px'}}>
            
            <TextField 
                      fullWidth={true}   label="Question" 
                      rowsMax={4} 
                      value={ques.questionText} 
                      onChange={(e)=>{changeQuestion(e.target.value,i)}}
                      style={{marginTop: '5px', marginRight:"13px"}}
                       />

            <TextField     label="points" type="number"  InputLabelProps={{    shrink: true,}}
                          placeholder="points" 
                          value={ques.points}
                          onChange={(e)=>{setOptionPoints(e.target.value,i)}}
                           style={{marginTop: '5px', marginRight:"13px"}} />  
            
           <IconButton aria-label="delete" 
                         onClick={()=>{removeQuestion(i)}}
                        style={{marginTop: '8px', marginLeft:"15px"}}
           >
                    <DeleteIcon />
            </IconButton>
                  
           </div>  
              

              <div style={{width: '100%'}}>
              {ques.options.map((op, j)=>(
               <div key={j} style={{display:'flex', flexDirection:'row', marginLeft:'-13px'}}>

                   <Radio 
                  value={ques.options[j].value}
                  checked={ques.answerKey ===ques.options[j].value}
                 onChange={(e)=>{setOptionAnswer(e.target.value,i)}}
                  />  
                  <TextField fullWidth={true} 
                  value={ques.options[j].optionText}
                  onChange={(e)=>{changeOption(e.target.value,i,j)}} 
                  style={{marginTop: '5px'}} />  

                  <IconButton aria-label="delete" onClick={()=>{removeOption(i, j)}}>
                    <CloseIcon />
                  </IconButton>

               </div>
                
              ))}  
              </div>  
              

              <FormControlLabel disabled control={<Radio />} label={
                <Button size="small" onClick={()=>{addOption(i)}} style={{textTransform: 'none', marginLeft:"-5px"}}>
                  Add Option
                </Button>
              } /> 
                    

               
            </div>
        </AccordionDetails>
     </Accordion>
  
        </div>
    </div>
                   

     )
    )
  }





    return (
        <div  className="chapter-box">
            <div >
        <label > chapter </label>
        <input
            type="text"
            className="chapterTitle" 
            placeholder="Title"
            value={chapterState.chapterTitle}

            onChange={handleChapterChange}

            />

        <input
            type="text"
            className="chapterTime" 
            placeholder="chapter time"
            value={chapterState.chapterTime}
            onChange={handleChapterChange}
            />

        <input
            type="file"
            className="chapterFile" 
            onChange={handlePdfFileChange}                                       
             />

        <input
            type="number"
            placeholder="Total points"
            className="points"
            value={chapterState.points}
            onChange={handleChapterChange}

            />
            <div className="quiz-box"> 

            {questionsUI()}

            </div>

            <input type="button" className="action-button-quiz" onClick={addMoreQuestionField} style={{marginRight:"4%"}} value="Add question"/>
              <input type="button" className="action-button-quiz" onClick={submitHandler} value="Save chapter"/>
          
            </div>
        </div>
   
    )
}

export default AddChapter
