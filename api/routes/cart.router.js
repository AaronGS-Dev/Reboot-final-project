const express = require('express');
const router = express.Router();
const {
    addToCart,
    deleteProduct,
    getCart
} = require('../controllers/cart.controller');

router.get('/', getCart)
router.post('/', addToCart);
router.delete('/:id', deleteProduct)

module.exports = router;