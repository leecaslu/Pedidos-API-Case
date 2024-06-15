// Requisitando e criando o Router
const router = require('express').Router();
// Importando os controllers de order
const controller = require('../controllers/orderController.js');

// Definição dos middlewares

// Definindo as rotas

router.post('/', controller.createOrderController);

router.route('/:id').get(controller.getOrderController).patch(controller.patchOrderController).delete(controller.deleteOrderController);

router.get('/list', controller.getAllOrdersController);


// exportando o router
module.exports = router;



