// requisitando o mongoose
const mongoose = require('mongoose')

// criando o Schema de Order
const orderSchema = new mongoose.Schema({
  numeroPedido: {
    type: String,
    required: true,
    unique: true

  },
  valorTotal: {
    type: Number,
  },
  dataCriacao: Date,
  items: [{
    idItem: {
      type: Number,
    },
    quantidadeItem: {
      type: Number,
      required: true
    },
    valorItem: {
      type: Number,
      required: true

    },
  }]
});

// exportando o modelo do objeto ordem e item
module.exports = mongoose.model('Order', orderSchema);
