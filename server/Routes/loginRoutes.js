const { Router } = require('express');
const router = Router();
const client = require('../db/database.js');



router.post('/',(request,response)=>{
    const { userName , password } = request.body;
    console.log(userName,password);

    client.connect((error,db)=>{
        if(error) next(error);
        const dbo = db.db('practice');
        const findQuery = {userName,password};
        dbo.collection('allusers').find(findQuery).toArray((error,result)=>{
            if(error) next(error);
            if(result.length) return response.json(result);
            response.json('no such user exists')

        })
    });
});

module.exports = router;