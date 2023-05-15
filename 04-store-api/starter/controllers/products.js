const product=require('../models/product')


const getAllProductsStatic = async(req, res) => {


    const products=await product.find({
        name:'albany sectional'
    })

    res.status(200).json({products, nbHits:getAllProducts.length})
   
}


const getAllProducts = async (req, res) => {
    const {featured,company} = req.query
    const queryObject={}



    if (featured){
        queryObject.featured=featured==='true'?true:false
    }
    if (company){
        queryObject.company=company==='true'?true:false
    }

    console.log(queryObject);
    const products=await product.find(req.query)
    res.status(200).json({products, nbHits:products.length})


}



module.exports = {
    getAllProducts,
    getAllProductsStatic
}