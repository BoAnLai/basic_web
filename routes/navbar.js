const express = require('express')
const router = express.Router()
const Record = require('../models/messageboard')

//Retrieve and show data from MongoDB
router.get('/messageBoard', (req, res) => {
  Record.find().lean()
    .then((result) => {
      res.render('messageBoard', { result })
      console.log(`go /messageBoard from navbar.js\n`)
    })
    .catch((err) => {
      console.log(`Error occur in nabar.js\n`)
      console.log(err)
    })
})

router.post('/messageBoard', (req, res) => {
  console.log(`go router.post`)
  const record = new Record({
    name: req.body.nameInput,
    message: req.body.msgInput
  })

  record.save()
    .then((result) => {
      res.redirect('/navbar/messageBoard')
    }).catch((err) => {
      console.log(`record.save() error in navbar.js`)
      console.log(err)
    })

  console.log(`navbar.js: router.post('messageBoard') is working, you just save below information to mongoDB \n ${record}.`)
})

router.get('/:page', (req, res) => {
  res.render(req.params.page,
  //   (err)=>{
  //   if(err){
  //     res.status(404)
  //     const url = `${req.protocol}://${req.get('host')}${req.originalUrl}`
  //     console.log(`navbar.js: Can't find ${url}`)
  //     console.log(err)
  //     return res.render('404',{url:url})
  //   }
  // }
  )
  console.log(`navbar.js: go router.get('/:page')`)
})



//404 handle

module.exports = router