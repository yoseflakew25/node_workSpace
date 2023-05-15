require('dotenv').config();


const connectDB = require('./db/connect');
const product = require('./models/product');



const jsonProducts = require('./products.json');




const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        // await product.create(jsonProducts);
        console.log('Database connected');
    } catch (error) {
        console.log(error);
    }
}