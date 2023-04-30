const Category = require('../model/categoryModel');
const asyncHandler = require('express-async-handler');

// Create Category
const createCategory = asyncHandler(async (req,res) => {
    console.log(req.body);
    const newCategory = await Category.create(req.body);
    res.json(newCategory);
})

// Get All Categories
const getAllCategories = asyncHandler(async (req,res) => {
    try {
        const getCategories = await Category.find();
        res.json(getCategories);
    } catch (error) {
        throw new Error(error)
    }
})

// Get Category by ID
const getCategoryById = asyncHandler(async (req,res) => {
    const {id} = req.params;

    try {
       const getCategory = await Category.findById(id);
       res.json({
        getCategory,
       }) 
    } 
    catch (error) {
        throw new Error(error)
    }
})





module.exports = {createCategory, getAllCategories, getCategoryById};
