const mongoose = require('mongoose')
const autoIncrement = require('mongoose-sequence')(mongoose)

const recordSchema = new mongoose.Schema({
  _id: Number,
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
    type: Number,
    ref: 'User'
  },
  categoryId: {
    type: Number,
    ref: 'Category'
  }
})
recordSchema.plugin(autoIncrement)

module.exports = mongoose.model('Record', recordSchema)