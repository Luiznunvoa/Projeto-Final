const { Seat } = require('../models/models');

async function findSeatByPosition(req, res, next){
    try {
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

        if (!seat) {
            return res.status(404).json({ message: "Assento não encontrado" });
        }

        req.seat = seat;

        next();

    } catch (error) {
        return res.status(500).json({ error: "Erro ao processar a solicitação" });
    }
}


module.exports = findSeatByPosition;