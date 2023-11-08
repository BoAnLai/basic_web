const express = require('express')
const app = express()
const port = 3000
const { create } = require('express-handlebars')

const hbsHelpers = require('./hbsHelpers')
const hbs = create(hbsHelpers)

app.engine('handlebars', hbs.engine) //({ defaultLayout: 'main' }) this snippet will cause crash
app.set('view engine', 'handlebars')
try {
  app.set('views', './views') //res.render go the path "/views/"
} catch (err) {
  console.log(`app.set('views', './views') ERROR in app.js`)
  console.log(err)
}


app.use(express.static('public'))
//static resource go the path "/public/" so if client type "/javascript/a.js", he'll get the file /public/javascript/a.js

app.use(express.urlencoded({ extended: true })) //pass all url encoded data into req object, so we can access it


//route start below
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

//404 handle
// app.use((req,res) => {
//   res.status(404)
//   const url = `${req.protocol}://${req.get('host')}${req.originalUrl}`
//   console.log(`app.js: Can't find ${url}`)
//   res.render('404', { url: url })
// })

//db connection
const connectDatabase = require('./db')
connectDatabase().then(() => app.listen(port, () => {
  console.log(`app.js: express is running on http://localhost:${port} \n`)
}))
  .catch((err) => console.log(err))

