const Product = require('../model/productModel');
const Category = require('../model/categoryModel');
const Store = require('../model/storeModel');
const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');

// Create Product
const createProduct = asyncHandler(async (req, res) => {
    const store = await Store.findById(req.body.storeID);
    if(store === null) {
        
    }
    const newProduct = await Product.create({ 
        ...req.body, 
        store: req.body.storeID,
        category: req.body.categoryID 
    });
    res.json(newProduct);
    store.products.push(newProduct)
    store.save()
});
// Get All Products 
const getAllProducts = asyncHandler(async (req,res) => {
    try {
        const getProducts = await Product.find();
        res.json(getProducts);
    } catch (error) {
        throw new Error(error)
    }
})



/*
// Get All Products of a Store
const getAllProductsOfStore = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const getProducts = await Product.find({ storeID: id });
        res.json(getProducts);
    } catch (error) {
        throw new Error(error);
    }
});
*/

// Get Product by ID
const getProductById = asyncHandler(async (req,res) => {
    const {id} = req.params;

    try {
       const getProduct = await Product.findById(id);
       const getCategory = await Category.findById(getProduct.categoryID);
       const getStore = await Store.findById(getProduct.storeID);

       if (!getCategory || !getStore) {
        throw new Error("Category or store not found");
      }

       res.json({
        getProduct,
        categoryName: getCategory.name,
        storeName: getStore.name,
        storePhone: getStore.phone,
       }) 
    } 
    catch (error) {
        throw new Error(error)
    }
})


// Update a Product
const updateProduct = asyncHandler(async (req,res) => {
    const { id } = req.params;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            id, 
            {
                name: req?.body?.name,
                price: req?.body?.price,
                city: req?.body?.city,
                isNew: req?.body?.isNew,
                features: req?.body?.features,
                photo: req?.body?.photo,
                isShipping: req?.body?.isShipping,
                createDate: req?.body?.createDate,
                indexCode: req?.body?.indexCode,
                viewCount: req?.body?.viewCount,
            },
            {
                new: true
            }

        )
        res.json(updatedProduct)
    } catch (error) {
        throw new Error(error)
    }
})

// Delete Product
const deleteProduct = asyncHandler(async (req,res) => {
    const { id } = req.params;

    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        res.json(deletedProduct)
    } catch (error) {
        throw new Error(error)
    }
})


module.exports = {createProduct, getAllProducts, getProductById, updateProduct, deleteProduct};
