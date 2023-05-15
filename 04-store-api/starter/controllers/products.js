const product=require('../models/product')


const getAllProductsStatic = async(req, res) => {


    const products=await product.find({featured:true})
    throw new Error('testing async errors')
    res.status(200).json({ msg: 'products testing route' })
}


const getAllProducts = async (req, res) => {
    res.status(200).json({ msg: 'products route' })
}



module.exports = {
    getAllProducts,
    getAllProductsStatic
}