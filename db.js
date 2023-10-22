const mongoose = require("mongoose");

const mongoURL = 'mongodb+srv://rrobles33:solo33@cluster0.qarem8e.mongodb.net/bookingrooms'

mongoose.connect(mongoURL , {useUnifiedTopology : true, useNewUrlParser:true})

const connection = mongoose.connection

connection.on('error',()=>{
    console.log('Mong DB connection failed :(')})

connection.on('connected', ()=>{
    console.log('Mongo DB Connection Successful')
})

module.exports = mongoose