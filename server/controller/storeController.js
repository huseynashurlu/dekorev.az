const Store = require('../model/storeModel');
const asyncHandler = require('express-async-handler');

// Create Store
const createStore = asyncHandler(async (req,res) => {
    console.log(req.body);
    const newStore = await Store.create(req.body);
    res.json(newStore);
})

// Get All Stores 
const getAllStores = asyncHandler(async (req,res) => {
    try {
        const getStores = await Store.find();
        res.json(getStores);
    } catch (error) {
        throw new Error(error)
    }
})


// Get Store by ID
const getStoreById = asyncHandler(async (req,res) => {
    const {id} = req.params;

    try {
       const getStore = await Store.findById(id).populate('products');
       res.json({
        getStore,
       }) 
    } 
    catch (error) {
        throw new Error(error)
    }
})


// Update a Store
const updateStore = asyncHandler(async (req,res) => {
    const { id } = req.params;

    try {
        const updatedStore = await Store.findByIdAndUpdate(
            id, 
            {
                name: req?.body?.name,
                photo: req?.body?.lastname,
                category: req?.body?.category,
                phone: req?.body?.phone,
                address: req?.body?.address,
                workHours: req?.body?.workHours,
            },
            {
                new: true
            }

        )
        res.json(updatedStore)
    } catch (error) {
        throw new Error(error)
    }
})

// Delete Store
const deleteStore = asyncHandler(async (req,res) => {
    const { id } = req.params;

    try {
        const deletedStore = await Store.findByIdAndDelete(id);
        res.json(deletedStore)
    } catch (error) {
        throw new Error(error)
    }
})


module.exports = {createStore, getAllStores, getStoreById, updateStore, deleteStore};
