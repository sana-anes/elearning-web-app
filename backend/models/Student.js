const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema(
  {
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
    }
  }
);
const student = mongoose.model("student", StudentSchema);
module.exports = student;