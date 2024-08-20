

async function findSeatByid(req, res, next){
    try{
        const { id } = req.params;
        const seat = await Seat.findByPk(id);
    
        if (seat) {
            req.seat = seat;
            return next(); 
        } else {
            return res.status(404).json({ message: "Não achou Assento com esse Id" }); 
        }

    }catch(error){
        return res.status(400).json({error: "Não foi possivel acessar"});
    }
}


module.exports = findSeatByid;