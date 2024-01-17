const express = require('express')

const router  = express.Router()

const {createAgent} = require('../controllers/agent')

router.post('/',createAgent)

module.exports = router