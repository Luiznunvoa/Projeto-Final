const express = require('express');
const seatRoutes = express.Router();

//Importar Middlewares
const findSeatByPosition = require('../middlewares/findSeatMiddleware');

//Importando Controllers
const seatControllers = require('../controllers/seatController');


//Cria todos os assentos
//Tem q implementar o id da sessão e o preço
seatRoutes.post('/', (req, res)=>{seatControllers.createSeats(req,res)})

//Recupera todos os assentos
seatRoutes.get('/', (req, res)=>{seatControllers.getAllSeats(req,res)})

//Recuperar assento por id
seatRoutes.get('/positionID/:id', (req, res)=>{seatControllers.getSeatsById(req,res)})

//Recuperar assento por posição ex. "A" e "10"
seatRoutes.get('/position/', (req, res)=>{seatControllers.getSeatsByPosition(req,res)})

//Alterar CPF e Nome do aseento
seatRoutes.patch('/', findSeatByPosition, (req, res)=>{seatControllers.alterSeatStatus(req,res)})

//Recuperar todos assentos de uma sessão específica
seatRoutes.get("/:SessionId", (req, res)=> seatControllers.getSeatsOfSession(req, res))


module.exports = seatRoutes;