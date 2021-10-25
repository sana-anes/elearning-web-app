const courseSchema =require('../models/CourseModel')
const teacherSchema =require('../models/TeacherModel')
const fs =require('fs')
const path=require('path')

//create new course
const addCourse=(req,res)=>{ 
console.log(req.body);
console.log(req.file);
const chapters=JSON.parse(req.body.chapters);
console.log(chapters);
const image={name: req.file.filename, path:req.file.path, imageType:req.file.mimetype}
        const course = new courseSchema({
            createdBy:req.body.createdBy,
            title:req.body.title,
            topic:req.body.topic,
            level:req.body.level,
            description:req.body.description,
            language:req.body.language,
            estimatedTime:req.body.estimatedTime,
            image:image,
            chapters:chapters,
         })
         course.save()
            .then(data=>{
                res.json(data)
            })
            .catch(error=>{
                res.json(error)
            })
   }
    
    
     
    

      //get all courses of a teacher
       const getAllCourseOfTeacher= async(req, res)=>{
        try {
              var teacherId = req.params.id;
            //var teacherId = mongoose.Types.ObjectId(req.params.id);


                   await courseSchema.find().where('createdBy').in(teacherId).exec((err, records) => {    //.sort({ createdAt: 'desc' });
                    //await courseSchema.find({createdBy:teacherId}).exec((err, records) => {

                       console.log(records);
       
                       res.status(200).json(records);
                   });
        } catch (error) {
            res.send(error)
        }
    }

     //get all courses of a teacher
     const getCourseByLevel= async(req, res)=>{
        try {
              var level = req.params.level;


                   await courseSchema.find().where('level').in(level).exec((err, records) => {    

                       console.log(records);
       
                       res.status(200).json(records);
                   });
        } catch (error) {
            res.send(error)
        }
    }


 //get single course
 const getCourse=(req,res)=>{
    let courseID=req.params.id
  courseSchema.findById(courseID)
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




      //delete course
    
      const deleteCourse=(req,res,next)=>{
        let courseID=req.params.id
        courseSchema.findByIdAndDelete(courseID)
        .then(()=>{
            res.json({
                message:'course deleted successfully'
            })
        })
        .catch(error=>{
            res.json({
                message:'an error occured'
            })
        })
    }

    //--------edit course----------

   const editCourse=(async(req,res)=>{
        let courseID=req.body._id
       console.log(req.body);
       console.log(req.file);
       const chapters=JSON.parse(req.body.chapters);
       var imge=JSON.parse(req.body.img);
       if(req.file!==undefined)     imge={name: req.file.filename, path:req.file.path, imageType:req.file.mimetype}
       
               const updatedData = {
                   title:req.body.title,
                   topic:req.body.topic,
                   level:req.body.level,
                   description:req.body.description,
                   language:req.body.language,
                   estimatedTime:req.body.estimatedTime,
                   image:imge,
                   chapters:chapters,
                }
            courseSchema.findByIdAndUpdate(courseID,{$set:updatedData})
                   .then(()=>{
                       res.json({
                           message:'course updated successfully'
                       })
                   })
                   .catch(error=>{
                       res.json({
                           message:'an error occured'
                       })
                   })
    })





    //**************** */
    
    const uploadFile=(req,res)=>{  
  console.log(req.file)
  res.send(req.file);
  
}
   
const deleteFile=(req,res)=>{  
    console.log(req.body.path)
    fs.unlink(req.body.path, function() {
        res.send ({
          status: "200",
          responseType: "string",
          response: "success"
        });


    
 });

}


const getFile=(req,res)=>{  

    let file = req.body.path;
    let fileLocation = path.join(__dirname, '..', '..', 'backend/', file);
    res.sendFile(`${fileLocation}`);


}





    module.exports = {
    deleteFile, uploadFile, getFile,addCourse , getAllCourseOfTeacher,deleteCourse ,getCourse ,editCourse ,getCourseByLevel
    
    }

 