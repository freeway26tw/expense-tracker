const mongoose = require('mongoose')
mongoose.set("strictQuery", false)
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
recordSchema.plugin(autoIncrement, { id: 'record_id_counter', inc_field: '_id' })

module.exports = mongoose.model('Record', recordSchema)