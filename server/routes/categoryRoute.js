const express = require('express');
const router = express.Router();
const { createCategory, getAllCategories, getCategoryById } = require('../controller/categoryController');

router.post('/create', createCategory);
router.get('/all-categories', getAllCategories);
router.get('/:id', getCategoryById);
module.exports = router;