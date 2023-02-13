const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const routes = require('./routes')
const moment = require('moment/moment')

require('./config/mongoose')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()

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

app.use(session({
  secret: 'ThisIsMySecret',
  resave: false,
  saveUninitialized: true
}))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(routes)

app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})