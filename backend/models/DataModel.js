const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    email:{
        type:String,
        required:true,
        unique:true
    },
    date: {
        type:Date,
        default:Date.now
    }
  }
);
const data = mongoose.model("data", DataSchema);
module.exports = data;