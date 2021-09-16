const { Router } = require("express");
const Client = require("../db/database.js");
const router = Router();

router.post("/", (request, response, next) => {
  const { userName,email, password } = request.body;

  Client.connect((error, db) => {
    if (error) next(error);
    const dbo = db.db("practice");
    const findQuery = { userName };

    dbo
      .collection("allusers")
      .find(findQuery)
      .toArray((error, result) => {
        if (error) next(error);
        if (!result.length) {
          const insertQuery = { userName,email,password };
          dbo
            .collection("allusers")
            .insertOne(insertQuery, (error, result) => {
              if (error) next(error);
             response.json({signUpStatus:true,status:"user added to database"})
              db.close();
            });
          return;
        }
        response.json({signUpStatus:false,status:"user already exists"})
      });
  });
});

module.exports = router;
