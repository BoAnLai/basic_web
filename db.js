const mongoose = require('mongoose')
const dbUri = 'mongodb+srv://Mike:mongodbpassword@cluster0.9doaqvp.mongodb.net/?retryWrites=true&w=majority'

//duplicate
mongoose.set("strictQuery", false)

module.exports = async function connectDatabase() {
  try {
    await mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log(`mongoose.connect success in db.js \n`)
  }
  catch (err) {
    console.log(`db.js file can't connect to mongoose, following are error message. \n`)
    console.log(err)
  }
}
console.log(`db.js file is running \n`)