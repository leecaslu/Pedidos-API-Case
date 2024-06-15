// requisitando o mongoose
const mongoose = require('mongoose')

// criando o Schema de Order
const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: [true, 'An order with this Id already exists']

  },
  value: {
    type: Number,
    required: true,
  },
  creationDate: Date,
  items: [{
    productId: {
      type: Number,
      required: true,
      unique: true
    },
    quantity: {
      type: Number,
      required: true
    },
    price: {
      type: NUmber,
      required: true

    },
  }]
});

// exportando o modelo do objeto ordem e item
module.exports = mongoose.model('Order', orderSchema);
