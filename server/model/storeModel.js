const mongoose = require('mongoose'); 

var storeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    photo:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    workHours:{
        type:String,
        required:true
    },
    viewCount: {
        type: Number,
        default: 0
    },
    products: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Product' 
        }
    ]
});

//Export the model
module.exports = mongoose.model('Store', storeSchema);