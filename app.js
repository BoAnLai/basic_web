const express = require('express')
const app = express()
const port = 3000
const { engine } = require('express-handlebars')



app.engine('handlebars', engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.set('views', './views')
//res.render go the path "/views/"

app.use(express.static('public'))
//static resource go the path "/public/" so if client type "/javascript/a.js", he'll get the file /public/javascript/a.js


app.get('/', (req, res) => {
  res.render('homepage')
})

app.get('/:dynamicRouter', (req, res) => {
  res.render(req.params.dynamicRouter)
})



app.listen(port, () => {
  console.log(`express is running on http://localhost:${port}`)
})

