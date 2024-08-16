import { Sequelize } from "sequelize"

export const sequelize = new Sequelize({
    "dialect": "sqlite",
    "storage": "./API/data/database.sqlite"
})

async function testConnectionDatabase(){
    try {
        await sequelize.authenticate()
    } catch (error) {
        console.log("Não foi possível se conectar ao banco de dados")
    }
}

testConnectionDatabase()
