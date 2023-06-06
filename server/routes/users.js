const express = require('express')
const router = express.Router()

const pool = require('../connectMysql/index')

const { successResponse } = require('./../config/response')

/* GET users listing. */
router.get('/', function(req, res, next) {
  
})

router.get('/info', function(req, res, next) {
  pool.query('select * from users', (err, data, field) => {
    if (!err) {
      res.json(successResponse(data))
    }
  })
})

module.exports = router
