const express = require('express')
const mongoose = require('mongoose')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()

const db = mongoose.createConnection(process.env.MONGODB_URI)

db.on('error', (error) => {
  console.error('database error', error)
})

db.once('open', () => {
  console.log('mongodb connected!')
})

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})