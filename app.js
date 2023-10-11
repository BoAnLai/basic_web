const express = require('express')
const app = express()
const port = 3000
const { engine } = require('express-handlebars')
// const { create } = require('express-handlebars')

// hbsHelpers()
// function hbsHelpers(handlebars) {
//   return handlebars.create({
//     helpers: {
//       plusOne: function (value, options) {
//         return parseInt(value) + 1
//       }
//     }
//   })
// }

// const hbshelper = engine({
//   helpers: {
//     print() {
//       console.log(`The helper works`)
//     }
//   }
// })
// engine.registerHelper('inc',(value,options)=>{
//   return parseInt(value) + 1
// })

app.engine('handlebars', engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
try {
  app.set('views', './views')
} catch (err) {
  console.log(`app.set('views', './views') ERROR`)
  console.log(err)
}
//res.render go the path "/views/"

app.use(express.static('public'))
//static resource go the path "/public/" so if client type "/javascript/a.js", he'll get the file /public/javascript/a.js

app.use(express.urlencoded({ extended: true })) //pass all url encoded data into req object, so we can access it


//app.use(middlware)
app.get('/', (req, res) => {
  res.render('homepage')
})

const navbar = require('./routes/navbar')
app.use('/navbar', navbar)


//db management
const Record = require('./models/messageboard')
app.get('/dbdata', (req, res) => {
  Record.find()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err)
    })
})


//post request
app.post('/navbar/messageBoard', (req, res) => {
  // const Record = require('./models/messageboard')
  const record = new Record({
    name: req.body.nameInput,
    message: req.body.msgInput
  })

  record.save()
    .then((result) => {
      res.redirect('/navbar/messageBoard')
    }).catch((err) => {
      console.log(err)
    })

  console.log(`app.post('navbar/messageBoard') is working from app.js, you just save below information  to db \n ${record}.`)
})


//db connection
const connectDatabase = require('./db')
connectDatabase().then(() => app.listen(port, () => {
  console.log(`express is running on http://localhost:${port} \n`)
}))
  .catch((err) => console.log(err))

