const mongoose=require('mongoose')


const courseSchema = new mongoose.Schema({
    title:String,
    topic:String,
    level:String,
    language:String,
    description:String,

    estimatedTime:String,
    image:{
      name:String,
      path:String,
      imageType:String
    },
     chapters:[{
           chapterTitle:String,
            chapterTime: String,
            chapterFile:{
              name:String,
              path:String
            },
            points:String,
            quiz:          [{
                                questionText:String,
                                options : [{
                                                optionText: String ,
                                                value:String
                                }], 
                                open: {type:Boolean},
                                points:String,
                                answerKey:String
             }]  
    
    // chapterID:{
    //  // type:String
    //   type:mongoose.Schema.Types.ObjectId,ref:'Chapter'

    //}


     }],
    creationDate:{
    type:Date,
    default:Date.now
    },
    createdBy:{
      type:String
       //type:mongoose.Schema.Types.ObjectId,ref:'teacher'
    }

})


module.exports = mongoose.model('courses',courseSchema)