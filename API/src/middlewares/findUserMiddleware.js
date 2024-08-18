const { User } = require('../models/models')

async function findUser(req, res, next) {
     try {
          const { username } = req.params
          const user = await User.findOne({
               where: {
                    username
               }
          })
          if (user) {
               req.user = user
               return next()
          }
          return res.status(404).json({ error: 'Usuário não encontrado!' }) 
     } catch (error) {
          console.error('Erro ao tentar achar o usuário:', error)
          return res.status(500).json({ error: 'Erro ao tentar achar o usuário!'})
     }
}

module.exports = findUser