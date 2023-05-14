const express = require('express');
const router = express.Router();



const { getAllProductsStatic, getAllProductsStatic, getAllProducts } = require('../controllers/products');



router.route('/').get(getAllProducts)
router.route('/static').get(getAllProductsStatic)