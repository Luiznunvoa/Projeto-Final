const { Session } = require("../models/models");

async function findSessionById(req, res, next) {
    try {
        const session = await Session.findByPk(req.params.id);

        if (!session) {
            return res.status(404).json({ error: "Sessão não encontrada." });
        }

        req.session = session;
        return next();
    } catch (error) {
        return res.status(500).json({ error: "Erro ao buscar a sessão." });
    }
}

module.exports = findSessionById;