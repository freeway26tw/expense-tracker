module.exports = function(SEED_DATA, connectSchema) {

  const mongoose = require('mongoose')

  if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }

  mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
      console.log('MONGO CONNECTION OPEN!')
    })
    .catch((err) => {
      console.log(err)
    })

  const seedDB = async () => {
    await connectSchema.deleteMany({})
    await connectSchema.create(SEED_DATA)
  }

  seedDB().then(() => {
    mongoose.connection.close()
  })
}

