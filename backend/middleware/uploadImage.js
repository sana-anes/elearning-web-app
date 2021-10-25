const path = require('path');
const multer = require("multer")

const PATH="./uploads/courseImage";


let storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,PATH);
    },
    filename: function(req, file, cb){
       cb(null,file.originalname.toLowerCase().replace(/ /g, '_'));
    }
 });

 let uploadImage = multer({
    storage: storage,
 })

 module.exports=uploadImage