const User = require('../user')
const Record = require('../record')
const mongoose = require('mongoose')

const SEED_DATA = [
  [{ name: '廣志' }],
  [{ name: '午餐', amount: 60, userId: 1000, categoryId: 4 }]
]

// 使用mongoose.js，利用Schema產生SEED_DATA資料
require('../../config/mongoose')(SEED_DATA, [User, Record])