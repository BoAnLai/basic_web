const express = require('express')
const router = express.Router()
const Record = require('../models/messageboard')

router.get('/messageBoard', (req, res) => {
  const arr = [{ name: 'apple', 'taste': 5 }, { name: 'bananna', 'taste': 2 }, { name: 'cherry', 'taste': 3 }]
  Record.find().lean()
    .then((result) => {
      res.render('messageBoard', { result })
      console.log(result)
      // res.send(result)
      console.log(`go /messageBoard from navbar.js`)
    })
    .catch((err) => {
      console.log(`Error occur in nabar.js`)
      console.log(err)
    })
})

router.get('/:page', (req, res) => {
  res.render(req.params.page)
  console.log(`go /:page from navbar.js`)
})

router.post('/navbar/messageBoard', (req, res) => {
  console.log(req.body)
})

module.exports = router