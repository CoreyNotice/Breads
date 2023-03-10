const express = require('express')
const Baker= require('../models/baker.js')
const breads = express.Router()
const Bread = require('../models/bread.js')

breads.get('/', async (req, res) => {
  const foundBakers = await Baker.find().lean() 
  const foundBreads = await Bread.find().limit(2).lean() 
  res.render('index', {
    breads: foundBreads,
    bakers: foundBakers,
    title: 'Index Page'
  })
})




  // res.render('index',
  //   {
  //     breads: Bread,
  //     title: 'Index Page'
  //   }
  // )


// NEW
breads.get('/new', (req, res) => {
  Baker.find()
  .then(foundBakers=>{
    res.render('new',{
      bakers:foundBakers
    })
  })
  
})

// EDIT
breads.get('/:id/edit', (req, res) => {
  Baker.find()
    .then(foundBakers => {
        Bread.findById(req.params.id)
          .then(foundBread => {
            res.render('edit', {
                bread: foundBread, 
                bakers: foundBakers 
            })
          })
    })
})





// SHOW
breads.get('/:id', (req, res) => {
  Bread.findById(req.params.id).populate('baker')
      .then(foundBread => {
        const bakedBy = foundBread.getBakedBy() 
     
        res.render('show', {
            bread: foundBread
        })
      })
    })

  



  // if (Bread[req.params.arrayIndex]) {
  //   res.render('Show', {
  //     bread:Bread[req.params.arrayIndex],
  //     index: req.params.arrayIndex,
  //   })
  // } else {
  //   res.render('404')
  // Terropy operator above//
//   Bread[req.params.arrayIndex]
//   ? res.render('show',{
//    bread: Bread[req.params.arrayIndex],

//   })
//   :res.send('404');
// })

  
// CREATE
breads.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.image) {
    req.body.image = undefined
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.create(req.body)
  // Bread.push(req.body)
  res.redirect('/breads')
})
// UPDATE
breads.put('/:id', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
    .then(updatedBread => {
      console.log(updatedBread) 
      res.redirect(`/breads/${req.params.id}`) 
    })
})




// DELETE
breads.delete('/:id', (req, res) => {
  Bread.findByIdAndDelete(req.params.id) 
    .then(deletedBread => { 
      res.status(303).redirect('/breads')
    })
})


  // Bread[req.params.arrayIndex]
  //  ? res.render('show',{
  //   bread: Bread[req.params.arrayIndex],

  //  })
  //  :res.send('404');


  
  

module.exports = breads




