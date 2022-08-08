const express = require('express')
const app=express();
require('dotenv').config()

//calling the mongodb connection
const dbconfig = require("./config/dbconfig");

//creating the port and executing it
const port = process.env.PORT || 8000;
app.listen(port,()=>console.log(`Node is running in ${port}`));