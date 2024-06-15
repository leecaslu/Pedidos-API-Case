// Solicitando módulo express
const express = require('express');

// Solicitando Rotas
const orderRoute = require('./routes/order');

// Inicializando app
const app = express();

//Configurando a rota de 'order'
app.use('/order', orderRoute);

module.exports = app;
