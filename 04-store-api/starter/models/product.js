const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'product name must be provided'],
    },
    price: {
        type: Number,
        required: [true, 'product price must be provided'],
    },
    description: {
        type: String,
        required: [true, 'product description must be provided'],
    },
    image: {
        type: String,
        required: [true, 'product image must be provided'],
    },
    category: {
        type: String,
        required: [true, 'product category must be provided'],
    },
    quantity: {
        type: Number,
        required: [true, 'product quantity must be provided'],
    },
})