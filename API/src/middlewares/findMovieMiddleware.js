const models = require("../models/models.js")

//Encontrar um filme
async function findMovie(req, res, next){
    try{
        const { title } = req.params
        const movie = await models.Movie.findOne({
            where: {
                title: title
            }
        })
    
        if(!movie){
            return res.status(404).json({ error: "Movie not found!" })
        }
    
        req.movie = movie
        return next()

    } catch(error) {
        return res.status(500).json({ error: "Error when trying to find movie!"})
    }
}

module.exports = findMovie