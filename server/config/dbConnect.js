const mongoose = require('mongoose');


const dbConnect = () => {
    try {
        const conn = mongoose.connect(process.env.DB_CONNECTION)
        console.log('Database connected...');
    } catch (error) {
        console.log('Database error!!!');
    }
}

module.exports = dbConnect;