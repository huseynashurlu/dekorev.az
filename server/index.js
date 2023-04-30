const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const dbConnect = require('./config/dbConnect');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
const storeRoute = require('./routes/storeRoute');
const categoryRoute = require('./routes/categoryRoute');
const productRoute = require('./routes/productRoute');

dbConnect();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/store',storeRoute);    
app.use('/api/category',categoryRoute);    
app.use('/api/product',productRoute);    




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})