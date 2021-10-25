const SignUpTemplateCopy= require('../models/studentModel')
const courseSchema =require('../models/CourseModel')
const bcrypt=require('bcryptjs')

//get infos of a student

const getInfo = async(req,res)=>{
    //email Validation
    console.log(req.params.id)
    console.log("haha")
    SignUpTemplateCopy.findOne({_id:req.params.id})
    .then(student=>{
      res.send(student);
    })
  .catch(error=>res.status(401).json({error}))
};

//Update infos of a student

const updateProfile= async (req, res)=> {
  let id=req.params.id
  let student =req.body
  console.log(student.userName)
  let updatedData={}
  let message="";
   if (req.body.password===""&& req.body.username!=="")
   {         updatedData={  userName:student.userName};
   message="you have successfully updated your username";
  }
 else if(req.body.password!==""&& req.body.username==="") {

   const saltPassword=  await bcrypt.genSalt()     
   const securePassword=await bcrypt.hash(student.password,saltPassword)
   updatedData={ password:securePassword}
   message="you have successfully updated your password";

 }
 else if(req.body.password!==""&& req.body.username!=="") {

  const saltPassword=  await bcrypt.genSalt()     
  const securePassword=await bcrypt.hash(student.password,saltPassword)
  updatedData={ password:securePassword,userName:req.body.userName}
  message="you have successfully updated your profile ";

}    



         SignUpTemplateCopy.findByIdAndUpdate(id,{$set:updatedData})
         .then(()=>{
             res.json({
                message:"message",
             });
             console.log('22')
         })
    
         .catch(error=>{
             res.json({
                 message:'an error occured'
             })
         })
    
        };
 
  //get all courses Taken by a student

const getMyCourses = async(req,res)=>{
  SignUpTemplateCopy.findOne({_id :req.params.id})
  .then(student=>{res.send({CoursesNotFinished:student.coursesNotFinished,CoursesFinished:student.coursesFinished});})
.catch(error=>res.status(401).json({}))
};
//getnomchapter
const getNomchapter= async(req,res)=>{
  console.log("arijarij")
 
  console.log(req.params.idStudent)
  console.log("haha")
  SignUpTemplateCopy.find({_id:req.params.idStudent})
  .then(student=>{
    console.log(student);
    res.send(student);
  })
.catch(error=>res.status(401).json({error}))
};


//get chapter

const getCourse = async(req,res)=>{
  console.log("jajajaj")
  courseSchema.findOne({_id:req.params.idCourse})
  .then(course=>{
    console.log(course);res.send(course);
  })
.catch(error=>res.status(401).json({error}))
};
const ModifyCourseStudent = async(req,res)=>{
  console.log(" addCourseToStudent backend")

  idStudent=req.params.idStudent;
  updatedData={
    //coursesNotFinished: {
         // _id: req.body.id,
          title : req.body.title,
          topic: req.body.topic,
          estimatedTime: req.body.estimatedTime,
          language: req.body.language,
          image: req.body.image,
          chapterNumber: req.body.chapterNumber,
          score: req.body.score,
          chapter: req.body.chapter,
          description: req.body.description,
          createdBy : req.body.createdBy,
        //  }
  }

  console.log('aaaaaaaaaaaa')
 SignUpTemplateCopy.update(
    
        { "_id": idStudent},
    
        {$set: { 'coursesNotFinished.$[i].chapter': req.body.chapter,'coursesNotFinished.$[i].chapterNumber':req.body.chapterNumber,'coursesNotFinished.$[i].score':req.body.score}},
        {arrayFilters: [{'i._id':req.body.id}]}
    
)
  .then((res)=>{console.log("cours ajouté avec succes")})
  .catch((error)=>{console.log("err")})

};

const updateScore = async(req,res)=>{
  console.log("updating score")

  idStudent=req.params.idStudent;

  console.log('aaaaaaaaaaaa')
  var k =parseInt(req.params.scoree)+parseInt(req.params.sco);
  var ch=k.toString();
  console.log(req.params.scoree)
  console.log(req.params.sco)
  console.log(ch)
 SignUpTemplateCopy.update(
    
        { "_id": idStudent},
  
        {$set: { 'coursesNotFinished.$[i].score':k}},
        {arrayFilters: [{'i._id':req.params.idCourse}]}
    
)
  .then((res)=>{console.log("cours ajouté avec succes");console.log(res)})
  .catch((error)=>{console.log("err")})

};

const VerifCourse = async(req,res)=>{
  // SignUpTemplateCopy.findOne({_id :req.params.idStudent,
  //                             coursesNotFinished: {$elemMatch: {_id:req.params.idCourse}}})
  
  console.log("parametre")
  console.log(req.params.idStudent)
  SignUpTemplateCopy.findById({_id :req.params.idStudent},
    {coursesNotFinished: {$elemMatch: {_id:req.params.idCourse}}})
  .then(student=>{
    console.log("the backend")
    res.send(student);console.log(student);})
  .catch((error)=>{
    console.log("verif catch abck ")
    res.status(401).json({})
  })}



const addCourseToStudent = async(req,res)=>{
  console.log(" addCourseToStudent backend")

  idStudent=req.params.idStudent;
  updatedData={
    coursesNotFinished: {
          _id: req.body.id,
          title : req.body.title,
          topic: req.body.topic,
          estimatedTime: req.body.estimatedTime,
          language: req.body.language,
          image: req.body.image,
          chapterNumber: req.body.chapterNumber,
          numberOfChapters : req.body.numberOfChapters,
          score: "0",
          chapter: req.body.chapter,
          description: req.body.description,
          createdBy : req.body.createdBy,
          }
  }
  console.log(req.body.numberOfChpaters)
  SignUpTemplateCopy.findByIdAndUpdate(idStudent,{ $push:updatedData})
  .then((res)=>{console.log("cours ajouté avec succes")})
  .catch((error)=>{console.log("err")})
}

  const addCourseFinishedToStudent = async(req,res)=>{
    console.log(" addCourseToStudent backend")
  
    idStudent=req.params.idStudent;
    updatedData={
      coursesFinished: {
            _id: req.body.id,
            title : req.body.title,
            topic: req.body.topic,
            estimatedTime: req.body.estimatedTime,
            language: req.body.language,
            image: req.body.image,
            chapterNumber: req.body.chapterNumber,
            numberOfChapters : req.body.numberOfChapters,
            score: req.body.score,
            description: req.body.description,
            createdBy : req.body.createdBy,
            startDate:req.body.startDate,
            FinishDate:req.body.FinishDate
            }
    }
    console.log(req.body.numberOfChpaters)
    SignUpTemplateCopy.findByIdAndUpdate(idStudent,{ $push:updatedData})
    .then((res)=>{console.log("cours fini ajouté avec succes")})
    .catch((error)=>{console.log("err")})
  
  }

module.exports={addCourseToStudent,getInfo,getMyCourses,updateProfile,getCourse,getNomchapter,ModifyCourseStudent,updateScore,VerifCourse,addCourseFinishedToStudent}