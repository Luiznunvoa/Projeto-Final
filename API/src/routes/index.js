const Router = require("express")

const userRoutes = require('./user.routes')
const movieRoutes = require('./movie.routes')
const seatRoutes = require('./seat.routes')
const sectionRoutes = require('./section.routes')

const router = Router()

router.use("/movies", movieRoutes)
router.use('/users', userRoutes)

module.exports = router