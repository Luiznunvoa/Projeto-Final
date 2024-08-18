const { User } = require('../models/models')

async function checkUserExists(req, res, next) {
     try {
          const { username } = req.body
          const user = await User.findOne({
               where: {
                    username
               }
          })
          if (user) {
               return res.status(400).json({ error: 'Usuário ja existe!'})
          }

          return next()
     } catch (error) {
          console.error('Erro ao checar se o usuário existe:', error)
          return res.status(500).json({ error: 'Erro ao checar se o usuário existe!'})
     }
}

module.exports = checkUserExists