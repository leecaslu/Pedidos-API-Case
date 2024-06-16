// Solicitando módulo express
const express = require('express');

// Solicitando Rotas
const orderRoute = require('./routes/orderRoute');

// Inicializando app
const app = express();
app.use(express.json());

//Configurando a rota de 'order'
app.use('/order', orderRoute);

module.exports = app;
