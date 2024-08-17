const express = require('express')
const app = express()

const router = require('./routes/index')
const createDatabase = require('../scripts/')

app.use(express.json())

app.use(router)

app.listen(3000, () => {
     console.log('Server is running!')
})

createDatabase()