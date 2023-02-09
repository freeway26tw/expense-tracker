const { text } = require('express')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const categorySchema = new Schema({
  _id: Number,
  name: {
    type: String,
    required: true
  }
})
module.exports = mongoose.model('Category', categorySchema)