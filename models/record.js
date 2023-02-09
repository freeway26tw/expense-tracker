const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema({
  _id: {
    type: Number
  },
  name: String,
  date: {
    type: Date,
    default: Date.now
  },
  amount: {
    type: Number,
    min: 0
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }
}, { _id: false })
module.exports = mongoose.model('Record', recordSchema)