const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TeacherSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
      minlength: 3,
    },
    lastname: {
      type: String,
      minlength: 3,
    },
    specialization: {
      type: String,
    },
    phonenumber: {
      type: Number,
      minlength: 8,
    },
    email: {
      unique: true,
      type: String,
    },
    password: {
      type: String,
    },

    
  },
  {
    timestamps: true,
  }
);
const teacher = mongoose.model("teacher", TeacherSchema);
module.exports = teacher;