const mongoose=require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
const dataSchema =require('../models/dataModel')

const bcrypt =require('bcryptjs');
const { string } = require('yup/lib/locale');
const signUpTemplate=new mongoose.Schema({

userName:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:[true,'Empty password is not allowed ']

},
date: {
    type:Date,
    default:Date.now
},

 coursesFinished: [{
    id:String,
    title:String,
    topic:String, 
    level:String,
finishDate:{
    type:Date,
    default:Date.now
    },

    language:String,
    estimatedTime:String,
    image :{name:String,
        path:String,
         imageType:String,
  } ,
    score:String,
 
    
}],
coursesNotFinished: [{
    _id:String,
    chapterNumber:Number,
    title:String,
    numberOfChapters:Number,
    level:String,

    topic:String,
    estimatedTime:String,
    language:String,
    image:{
        name:String,
        path:String,
        imageType:String
      },
  
    id:String,
    score:String,
    chapter:{
     
    },
    createdBy: String,
    description:String,
    startDate:{
        type:Date,
        default:Date.now
        },
        startChapterDate:{
            type:Date,
            default:Date.now
            }

}],

classement:
{type:String},

})


/**
 * Validates unique email
 */
 signUpTemplate.path('email').validate(async(email)=>{const emailCount= await mongoose.models.studentTable.countDocuments({email})
 return !emailCount},'Email already exists')



module.exports=mongoose.model('studentTable',signUpTemplate)