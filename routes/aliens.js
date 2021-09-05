const express= require('express')
const router = express.Router()
const Alien = require('../models/alien')
// TO get all data 
router.get('/', async(req, res)=>{
    try{
        const aliens = await Alien.find()
        res.json(aliens)

    }catch(err){
        res.send('Error', +err)
    }
})
// add the data 
router.post('/', async(req, res)=>{
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub : req.body.sub
    })

    try{
        const a1= await alien.save()
        res.json(a1)

    }catch(err){
        res.send('Error !'+ err)
    }
})

// find the data by Id
router.get('/:id', async(req, res)=>{
    try{
        const alien = await Alien.findById(req.params.id)
        res.json(alien)

    }catch(err){
        res.send('Not found', +err)
    }
})


// export module 
module.exports = router


// Update the data
router.post('update/:id', async(req, res)=>{
    try{
        

    }catch{
        res.status(400).send('Data Not Found')
    }
})