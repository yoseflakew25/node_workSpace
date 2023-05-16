const product=require('../models/product')


const getAllProductsStatic = async(req, res) => {

    const products=await product.find({}).select('name price')

    res.status(200).json({products, nbHits:getAllProducts.length})
   
}


const getAllProducts = async (req, res) => {
    const {featured,company,name,sort} = req.query
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
    // console.log(queryObject);
    let result= product.find(queryObject)
    if (sort){
        const sortList=sort.split(',').join(' ')
        result=result.sort(sortList)
    }


    else{
        result=result.sort('createdAt')
    }
    const products=await result
    res.status(200).json({products, nbHits:products.length})


}



module.exports = {
    getAllProducts,
    getAllProductsStatic
}