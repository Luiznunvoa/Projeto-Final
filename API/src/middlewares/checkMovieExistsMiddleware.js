const models = require("../models/models.js")

//Checar se filme já existe
async function checkMovieExists(req, res, next){
    try{
        const { title } = req.body
        const movie = await models.Movie.findOne({
            where: {
                title : title
            }
        })
        
        if(movie){
            return res.status(400).json({error: "Movie already exists!"})
        }
    
        return next()
    } catch (error) {
        return res.status(500).json({ error: "Error when checking if movie exists!"})
    }
}

module.exports = checkMovieExists