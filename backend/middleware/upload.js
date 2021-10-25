const path = require('path');
const multer = require("multer")

const PATH="./uploads/chapterFile";


let storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,PATH);
    },
    filename: function(req, file, cb){
       cb(null,file.originalname.toLowerCase().replace(/ /g, '_'));
    }
 });

 let upload = multer({
    storage: storage,
 })

 module.exports=upload