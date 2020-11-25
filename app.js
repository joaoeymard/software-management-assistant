const express = require("express");
const logger = require("morgan");

const app = express();

app.use(logger("dev")); // Gerar log das requisições
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Redirecionando para api
app.use("/", require("./src/routes"));

module.exports = app;
