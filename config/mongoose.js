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

  // 為了要讓SEED_DATA按照順序去匯入到DB，所以採用async await
  // 讓資料在匯入到DB時，能依據順序去做auto increment
  // const seedDB = async () => {
  //   for (let i = 0; i < connectSchema.length; i++) {
  //     for (let j = 0; j < SEED_DATA[i].length; j++) {
  //       await connectSchema[i].create(SEED_DATA[i][j])
  //     }
  //   }
  // }

  // 參考 https://stackoverflow.com/questions/31426740/how-to-return-many-promises-and-wait-for-them-all-before-doing-other-stuff

  function schemaCreateAsync(connectSchema, SEED_DATA) {
    return new Promise((resolve) => {
      resolve(connectSchema.create(SEED_DATA))
    })
  }

  function createSeed() {
    const promises = []

    for (let i = 0; i < connectSchema.length; i++) {
      for (let j = 0; j < SEED_DATA[i].length; j++) {
        promises.push(schemaCreateAsync(connectSchema[i], SEED_DATA[i][j]))
      }
    }

    Promise.all(promises)
      .then((results) => {
        console.log(results)
      })
      .then(() => {
        mongoose.connection.close()
      })
      .catch(error => console.log(error))
  }

  createSeed()
}

