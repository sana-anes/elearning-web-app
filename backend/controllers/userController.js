const SignUpTemplateCopy= require('../models/studentModel')
const jwt =require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const secret = 'test';
const user= require('../models/User')
const teacher= require('../models/TeacherModel')
//register
 const signup = async(req,res)=>{
  try{
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(req.body.password,salt);
    const signedUpUser=new SignUpTemplateCopy({
  userName: req.body.userName,
   email: req.body.email,
  password: hashedPassword
  });
 
  
  signedUpUser.save()
  .then (data=>{console.log(data);res.send(data);})
  .catch (error=>{console.log(error);res.send(error);})
}
  catch{res.status(500).json({message:'Somehting went wrong'})}
  };




//login
const signin = async(req,res)=>{
    //email Validation
    SignUpTemplateCopy.findOne({email:req.body.email})
    .then(student=>{
      if (student)
      {
        // //Password validation
        // bcrypt.compare(req.body.password, student.password).then(valid=>{
        //   if(!valid){res.send({message:"incorrectpassword"})} else {
      //Create and assign a token 
      try{
      const token=jwt.sign({userName:student.userName, id:student._id},secret,{expiresIn:"5h"});
      res.status(200).json({message:"loggedinAsStudent",result:student,token});}
      catch{
        
        res.status(500).json({message:'Somehting went wrong'})}

      //}
    //})
        }
     else {
              user
              .findOne({ email: req.body.email })
              .then((userr) => {
                if(userr){
                  const userToken = {
                          token: jwt.sign({ userId: userr._id }, "RANDOM_TOKEN_SECRET", {
                            expiresIn: "24h",
                          }),
                        };
                      
                   res.status(200).json({message:"admin",result:userr,userToken});
                  
                  }
              

                else {

                  teacher
                  .findOne({ email: req.body.email })
                  .then((teacher) => {
                        if(teacher){
                                  //Password validation
                                  if(!(req.body.password=== teacher.password)){res.send({message:"incorrect password"})} else {
                              //Create and assign a token 
                             const name =`${teacher.firstname} ${teacher.lastname}`;
                             const token=jwt.sign({userName:name, id:teacher._id},secret,{expiresIn:"24h"});

                                
                              
                           res.status(200).json({message:"loggedinAsTeacher",result:teacher,token});
                          
                              }
                             
                            
              
                      }else{
                          console.log("Utilisateur non trouvé !");
                          return res.status(401).json({ error: "Utilisateur non trouvé !" });
                        }


                  })

                 }


                  
                });
              }
        
          
    })
    .catch(error=>res.status(500).json({error}));

  }     

    module.exports={signup,signin};

