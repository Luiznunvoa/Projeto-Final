const express = require('express')
const seatRoutes = express.Router()

//Incluindo Middlewares
const findSeat = require('../middlewares/findSeatMiddleware');

//Incluindo Controladores
const seatController = require('../controllers/seatController')

//post
seatRoutes.post('/seat',(req, res) =>{seatController.createSeat(req,res)})

//get
seatRoutes.post('/seat',(req, res) =>{seatController.returnSeats(req,res)})

//patch
seatRoutes.post('/seat',(req, res) =>{seatController.altSeat(req,res)})

//delete
seatRoutes.post('/seat',(req, res) =>{seatController.deleteSeat(req,res)})


module.exports = seatRoutes;