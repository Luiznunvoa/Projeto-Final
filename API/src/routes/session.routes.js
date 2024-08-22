const express = require("express");
const sessionRoutes = express.Router();

// importar controller
const sessionController = require("../controllers/sessionController");

// importar middleware
const findSessionById = require("../middlewares/findSessionMiddleware");

// criar sessão
sessionRoutes.post("/", (req, res) => sessionController.createSession(req, res));

// listar sessões
sessionRoutes.get("/", (req, res) => sessionController.listSessions(req, res));

// buscar sessão por id
sessionRoutes.get("/:id", findSessionById, (req, res) => sessionController.getSessionById(req, res));

// editar sessão
sessionRoutes.patch("/:id", findSessionById, (req, res) => sessionController.updateSession(req, res));

// deletar sessão
sessionRoutes.delete("/:id", findSessionById, (req, res) => sessionController.deleteSession(req, res));

// listar sessões pelo titulo do filme
sessionRoutes.get("/movie/:title", (req,res) => sessionController.listSessionsByTitle(req, res))

module.exports = sessionRoutes;