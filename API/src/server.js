const express = require('express')
const app = express()
const cors = require('cors')

const router = require('./routes/index.js')
const createDatabase = require('../scripts/createDatabase.js')

app.use(express.json())

app.use(cors({
     origin: 'http://localhost:5173',
     methods: ['GET', 'POST', 'PUT', 'DELETE'],
     allowedHeaders: ['Content-Type'] 
 }))

app.use(router)

app.listen(3000, () => {
     console.log('Server is running!')
})

createDatabase()