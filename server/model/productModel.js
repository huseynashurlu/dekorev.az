const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    isNew:{
        type:Boolean,
        required:true,
    },
    features:{
        type:String,
        required:true,
    },
    photo:{
        type: String,
        required: true,
    },
    isShipping: {
        type: Boolean,
        required: true
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    indexCode: {
        type: Number,
        required: true,
        unique: true,
        index: true
    },
    viewCount: {
        type: Number,
        default: 0
    },
    categoryID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    storeID: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Store' 
    }

});

//Export the model
module.exports = mongoose.model('Product', productSchema);