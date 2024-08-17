const express = require('express')

const userRoutes = require('./user.routes')
const movieRoutes = require('./movie.routes')
const seatRoutes = require('./seat.routes')
const sectionRoutes = require('./section.routes')

const router = express.Router()

router.use('/users', userRoutes)

module.exports = router