const express = require('express');
const seatRoutes = express.Router();

//Importar Middlewares
const findSeatByid = require('../middlewares/findSeatMiddleware');

//Importando Controllers
const seatControllers = require('../controllers/seatController');


//Criar assento
seatRoutes.post('/', (req, res)=>{seatControllers.createSeats(req,res)})

//Recuperar todos os assentos
seatRoutes.get('/', (req, res)=>{seatControllers.getAllSeats(req,res)})

//Recuperar assento por id
seatRoutes.get('/:id', (req, res)=>{seatControllers.getSeatsById(req,res)})

//Alterar status do assento
seatRoutes.patch('/:id', findSeatByid, (req, res)=>{seatControllers.alterSeatStatus(req,res)})


module.exports = seatRoutes;