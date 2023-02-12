const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')



const routes = require('./routes')
const moment = require('moment/moment')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()

// const db = mongoose.createConnection(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', (error) => {
  console.error('database error', error)
})

db.once('open', () => {
  console.log('mongodb connected!')
})

app.engine('hbs', exphbs.engine({
  defaultLayout: 'main', extname: '.hbs',
  helpers: {
    prettifyDate: function (date, format) {
      const mmnt = moment(date);
      return mmnt.format(format)
    }
  }
}))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(methodOverride('_method'))

app.use(routes)




app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})