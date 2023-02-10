const mongoose = require('mongoose')
mongoose.set("strictQuery", false)
const autoIncrement = require('mongoose-sequence')(mongoose)
const Schema = mongoose.Schema
const recordSchema = new Schema({
  _id: Number,
  name: String,
  createdDate: {
    type: Date,
    default: Date.now
  },
  amount: {
    type: Number,
    min: 0
  },
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    index: true,
    required: true
  },
  categoryId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Category',
    index: true,
    required: true
  }
})
recordSchema.plugin(autoIncrement, { id: 'record_id_counter', inc_field: '_id' })

module.exports = mongoose.model('Record', recordSchema)