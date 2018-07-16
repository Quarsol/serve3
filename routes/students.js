const express = require('express')
const router = express.Router()
const query = require('../db/query.js')

router.get('/', (req, res, next) => {
  query.getStudents()
  .then(serve3 => {
    return res.json({ data: serve3 })
  }).catch(next)
})

router.get('/:id', (req, res, next) => {
  query.getStudentsById(req.params.id)
  .then(serve3 => {
    if (serve3){
      return res.json({ data: serve3 })
    } else {
      return res.json({ error: 'Not found' })
    }
  }).catch(next)
})



module.exports = router
