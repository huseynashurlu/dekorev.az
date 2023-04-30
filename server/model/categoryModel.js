const mongoose = require('mongoose'); // Erase if already required

var categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    photo:{
       type: String,
       required: true
    },
    
});

//Export the model
module.exports = mongoose.model('Category', categorySchema);