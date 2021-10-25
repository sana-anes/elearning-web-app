const courseSchema =require('../models/CourseModel')
const path=require('path')

const getAllCourses = async(req, res)=>{
    console.log("debut")
     courseSchema.find()
   .then(records=>{
                   console.log(records);
   
                   res.status(200).json(records);
               })
     .catch (error=>
        res.send(error)
     )
}



const getCoursesByLevel = async(req, res)=>{
  var level = req.params.level;
   courseSchema.find().where('level').in(level).exec((err, records) => {    

      console.log(records);

      res.status(200).json(records);
  });
  }
  
        

             
 

const getFile=async (req,res)=>{  
  console.log("getfile")

  let file = req.body.path;
  let fileLocation = path.join(__dirname, '..', '..', 'backend/', file);
  //res.send({filepath:fileLocation})
  
  console.log(`${fileLocation}`)
  res.sendFile(`${fileLocation}`);
//     console.log(req.body.path)
//    var img = fs.readFileSync(req.body.path)
//    res.send(img);

}
module.exports={getAllCourses,getFile,getCoursesByLevel}