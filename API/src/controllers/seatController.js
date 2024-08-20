const { Seat } = require('../models/models');

//Criando todos os assentos, falta receber a sessão e atualizar os preços
async function createSeats(req, res){
    try {
        const alfabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        
        const seatsToCreate = [];

        for (const letter of alfabet) {
            for (let number = 1; number <= 18; number++) {
                seatsToCreate.push({
                    number,
                    row: letter,
                    price: 0,
                    ocupierCPF: null,
                    ocupierName: null 
                });
            }
        }

        await Seat.bulkCreate(seatsToCreate);
        return res.status(201).json({ message: "Assentos criados com sucesso" });

    }catch(error){
        return res.status(400).json({error: "Não foi possivel acessar"});
    }
}

//Retorna todos os assentos
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

//Retorna assentos por ID
async function getSeatsById(req, res){
    try{
        const { id } = req.params;
        const seat = await Seat.findByPk(id);
    
        if (seat) {
            return res.status(200).json(seat); 
        } else {
            return res.status(429).json({ message: "Não achou Assento com esse Id" }); 
        }

    }catch(error){
        return res.status(400).json({error: "Não foi possivel acessar"});
    }
}
//Retorna assentos por posição
async function getSeatsByPosition(req, res){
    try{
        const { number, row } = req.body;

        
        if (!number || !row) {
            return res.status(400).json({ message: "Número e linha são necessários" });
        }


        const seat = await Seat.findOne({
            where: {
                number: number,
                row: row
            }
        });

        return res.status(200).json(seat);
        
    }catch(error){
        return res.status(400).json({error: "Não foi possivel acessar"});
    }
}

async function alterSeatStatus(req, res){
    try {
        const { ocupierCPF, ocupierName } = req.body;
        const { seat } = req; 

        const updatedSeat = await seat.update({
            ocupierCPF: ocupierCPF,
            ocupierName: ocupierName
        });

        return res.status(200).json(updatedSeat);

    } catch (error) {
        return res.status(500).json({ error: "Não foi possível alterar o assento" });
    }
}


module.exports = {
    createSeats,
    getAllSeats,
    getSeatsById,
    alterSeatStatus,
    getSeatsByPosition,
}