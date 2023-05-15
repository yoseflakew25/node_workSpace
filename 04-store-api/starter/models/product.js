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
    company: {
        type: String,
        required: [true, 'product description must be provided'],
    },
    featured: {
        type: String,
        required: [true, 'product image must be provided'],
    },
    rating: {
        type: String,
        required: [true, 'product category must be provided'],
    },

    createdAt: {
        type: Date,
        default: new Date.now(),
    }
})