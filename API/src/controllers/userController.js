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

module.exports = {
     createUser,
}