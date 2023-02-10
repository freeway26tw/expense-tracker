const mongoose = require('mongoose')
mongoose.set("strictQuery", false)
const autoIncrement = require('mongoose-sequence')(mongoose)

const userSchema = new mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    required: true
  }
})
userSchema.plugin(autoIncrement, { id: 'user_id_counter', inc_field: '_id' })

module.exports = mongoose.model('User', userSchema)