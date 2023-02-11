const mongoose = require('mongoose')
mongoose.set("strictQuery", false)
const autoIncrement = require('mongoose-sequence')(mongoose)
const Schema = mongoose.Schema
const recordSchema = new Schema({
  _id: Number,
  name: String,
  date: {
    type: Date
  },
  amount: {
    type: Number,
    min: 0
  },
  // userId: {
  //   type: Number,
  //   ref: 'User',
  //   index: true,
  //   required: true
  // },
  // categoryId: {
  //   type: Number,
  //   ref: 'Category',
  //   index: true,
  //   required: true
  // }
})
recordSchema.plugin(autoIncrement, { id: 'record_id_counter', inc_field: '_id' })

module.exports = mongoose.model('Record', recordSchema)