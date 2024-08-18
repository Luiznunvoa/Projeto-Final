const express = require('express')
const userRoutes = express.Router()

//Carregamento dos controllers
const userController = require('../controllers/userController')

//Carregamento dos Middlewares
const checkUserExists = require('../middlewares/checkUserExistsMiddleware')
const findUser = require('../middlewares/findUserMiddleware')

//Criar usuário
userRoutes.post('/', checkUserExists, (req ,res)=> userController.createUser(req, res))

//Listar usuários
userRoutes.get('/', (req, res) => userController.listUsers(req, res))

//Pegar usuário específico
userRoutes.get('/:username', findUser, (req, res) => userController.getUser(req, res))

module.exports = userRoutes