// Pacote é um conjunto de modulos

const operacoesBasicas = require("./operacoesBasicas");
const areas = require("./areas");

module.exports = { ...operacoesBasicas, ...areas };
