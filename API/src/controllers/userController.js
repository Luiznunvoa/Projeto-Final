const users = []

const { User } = require('../models/models')

//Criar um usuário
async function createUser(req, res) {
     try {
          const { name, lastName, cpf, birthday, username, email, senha} = req.body
          const user = await User.create({
               name,
               lastName,
               cpf,
               birthday,
               username,
               email,
               senha
          })
          return res.status(201).json(user.toJSON())
     } catch (error) {
          return res.status(500).json({ error: 'Erro ao criar o usuário'})
     }
}

//Listar usuários
async function listUsers(req, res) {
     try {
          const users = await User.findAll()
          return res.status(200).json(users)
     } catch (error) {
          return res.status(500).json({ error: 'Erro ao listar usuários!'})
     }
}

//Pegar usuário específico
async function getUser(req, res) {
     try {
          const { user } = req     
          return res.status(201).json(user)

     } catch (error) {
          return res.status(500).json({ error: 'Erro ao buscar usuário!'})
     }
}


module.exports = {
     createUser,
     listUsers,
     getUser
}