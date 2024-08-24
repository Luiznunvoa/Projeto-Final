const express = require('express')
const swaggerUI = require('swagger-ui-express')
const app = express()
const cors = require('cors')

const router = require('./routes/index.js')
const createDatabase = require('../scripts/createDatabase.js')
const swaggerFile = require("./swagger.json")


app.use(express.json())

app.use("/api-docs", swaggerUI.serve,swaggerUI.setup(swaggerFile));

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