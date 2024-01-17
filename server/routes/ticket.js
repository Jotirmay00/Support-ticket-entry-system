const express = require('express')

const router = express.Router()

const {createTicket,getAllTickets,getTicket} = require('../controllers/ticket')

router.route('/').get(getAllTickets).post(createTicket)
router.route('/:id').get(getTicket)

module.exports = router