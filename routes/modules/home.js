const express = require('express')
const router = express.Router()

const Category = require('../../models/category')
const Record = require('../../models/record')

router.get('/', async (req, res) => {
  const categories = await Category.find().lean()
  const records = await Record.find().lean().sort({ _id: 'desc' })

  // 為了讓records map到category的icon
  const record_category = records.map(record => {
    const record_check = categories.filter(c => c._id === record.categoryId)
    record_check ? record.icon = record_check[0].icon : ''
    return record
  })

  res.render('index', { record_category, categories })
})

module.exports = router