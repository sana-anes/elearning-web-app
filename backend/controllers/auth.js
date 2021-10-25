let user = require("../models/User");
const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  console.log("Time:", Date.now());
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, "RANDOM_TOKEN_SECRET", (err, decodedToken) => {
    if (err) return res.status(401);
    user
      .findById(decodedToken.userId)
      .then((user) => {
        if (user) {
          next();
        }
      })
      .catch((user) => {
        if (!user) {
          res.status(400);
        }
      });
  });
}
// function adminId(req, id) {
//   const token = req.headers.authorization.split(" ")[1];

//   console.log(token)
//   jwt.verify(token, "RANDOM_TOKEN_SECRET", (err, decodedToken) => {
//     console.log(decodedToken.userId)
// var id=decodedToken.userId
//     return id
//   });
// }
module.exports = { verifyToken };
