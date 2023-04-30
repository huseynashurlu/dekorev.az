const express = require('express');
const router = express.Router();
const { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct, getAllProductsOfStore } = require('../controller/productController');

router.post('/create', createProduct);
router.get('/all-products', getAllProducts);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
// router.get('/store/:id', getAllProductsOfStore);

module.exports = router;