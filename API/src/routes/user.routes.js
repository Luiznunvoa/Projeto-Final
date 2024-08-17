const express = require('express')
const userRoutes = express.Router()

//Carregamento dos controllers
const userController = require('../controllers/userController')

//Criar usuário
userRoutes.post('/', checkUserExists, (req ,res)=> userController.createUser(req, res))