
const teacherSchema =require('../models/TeacherModel')
const bcrypt= require('bcrypt')


module.exports = {

 viewProfile:async(req,res)=>{
    let teacherID=req.params.id
  try {

    await  teacherSchema.findById(teacherID)
    .then(response=>{
        res.json({
            response
        })
    })

} catch (error) {
    res.send(error)
}

},



//update teacher profile

 updateProfile:(async(req,res)=>{
    let teacherID=req.body.userId
   let updatedData={
            firstname:req.body.firstName,
            lastname:req.body.lastName,
            specialization:req.body.specialization,
            phonenumber:req.body.phone,
            email:req.body.email,       
    }
    if(req.body.password){
        const saltPassword= await bcrypt.genSalt(10)
        const securePassword=await bcrypt.hash(req.body.password,saltPassword)
        teacher={...teacher, password:securePassword}
    }
    
   
    teacherSchema.findByIdAndUpdate(teacherID,{$set:updatedData})
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
})






}