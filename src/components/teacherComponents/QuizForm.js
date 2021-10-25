
import React ,{useState}from 'react'
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


const QuizForm=props=> {

  const [questions, setQuestions]= useState(
     [{questionText: "Question",
       options : [
           {optionText: "option 1" ,value:"option-1"}
        ], 
        open: false,
        points:"0",
        answerKey:""
    }]
    );
  

  function addMoreQuestionField(){
      expandCloseAll(); 
      setQuestions(questions=> [...questions, {questionText: "Question", options : [{optionText: "option 1",value:"option-1"}], open: true}]);
  }
  function removeQuestion(i){
    var Question = [...questions];
    if(Question.length > 1){
      Question.splice(i, 1);
      setQuestions(Question)
    }   
  }
  function changeQuestion(text,i){
    var Question = [...questions];
    Question[i].questionText=text;
      setQuestions(Question)
    }   
  
    
  
  function addOption(i){
    var optionsOfQuestion = [...questions];
    if(optionsOfQuestion[i].options.length < 5){
      optionsOfQuestion[i].options.push({optionText: "option ",value:"option"})
    } else{
      console.log("Max  5 options ");  
    }
    setQuestions(optionsOfQuestion)

  }


  function removeOption(i, j){
    var optionsOfQuestion = [...questions];
    if(optionsOfQuestion[i].options.length > 1){
if(optionsOfQuestion[i].options[j].value===optionsOfQuestion[i].answerKey)
      optionsOfQuestion[i].answerKey="";
      optionsOfQuestion[i].options.splice(j, 1);
      setQuestions(optionsOfQuestion)
    }   
  }
  function changeOption(text,i,j){
    var optionsQuestion = [...questions];
    if(optionsQuestion[i].options[j].value===optionsQuestion[i].answerKey)
    optionsQuestion[i].answerKey=text.toLowerCase().replace(" ","-");
    optionsQuestion[i].options[j].optionText=text;
    optionsQuestion[i].options[j].value=text.toLowerCase().replace(" ","-");
      setQuestions(optionsQuestion)

    }   
   
  
    
    function setOptionAnswer(ans,qno){
            var Questions = [...questions];
            Questions[qno].answerKey=ans;
            setQuestions(Questions)
            }
   

    function setOptionPoints(points,qno){
                var Question = [...questions];
                Question[qno].points=points;
                  setQuestions(Question)
                } 
    
                
  function expandCloseAll(){
    let qs = [...questions]; 
     for (let j = 0; j < qs.length; j++) {  
      qs[j].open = false;
     }
     setQuestions(qs);
  }
    
  function handleExpand(i){
    let qs = [...questions]; 
    for (let j = 0; j < qs.length; j++) {
      if(i ===j ){
        qs[j].open = true;
      } else{
        qs[j].open = false;
       }
    }
     setQuestions(qs);
  }

  function saveQuestions(){
    props.onChange(questions);

  }

 

  function questionsUI(){
    return  questions.map((ques, i)=> (

      <div key={i}>
                    
                             <div style={{marginBottom: "9px"}}>
          
          <Accordion  onChange={()=>{handleExpand(i)}} expanded={questions[i].open}>

          <AccordionSummary
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div >
            <Typography >Question {i+1}</Typography>
           
          </div>
         
        </AccordionSummary>
      
        
        <AccordionDetails >
       
        <div style={{display: 'flex',flexDirection:'column', alignItems:'flex-start', marginLeft: '15px', marginTop:'-15px'}}>
            <div style={{display: 'flex',flexDirection:'row', alignItems:'flex-start', marginLeft:'-13px'}}>
            
            <TextField 
                      fullWidth={true}   label="Question" Question
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
       <div>
            <div className="question_form">

           {questionsUI()}
            <div>
              <input type="button" className="action-button-quiz" onClick={addMoreQuestionField} style={{marginRight:"4%"}} value="Add question"/>
              <input type="button" className="action-button-quiz" onClick={()=>{saveQuestions()}} value="Save questions"/>
            </div>
           
          
          </div>
          </div>
  );
}
export default QuizForm
