const { Session, Movie, Seat } = require("../models/models");

// criar uma nova sessão
async function createSession(req, res) {
    try {
        const { horario, cidade, bairro, tipo, movieId, seats } = req.body;

        // --- validações ---
        // verificar formato hh:mm
        const formatoHorario = /^([01]\d|2[0-3]):([0-5]\d)$/; // regex de 24h
        if (!formatoHorario.test(horario)) {
            return res.status(400).json({ error: "Horário inválido -- Utilize o formato hh:mm." });
        }

        // verificar tipos 0, 1 ou 2
        if (tipo >= 0 && tipo <= 2) {
            return res.status(400).json({ error: "Tipo inválido -- Forneça um valor entre 0 e 2." });
        }

        // verificar se filme existe
        const movie = await Movie.findByPk(movieId);
        if (!movie) {
            return res.status(404).json({ error: "Filme não encontrado." });
        }

        // verificar assentos
        if (seats) { 
            const seatInstances = await Seat.findAll({
                where: { id: seats, MovieId: movieId }
            });

            if (seatInstances.length !== seats.length) {
                return res.status(400).json({ error: "Há assentos inválidos." });
            }
        }

        // criar a sessão de fato
        const session = await Session.create({
            horario,
            cidade,
            bairro,
            tipo,
            MovieId: movieId
        });

        // associar os assentos à sessão
        if (seats) {
            await session.addSeats(seatInstances);
        }

        return res.status(201).json(session);
    } catch (error) {
        return res.status(500).json({ error: "Não foi possível criar a sessão." });
    }
}

// buscar sessão por id
async function getSessionById(req, res) {
    try {
        return res.status(200).json(req.session);
    } catch (error) {
        return res.status(500).json({ error: "Não foi possível buscar a sessão." });
    }
}

// listar sessões
async function listSessions(req, res) {
    try {
        const sessions = await Session.findAll({ include: Movie });
        return res.status(200).json(sessions);
    } catch (error) {
        return res.status(500).json({ error: "Não foi possível listar as sessões." });
    }
}

// editar uma sessão
async function updateSession(req, res) {
    try {
        const { horario, cidade, bairro, tipo, movieId } = req.body;

        req.session.horario = horario || req.session.horario;
        req.session.cidade = cidade || req.session.cidade;
        req.session.bairro = bairro || req.session.bairro;
        req.session.tipo = tipo || req.session.tipo;
        req.session.MovieId = movieId || req.session.MovieId;

        await req.session.save();
        return res.status(200).json(req.session);
    } catch (error) {
        return res.status(500).json({ error: "Não foi possível atualizar a sessão." });
    }
}

// deletar uma sessão
async function deleteSession(req, res) {
    try {
        await req.session.destroy();
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: "Não foi possível deletar a sessão." });
    }
}

module.exports = {
    listSessions,
    getSessionById,
    createSession,
    deleteSession,
    updateSession,
};