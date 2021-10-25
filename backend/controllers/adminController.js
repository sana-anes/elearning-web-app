let teacher = require("../models/TeacherModel");
//let dataModel = require("../models/DataModel");
let course = require("../models/CourseModel");
let student = require("../models/Student");
const bcrypt= require('bcrypt');
const user = require("../models/User");
const jwt = require("jsonwebtoken");
const path=require('path')

/***************************************/
// async function addData(req, res) {
//   console.log(req.body);

//   const email = req.body.email;
//   const newData= new dataModel({
//     email,
//   });
//   newData
//     .save()
//     .then(() => res.json("Data Added"))
//     .catch((err) => {
//       res.send(err);
//       console.log(err);
//     });
// }

/*******************la liste des enseignants********************/
function getAllTeachers(req, res) {

  teacher.find()
    .then((teachers) => {
      res.json(teachers)})
    .catch((err) => res.status(400).json("Error: " + err));
}

/******************* un enseignant ********************/

function getOneTeacher(req, res) {
  console.log("getOneTeacher")
  console.log(req.params.ch)
  teacher
    .find({firstname: req.params.ch})
    .then((teachers) => {res.json(teachers)})
    .catch((err) => res.status(400).json("Error: " + err));
    
}

/*******************ajouter un enseignant********************/

async function addTeacher(req, res) {
  console.log(req.body);

  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const specialization = req.body.specialization;
  const email = req.body.email;
  const password = req.body.password;
  const phonenumber = Number(req.body.phonenumber);
  // const salary = Number(req.body.salary);

  const newTeacher = new teacher({
    firstname,
    lastname,
    specialization,
    email,
    password,
    phonenumber,
    // salary,
  });
  if(password){
    const saltPassword= await bcrypt.genSalt()
    const securePassword=await bcrypt.hash(req.body.password,saltPassword)
    teacher={...newTeacher, password:securePassword}
}
  newTeacher
    .save()
    .then(() => res.json("teacher Added"))
    .catch((err) => {
      // console.log(res.status(400).json('Error: ' + err));
      res.send(err);
      console.log(err);
    });
}
/****** */
function getOneCourse(req, res) {
  course
    .find({title: req.params.ch})
    .then((courses) => {
      res.status(200).json(courses);
    })

    .catch((err) => res.status(400).json("Error: " + err));
}
/********************un cours*******************/

function getCourse(req, res) {
  course
    .findById(req.params.id)
    .then((courses) => {
      res.status(200).json(courses.chapters);
    })

    .catch((err) => res.status(400).json("Error: " + err));
}
/*******************tous les cours********************/
function getAllCourses(req, res) {
  course
    .find()
    .then((courses) => res.json(courses))
    .catch((err) => res.status(400).json("Error: " + err));
}
/******************effacer un cours*********************/
function deleteCourse(req, res) {
  course
    .findByIdAndDelete(req.params.id)

    .then(() => res.json("course deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
}
/*******************tous les etudiants********************/
function getAllStudents(req, res) {
  student
    .find()
    .then((students) => res.json(students))
    .catch((err) => res.status(400).json("Error: " + err));
}
/*******************un etudiant********************/
function getOneStudent(req, res) {
  student
    .find({userName : req.params.ch})
    .then((students) => res.json(students))
    .catch((err) => res.status(400).json("Error: " + err));
}
/******************supprimer un etudiant*********************/
function deleteStudent(req, res) {
  student
    .findByIdAndDelete(req.params.id)
    .then(() => res.json("student deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
}
/******************* supprimer un enseignant ********************/

function deleteTeacher(req, res) {
  teacher
    .findByIdAndDelete(req.params.id)

    .then(() => res.json("teacher deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
}


/******************* les info d'admin ********************/

function getInfo(req, res) {
  console.log(req.headers.authorization)
  const token = req.headers.authorization.split(" ")[1];

  jwt.verify(token, "RANDOM_TOKEN_SECRET", (err, decodedToken) => {
const id=decodedToken.userId;
console.log(id)
user
.findById(id)
.then((users) => {
  console.log(users)
  res.json(users)})
.catch((err) => res.status(400).json("Error: " + err));
  }
)}

/******************* mettre a jour les infos d'admin ********************/
 
async function updateProfile(req, res) {
  let id=req.params.id
  let ch=req.params.ch
  console.log(id, ch)
    let updatedData={}
    if(ch=="Email"){
      updatedData=  {   
        email:req.body.email,       
      }}
if(ch=="Password"){
  updatedData=  {
             
    password:"",      
}}
if(ch=="Name"){
  updatedData=  {
             
    firstname:req.body.firstName,   
    lastname: req.body.lastName    
}
    }
    console.log(updatedData)
    if(!req.body.npass){

      user.findByIdAndUpdate(id,{$set:updatedData})
         .then(()=>{
             res.json({
                 message:'teacher updated successfully'
             })
         })
         .catch(error=>{
             res.json({
                 message:'an error occured'
             })
         })
    }
    else {
      const saltPassword=  await bcrypt.genSalt()
      
         const securePassword=await bcrypt.hash(req.body.npass,saltPassword)
         updatedData={ password:securePassword}
         user.findByIdAndUpdate(id,{$set:updatedData})
         .then(()=>{
             res.json({
                 message:'teacher updated successfully'
             })
         })
    
         .catch(error=>{
             res.json({
                 message:'an error occured'
             })
         })
    }

}
const getFile=(req,res)=>{  

  let file = req.body.path;
  let fileLocation = path.join(__dirname, '..', '..', 'backend/', file);
  //res.send({filepath:fileLocation})
  res.sendFile(`${fileLocation}`);
//     console.log(req.body.path)
//    var img = fs.readFileSync(req.body.path)
//    res.send(img);

}
const getCours=(req,res)=>{
  let courseID=req.params.id
  course.findById(courseID)
.then(response=>{
    res.json({
        response
    })
})
.catch(error =>{
    res.json({
        message:'An error occured'
    })
})


}

module.exports = {
  getAllTeachers,
  getOneTeacher,
  addTeacher,
  getCourse,
  getAllCourses,
  deleteCourse,
  getAllStudents,
  getOneStudent,
  deleteStudent,
  deleteTeacher,
  updateProfile,
  getInfo,
  getOneCourse,
  getCours,getFile,
 //addData,
};
