import React from "react";
import {useFormik} from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
import {useHistory} from 'react-router-dom'
import { NavLink,useParams } from 'react-router-dom'
import {useState} from "react";
import {logIn } from "../../actions/Auth.service";

function Signin (props) {
  let history=useHistory()
  const {idCourse} = useParams();

  const [error1,setError1]=useState(false)
  const [error2,setError2]=useState(false)
  const [showPassword,setShowPassword]=useState(false)

  const  initialValues= {
                userName:'',
    email:'',password:'',password2:''}

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
      password: Yup.string()
      .required('Required'),
   })
  const onSubmit=(event)=>{
    const registred={
        
        email:formik.values.email,
        password:formik.values.password
      
     }
    logIn( registred)
    .then(response=>{
      console.log(response);
      if (response.data==="notfound")
      {setError2(true);setError1(false)} 
      if(response.data.message==="incorrectpassword")
      {setError1(true);setError2(false);}
      if(response.data.message==="admin"){
        window.location='/admin/profile'
      
      }
      if(response.data.message==="loggedinAsTeacher"){
        window.location=`/teacher/profile`
      
      }
      if(response.data.message==="loggedinAsStudent"){
        if(!idCourse){
      window.location=`/student/myprofile/${response.data.result._id}`;}
      
      else {  window.location=`/student/course/${response.data.result._id}/${idCourse}`}
        setError1(false);
        setError2(false);    
        
    }})

    .catch(console.log("noooo"))
  }

    const formik=useFormik({ 
       initialValues,onSubmit,validationSchema})
      
  return (
    <div className=" signin" >
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <form onSubmit={formik.handleSubmit} className="box">
              <h1>Sign In </h1>
              <p className="text-muted">
              <div className='error errormsg'> {props.auth?  "You must Sign in first":""}</div>
           
                {" "}
                {/* Please enter your login and password! */}
              </p>
              <input type="email" onChange={formik.handleChange}  placeholder="Your email address"  name="email" value={formik.values.email}/>
              {formik.touched.email && formik.errors.email ? (
          <div className='error errormsg'>{formik.errors.email}</div>
        ) : null}
              <input type={showPassword? "text" :"password"} onChange={formik.handleChange} name="password" placeholder=" your password" value={formik.values.password}/>
             
              <button type="submit" className="">
                Sign in
              </button>
              {error1 ? (
          <div className='error errormsg'>Password Incorrect</div>
        ) : null}     
         {error2 ? (
          <div className='error errormsg'>This account doesn t exist <br/>
          Go to   
          <NavLink 
                className="nav-link"
                to="/signup"
                activeStyle={{ color: "red" }}
              >
                 Create an account </NavLink></div>
        ) : null}
           
             <NavLink 
                className="nav-link"
                to="/signup"
                activeStyle={{ color: "red" }}
              >  <div   style={{color:'#2a6480',textDecoration: 'underline'}}>
              Create an account </div></NavLink> 
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
