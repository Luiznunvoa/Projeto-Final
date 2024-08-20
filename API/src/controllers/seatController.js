const { Seat } = require('../models/models');
/**/ 
async function createSeats(req, res){
    try{
        const { number, row, price, ocupierCPF, ocupierName} = req.body

        const seat = await Seat.create({
            number,
            row,
            price,
            ocupierCPF,
            ocupierName
        });

        return res.status(201).json(seat.toJSON());
        
    }catch(error){
        return res.status(400).json({error: "Não foi possivel acessar"});

    }
}

async function getAllSeats(req, res){
    try{
        const seat = await Seat.findAll();
        if(!seat){
            return res.status(404).json({error: "Não existe assentos"});
        }
        return res.status(201).json(seat);
    }catch(error){
        return res.status(400).json({error: "Não foi possivel acessar"});
    }
}

async function getSeatsById(req, res){
    try{
        const { id } = req.params;
        const seat = await Seat.findByPk(id);
    
        if (seat) {
            return res.status(200).json(seat); 
        } else {
            return res.status(404).json({ message: "Não achou Assento com esse Id" }); 
        }

    }catch(error){
        return res.status(400).json({error: "Não foi possivel acessar"});
    }
}

async function alterSeatStatus(req, res){
    try{
        const { seat } = req;
        const { user_name} = req.body;

        const updatedRows = await seat.update({ user_name});
        return res.status(200).json(updatedRows);

    }catch(error){
        return res.status(400).json({error: "Não foi possivel alterar"});
    }
}


module.exports = {
    createSeats,
    getAllSeats,
    getSeatsById,
    alterSeatStatus,
}