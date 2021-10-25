import React from "react";
import {useState} from "react";
import {useFormik} from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
import {useHistory} from 'react-router-dom'
import {register} from "../../actions/Auth.service";
import { NavLink } from 'react-router-dom'



function Signup () {
  let history=useHistory()
  const [error,setError]=useState(false)
  const  initialValues= {
                userName:'',
    email:'',password:'',password2:''}

  const validationSchema = Yup.object({
    userName: Yup.string()
    .required('Required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Required')
      .test("", "Invalid email format", function (value) {
        let mail=this.parent.email;
        if(mail!=null){
            var verify= mail.split("@");
            if (verify.length===2){
                if(verify[1]==="ensi-uma.tn"){
                    return true
                }
                else return false
            }
            else return false
        }
        
    }
      ),
      password:Yup.string().required('Required')
      .min(6),
password2: Yup.mixed().test('match', 'Passwords do not match', function (value) {
return value === this.parent.password
}).required('Password confirm is required'),
   })
  const onSubmit=(event)=>{
    const registred={
    userName:formik.values.userName,
    email:formik.values.email,
    password:formik.values.password
  
 }
 
     register(registred)
    .then(response=>{ 
      console.log(response.data);
       if(response.data.errors==null)  {
        
      history.push('/signin');}
       else if(response.data.errors.email.name ==='ValidatorError')
       {setError(true);}
    })
    .catch(error=>{console.log(error)})
      
  
  }

    const formik=useFormik({ 
       initialValues,onSubmit,validationSchema} )
      
  return (
    <div className="signin">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <form onSubmit={formik.handleSubmit} className="box">
              <h1>Sign up  </h1>
              <p className="text-muted">
                {" "}
              </p>
              {error ? (
          <div className='error'>Email already exists</div>
        ) : null}
              <input onChange={formik.handleChange} type="text" name="userName" placeholder="username" value={formik.values.userName} />
              {formik.touched.userName && formik.errors.userName ? (
          <div className='error'>{formik.errors.userName}</div>
        ) : null}
              <input type="email" onChange={formik.handleChange}  placeholder="Your email address"  name="email" value={formik.values.email}/>
              {formik.touched.email && formik.errors.email ? (
          <div className='error'>{formik.errors.email}</div>
        ) : null}
        
              <input type="password" onChange={formik.handleChange} name="password" placeholder=" your password" value={formik.values.password}/>
              {formik.touched.password && formik.errors.password ? (
          <div className='error'>{formik.errors.password}</div>
        ) : null}
              <input type="password" onChange={formik.handleChange} name="password2" placeholder="Repeat your password" value={formik.values.password2}/>
              {formik.touched.password2 && formik.errors.password2 ? (
          <div className='error'>{formik.errors.password2}</div>
        ) : null}
              <button type="submit" className="">
                Sign up
              </button>
               <NavLink 
                className="nav-link"
                to="/signin"
                activeStyle={{ color: "red" }}
              > <div style={{color:'#2a6480',textDecoration: 'underline'}} >
              I am already member  </div> </NavLink>
            
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;