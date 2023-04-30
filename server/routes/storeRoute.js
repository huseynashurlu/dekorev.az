const express = require('express');
const router = express.Router();
const { createStore, getAllStores, getStoreById, updateStore, deleteStore } = require('../controller/storeController');

router.post('/create', createStore);
router.get('/all-stores', getAllStores);
router.get('/:id', getStoreById);
router.put('/:id', updateStore);
router.delete('/:id', deleteStore);
module.exports = router;