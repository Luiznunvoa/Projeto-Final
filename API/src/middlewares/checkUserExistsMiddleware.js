const { User } = require('../models/models')
const { Op } = require('sequelize')

async function checkUserExists(req, res, next) {
     try {
          const { username,email, cpf } = req.body
          const user = await User.findOne({
               where: {
                    [Op.or]: [{username}, {email}, {cpf}]
               }
          })
          if (user) {
               console.log('Usuário ou email ja existentes')
               return res.status(400).json({ error: 'Usuário ou email ja existente!'})
          }

          return next()
     } catch (error) {
          console.error('Erro ao checar se o usuário existe:', error)
          return res.status(500).json({ error: 'Erro ao checar se o usuário existe!'})
     }
}

module.exports = checkUserExists