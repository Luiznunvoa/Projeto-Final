const express = require('express')

const userRoutes = require('./user.routes')
const movieRoutes = require('./movie.routes')
const seatRoutes = require('./seat.routes')
const sessionRoutes = require('./session.routes')

const router = express.Router()

router.use('/users', userRoutes)
router.use('/sessions', sessionRoutes);

module.exports = router