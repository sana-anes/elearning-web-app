var router = require('express').Router()
const {viewProfile,updateProfile}= require('../controllers/teacherController')
const { uploadFile,deleteFile,getFile,addCourse, getAllCourseOfTeacher,deleteCourse ,getCourse,editCourse,getCourseByLevel}= require('../controllers/TeacherCourseController')
const upload=require('../middleware/upload')
const uploadImage=require('../middleware/uploadImage')



router.route("/viewProfile/:id").get(viewProfile)
router.route("/updateProfile").post(updateProfile)
router.route("/courseList/:id").get(getAllCourseOfTeacher)
router.route("/courseListByLevel/:level").get(getCourseByLevel)
router.route("/addCourse").post(uploadImage.single('image'),addCourse) ///
router.route("/deleteCourse/:id").get(deleteCourse)
router.route("/getCourse/:id").get(getCourse)
router.route("/editCourse/").post(uploadImage.single('image'),editCourse)
router.route("/uploadFile/").post(upload.single('files'),uploadFile)
router.route("/deleteFile/").post(deleteFile)
router.route("/getFile/").post(getFile)
router.route("/class").post(getClass)


  
function getClass(req, res) {
    let info=req.body.data
let x=JSON.stringify(info)
     var spawn = require("child_process").spawn;
  
    var process = spawn('python',["./classification/classification.py",x]) 
   
    process.stdout.on('data', function(data) {
        const ress=JSON.parse(data.toString());
        console.log(ress);
        res.send(ress);


     } )
  

  

}

module.exports = router;