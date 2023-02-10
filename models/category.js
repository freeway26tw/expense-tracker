const mongoose = require('mongoose')
const autoIncrement = require('mongoose-sequence')(mongoose)

const categorySchema = new mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    required: true
  }
})
categorySchema.plugin(autoIncrement)

module.exports = mongoose.model('Category', categorySchema)