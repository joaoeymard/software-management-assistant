const routes = require("express").Router();

const { router_not_found } = require("../../config/errors");

// Middleware
routes.use("/", function (req, res, next) {
  next();
});

routes.use("/api", require("./api/"));

// Rota não encontrada
routes.use("/", function (req, res) {
  return res.status(400).json(router_not_found);
});

// Tratando envio de erros
routes.use(function (err, req, res, next) {
  return res.status(500).json({ message: err.message });
});

module.exports = routes;
