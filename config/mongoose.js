module.exports = function (SEED_DATA, connectSchema) {

  const mongoose = require('mongoose')
  mongoose.set("strictQuery", false)

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
    for (let i = 0; i < SEED_DATA.length; i++) {
      await connectSchema.create(SEED_DATA[i])
    } 
  }

  seedDB().then(() => {
    mongoose.connection.close()
  })
}

