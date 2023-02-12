const express = require('express')
const router = express.Router()

const Category = require('../../models/category')
const Record = require('../../models/record')

router.get('/', async (req, res) => {
  const categories = await Category.find().lean()
  const records = await Record.find().lean()
  // 為了讓records map到category的icon
  const record_category = records.map(record => {
    const record_check = categories.filter(c => c._id === record.categoryId)
    record_check ? record.icon = record_check[0].icon : ''
    return record
  }).sort( //為了讓最新一筆呈現在最上方，所以sort
    function (a, b) {
      // Convert string dates into `Date` objects
      const date1 = new Date(a.date);
      const date2 = new Date(b.date);

      return date2 - date1;
    }
  )

  console.log(record_category)

  res.render('index', { record_category, categories })
})

module.exports = router