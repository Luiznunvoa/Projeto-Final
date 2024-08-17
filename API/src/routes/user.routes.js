const express = require('express')
const userRoutes = express.Router()

//Carregamento dos controllers
const userController = require('../controllers/userController')

//Carregamento dos Middlewares
const checkUserExists = require('../middlewares/checkUserExistsMiddleware')

//Criar usuário
userRoutes.post('/', checkUserExists, (req ,res)=> userController.createUser(req, res))

module.exports = userRoutes