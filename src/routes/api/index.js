const routes = require("express").Router();

const { httpVerify, generateToken } = require("../../helpers/jwt");

routes.get("/api/login", (req, res, next) => {
  try {
    const token = generateToken({ userAgent: req.get("User-Agent") });
    return res.json({ token });
  } catch (error) {
    next(error);
  }
});

// Exemplo de rota livre de autenticação
routes.get("/free", (req, res) => {
  return res.send("");
});

// Exemplo de rota bloqueada para autenticação
routes.get("/blocked", httpVerify, (req, res) => {
  return res.send("");
});

module.exports = routes;
