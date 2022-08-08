const mongoose = require('mongoose');
const connect = mongoose.connect(process.env.MONGO_URL)

const connection = mongoose.connection;

connection.on('connected',()=>{
    console.log('Mongodb Connected')
});

connection.on('error',(error)=>{
    console.log('Connection Error',error)
});

module.exports = mongoose;