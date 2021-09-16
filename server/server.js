const express = require('express')
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const appRoutes = require('./Routes/appRoutes.js');
const { response } = require('express');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(request,response)=>{
    console.log('here')
    response.json(`server on http://127.0.0.1:${PORT}`)
});

app.use('/',appRoutes);

app.use((error,request,response,next)=>{
    response.send(error)
});

app.listen(PORT,()=>{
    console.log(`working on PORT ${PORT}`);
});