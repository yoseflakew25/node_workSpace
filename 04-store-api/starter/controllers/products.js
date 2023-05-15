const product=require('../models/product')


const getAllProductsStatic = async(req, res) => {

const search='a '
    const products=await product.find({
        name:{$regex:search,$options: 'i'}
    })

    res.status(200).json({products, nbHits:getAllProducts.length})
   
}


const getAllProducts = async (req, res) => {
    const {featured,company,name} = req.query
    const queryObject={}



    if (featured){
        queryObject.featured=featured==='true'?true:false
    }
    if (company){
        queryObject.company=company==='true'?true:false
    }
    if (name){
        queryObject.name={$regex:name,$options: 'i'}
    }
    console.log(queryObject);
    const products=await product.find(req.query)
    res.status(200).json({products, nbHits:products.length})


}



module.exports = {
    getAllProducts,
    getAllProductsStatic
}