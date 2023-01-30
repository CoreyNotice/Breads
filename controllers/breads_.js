const express = require('express')
const bread = require('../models/bread.js')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
//GET
breads.get('/', (req, res) => {
    res.render('Index',
      {
        breads: Bread,
        title: 'Index Page'
      }
    )
})
  
// CREATE
breads.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.image) {
    req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.push(req.body)
  res.redirect('/breads')
})

// NEW
breads.get('/new', (req, res) => {
  res.render('new')
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
  // if (Bread[req.params.arrayIndex]) {
  //   res.render('Show', {
  //     bread:Bread[req.params.arrayIndex],
  //     index: req.params.arrayIndex,
  //   })
  // } else {
  //   res.render('404')
  // Terropy operator above//
  Bread[req.params.arrayIndex]
  ? res.render('show',{
   bread: Bread[req.params.arrayIndex],

  })
  :res.send('404');
})

  // Delete
  breads.delete('/:indexArray',(req,res)=>{
     breads.splice(req.params.indexArray,1)
     res.status(303).redirect('/breads')
  })

  // Bread[req.params.arrayIndex]
  //  ? res.render('show',{
  //   bread: Bread[req.params.arrayIndex],

  //  })
  //  :res.send('404');


  
  

module.exports = breads