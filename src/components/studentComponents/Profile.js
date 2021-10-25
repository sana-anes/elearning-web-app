import React,{useState,useEffect} from 'react'
import { NavLink, useParams,useHistory } from "react-router-dom";
import { getInfo, updateProfile } from '../../actions/student.service';
import {useFormik} from 'formik'
import * as Yup from 'yup'



function Profile() {
  let history=useHistory();
  const [clicked,setClicked]=useState(false);
  const [msg,setMsg]=useState("");

  const  initialValues= {
  userName:'',
password:'',
password2:''}

const validationSchema = Yup.object({
  userName: Yup.string(),

  
password:Yup.string(),
    
password2: Yup.mixed().test('match', 'Passwords do not match', function (value) {
return value === this.parent.password
})
 })


  const [data, setData] = useState([
    {
      userName: "",
      email: "",
      date:"",
      
    },
  ]);

  const {id} = useParams();
  //getValues
  useEffect(() => {
    console.log(id);
 
    getInfo(id)
    .then(response=>{console.log(response);
      
      console.log(response.data.userName);
      const date=response.data.date.split("T")[0];
      setData(
        {
          userName: response.data.userName,
          email:response.data.email,
          date:date,
        });}
      
      )
    .catch(console.log("ARRIIIIIIIIJJJJJJ"))
  }
,[clicked])


//onSubmit
const onSubmit=(event)=>{
  
  let student={userName:'',email:'',password:''}
 
     student={
    userName:formik.values.userName,
    email:formik.values.email,
    password:formik.values.password
 }
 if (formik.values.userName!=="" && formik.values.password!=="" )
 { setMsg("you have successfully updated your profile ")}
 else if(formik.values.userName!=="" && formik.values.password==="" ){
  setMsg("you have successfully updated your userName ")
 }
 else if(formik.values.userName==="" && formik.values.password!=="" ){
  setMsg("you have successfully updated your password ")
 }
 else{setMsg("")}
 
     updateProfile(student,id)
    .then(response=>{ console.log("arij");
      //window.location=`/student/myprofile/${response.data.result._id}`;
      //history.push(`/student/myprofile/${response.data.result._id}`)
      formik.resetForm({initialValues}); setClicked(!clicked);    console.log(clicked); 

    })
    .catch(error=>{console.log(error)})
    
    

}
const formik=useFormik({ 
  initialValues,onSubmit,validationSchema})
  
    return (
        <>
             <section id="CourseTitle" className="d-flex align-items-center">
        <div className="container  position-relative" data-aos="fade-in" data-aos-delay="200">
          
        <main id="main">
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title" data-aos="fade-left">
          <h2>My Profile</h2>
        </div>
       </div>
    </section> </main>

        </div>
        </section>
      <div className="container mt-5">
  <div className="row">
    <div className="col-lg-4 pb-5">
      <div className="author-card pb-3">
        <div className="author-card-cover" style={{backgroundImage: 'url(https://demo.createx.studio/createx-html/img/widgets/author/cover.jpg)'}}><a className="btn btn-style-1 btn-white btn-sm" href="#" data-toggle="tooltip" title data-original-title="You currently have 290 Reward points to spend"></a></div>
        <div className="author-card-profile">
          <div className="author-card-avatar"><img src="https://png.pngtree.com/png-vector/20190324/ourlarge/pngtree-vector-male-student-icon-png-image_862310.jpg" alt="Daniel Adams" />
          </div>
          <div className="author-card-details">
            <h5 className="author-card-name text-lg">{data.userName}</h5><span className="author-card-position">Joined on {data.date}</span>
          </div>
        </div>
      </div>
      <div className="wizard">
        <nav className="list-group list-group-flush">
        <a className="list-group-item active" href="#"><i className="fe-icon-user text-muted" /><NavLink className="nav-link" to="/student/myprofile">Profile Settings</NavLink></a>
     </nav>
      </div>
    </div>
    <div className="col-lg-8 pb-5">
    <div className="row"><br></br></div>
      <form className="row" onSubmit={formik.handleSubmit}>
        
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="account-fn">Username</label>
            <input className="form-control" type="text" id="account-fn" name="userName" placeholder={data.userName}  value={formik.values.userName} onChange={formik.handleChange} />
            {formik.touched.userName && formik.errors.userName ? (
          <div className='error'>{formik.errors.userName}</div>
        ) : null}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="account-email">E-mail Address</label>
            <input className="form-control" type="email" id="account-email" defaultValue={data.email}  disabled />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="account-ln">Password</label>
            <input className="form-control" type="password" name="password" id="account-ln"  onChange={formik.handleChange} value={formik.values.password}  />
            {formik.touched.password && formik.errors.password ? (
          <div className='error'>{formik.errors.password}</div>
        ) : null}
          </div>
        </div>
        
        
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="account-phone">Confirm password</label>
            <input className="form-control" type="password" name="password2" id="account-phone" defaultValue="" value={formik.values.password2} onChange={formik.handleChange}  />
            {formik.touched.password2 && formik.errors.password2 ? (
          <div className='error'>{formik.errors.password2}</div>
        ) : null}
       
          </div>
        </div>
        
        <div className="col-12">
          <hr className="mt-2 mb-3" />
          <div className="d-flex flex-wrap justify-content-between align-items-center">
          
            <button type="submit"  className="btn btn-style-1 "  data-toast data-toast-position="topRight" data-toast-type="success" data-toast-icon="fe-icon-check-circle" data-toast-title="Success!" data-toast-message="Your profile updated successfuly.">Update Profile</button>
             
          <div className='error'>{msg} </div>
       
          </div>
        </div>
      </form>
    </div>
  </div>
</div>


        </>
    )
}

export default Profile
