// Importando o modelo de Order
const Order = require('../models/orderModel')

// Definindo os diferentes controllers para cada rota
exports.createOrderController = async (req, res) => {
  console.log(req.body);
  try {
    const newOrder = await Order.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        order: newOrder
      }
    })
  } catch (err) {
    console.log(req.body);
    res.status(400).json({
      status: 'Failed',
      message: err
    })
  }


};

exports.getOrderController = async (req, res) => {
  try {
    const order = await Order.find({ numeroPedido: req.params.id });

    res.status(200).json({
      order
    })
  } catch (err) {
    console.log(req.body);
    res.status(404).json({
      status: 'Failed',
      message: err
    })
  }
};

exports.patchOrderController = async (req, res) => {
  try {
    const order = await Order.findOneAndUpdate({
      numeroPedido: req.params.id
    }, req.body, {
      new: true
    });

    res.status(200).json({
      order
    })
  } catch (err) {
    console.log(req.body);
    res.status(400).json({
      status: 'Failed',
      message: err
    })
  }
};

exports.deleteOrderController = async (req, res) => {
  try {
    const order = await Order.findOneAndDelete({
      numeroPedido: req.params.id
    });

    res.status(200).json({
      status: 'Success'
    })
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err
    })
  }
};

exports.getAllOrdersController = async (req, res) => {
  try {
    const orderList = await Order.find();

    res.status(200).json({
      status: 'Success',
      results: orderList.length,
      data: {
        orderList
      }
    })
  } catch (err) {
    console.log(req.body);
    res.status(404).json({
      status: 'Failed',
      message: err
    })
  }
};
