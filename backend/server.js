const express = require('express')
const cors = require('cors');
const app=express();

require('dotenv').config()

//to destructure the json format in reaable format
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(cors());

//calling the mongodb connection
const dbconfig = require("./config/dbconfig");

//connecting user route
const userRoute = require('./routes/userRoute');

//creating api endpoints 
app.use('/api/user',userRoute);

//creating the port and executing it
const port = process.env.PORT || 8000;
app.listen(port,()=>console.log(`Node is running in ${port}`));