const express = require('express')
const mongoose = require('mongoose')
const url = "mongodb://localhost/AlienDBex"
const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

// to use json 
app.use(express.json())

// define routes file 
const alienRouter = require('./routes/aliens')


// use aliens.js route file 
app.use('/aliens',alienRouter)

con.on('open',function(){
    console.log('connected...')
})

 app.listen(9000,()=>{
     console.log('server started...')
 })