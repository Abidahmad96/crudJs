const express = require('express')
const  Mongoose  = require('mongoose')


const alienSchema =  new Mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    tech:{
        type: String,
        required: true
    },
    sub:{
        type: Boolean,
        require: true,
        default: false

    }
})

module.exports = Mongoose.model('Alien', alienSchema)