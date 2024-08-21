const Router = require("express");

const userRoutes = require('./user.routes');
const movieRoutes = require('./movie.routes');
const seatRoutes = require('./seat.routes');
const sessionRoutes = require('./session.routes');

const router = Router();

router.use('/users', userRoutes);
router.use('/seats', seatRoutes);
router.use("/movies", movieRoutes);
router.use('/sessions', sessionRoutes);

module.exports = router;