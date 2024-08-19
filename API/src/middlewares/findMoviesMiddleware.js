const models = require("../models/models.js")
const { Op } = require("sequelize")

//Encontrar um filme
async function findMovies(req, res, next){
    try{
        const { genreOrAgeRate } = req.params
        const movies = await models.Movie.findAll({
            where: {
                [Op.or]: {
                    genre: genreOrAgeRate,
                    ageRating: genreOrAgeRate
                }
            }
        })
    
        if(!movies){
            return res.status(404).json({ error: "There are no movies with this genre or age rating!" })
        }
    
        req.movies = movies
        return next()

    } catch(error) {
        return res.status(500).json({ error: "Error when trying to find movies with genre or age rating!"})
    }
}

module.exports = findMovies