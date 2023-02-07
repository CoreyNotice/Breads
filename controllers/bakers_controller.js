// dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed.js')
const breads = require('./breads_.js')

baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
        .then(()=>{
        res.redirect('/breads')
        })
})
breads.get('/new', (req, res) => {
    Baker.find()
        .then(foundBakers => {
            res.render('new', {
                bakers: foundBakers
            })
      })
})



// export
module.exports = baker                    

