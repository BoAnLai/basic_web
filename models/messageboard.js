const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recordSchema = new Schema({
  name: String,
  message: String,
}, { timestamps: true })

const Record = mongoose.model('Record', recordSchema)
module.exports = Record