const express = require ('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
var bodyparser = require('body-parser');
const router = require('./routes/router')
const cors=require('cors')
const user =require('./models/User')
const bcrypt =require('bcrypt')
const jwt = require("jsonwebtoken")
const session=require('express-session')


const app =express()

dotenv.config() //hide (secure) the password and the info about the table 

mongoose.connect(process.env.DATABASE_ACCESS,()=>{console.log("database connected")})

app.use(express.json()) //activate body-parser
app.use(cors()) // activate middleware

app.use(bodyparser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }))
  app.use(bodyparser.json());
  app.use(express.static(__dirname));




  app.post("/form", (req, res, next) => {
    user
      .findOne({ email: req.body.email })
      .then((user) => {
        if (!user) {
          console.log("Utilisateur non trouvé !");
          return res.status(401).json({ error: "Utilisateur non trouvé !" });
        }
        console.log("mail cvv")
        bcrypt.compare(req.body.password, user.password)
  .then ((valid)=>{
    console.log("bycrypt")
    if (!valid) {
      console.log("Mot de passe incorrect !");
      return res.status(401).json({ error: "Mot de passe incorrect !" });
    }
  
    const userToken = {
      token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
        expiresIn: "24h",
      }),
    };
    res
      .status(200)
      .json(userToken);
  })
  .catch(error=>res.status(500).json({error}));
  })
        
      .catch((error) => {
        res.status(500).json({ error });
      });
  });


  app.use(session({
    secret: process.env.SESSION_SECRET,
      saveUninitialized:true,
      resave:false,
      cookie:{httpOnly:true,
        maxeAge:parseInt(process.env.SESSION_MAX_AGE)
    }
}))






 
app.use('',router)
app.listen(4000,()=>console.log("server is up running"))
