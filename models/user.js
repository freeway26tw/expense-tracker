const { text } = require('express')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
  _id: {
    type: Number
  },
  name: {
    type: String,
    required: true
  }
}, { _id: false })
module.exports = mongoose.model('User', userSchema)