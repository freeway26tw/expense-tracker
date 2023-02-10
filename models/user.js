const mongoose = require('mongoose')
const autoIncrement = require('mongoose-sequence')(mongoose)

const userSchema = new mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    required: true
  }
})
userSchema.plugin(autoIncrement)

module.exports = mongoose.model('User', userSchema)