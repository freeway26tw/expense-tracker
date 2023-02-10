const Category = require('../category')

const CATEGORY = {
  家居物業: "https://fontawesome.com/icons/home?style=solid",
  交通出行: "https://fontawesome.com/icons/shuttle-van?style=solid",
  休閒娛樂: "https://fontawesome.com/icons/grin-beam?style=solid",
  餐飲食品: "https://fontawesome.com/icons/utensils?style=solid",
  其他: "https://fontawesome.com/icons/pen?style=solid"
}

const SEED_CATEGORIES = [{ name: '家居物業' }, { name: '交通出行' }, { name: '休閒娛樂' }, { name: '餐飲食品' }, { name: '其他' }]

require('../../config/mongoose')(SEED_CATEGORIES, Category)