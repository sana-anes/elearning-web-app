const express=require('express');
const router =express.Router();
const {signin,signup} =require('../controllers/userController.js')
const {addCourseFinishedToStudent,addCourseToStudent,getInfo,VerifCourse,updateProfile,getMyCourses,getCourse,getNomchapter,ModifyCourseStudent,updateScore} =require('../controllers/studentController.js')
const {getAllCourses,getCoursesByLevel,getFile} =require('../controllers/courseController.js')

const {auth} =require('../middleware/auth')


const secret='test';
//auth 
router.post('/signup',signup)
router.post('/signin',signin)
//student
router.get('/student/myprofile/:id',auth,getInfo)
router.post('/student/myprofile/:id',auth,updateProfile)
router.get('/student/mycourses/:id',auth,getMyCourses)
router.get('/student/course/:idStudent/:idCourse',getNomchapter)
router.get('/student/course/:idCourse',getCourse)

router.post('/ModifyCourseStudent/:idStudent',auth,ModifyCourseStudent)
router.post('/updateScore/:idStudent/:idCourse/:scoree/:sco',auth,updateScore)


//homepage
router.get('/home/courses',getAllCourses)
router.get('/home/course/:level',getCoursesByLevel)
router.get('/:idStudent/:idCourse',auth,VerifCourse)
router.post('/addcourse/:idStudent',auth,addCourseToStudent);
router.post('/addcourse/:idStudent',auth,addCourseFinishedToStudent);

router.post('/home/getfile',getFile)
module.exports=router