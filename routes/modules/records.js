const express = require('express')
const router = express.Router()

const Record = require('../../models/record')
const Category = require('../../models/category')

router.get('/new', async (req, res) => {
  const categories = await Category.find().lean()
  return res.render('new', { categories })
})

router.post('/', (req, res) => {
  return Record.create({ ...req.body })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

router.get('/:id/edit', async (req, res) => {
  const categories = await Category.find().lean()
  const id = req.params.id
  return Record.findById(id)
    .lean()
    .then((record) => res.render('edit', { record, categories }))
    .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {
  return Record.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router