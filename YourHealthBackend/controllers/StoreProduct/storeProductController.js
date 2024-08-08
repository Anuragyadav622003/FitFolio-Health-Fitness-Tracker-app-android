const products = require('../../modals/StoreProduct/storeProduct');

exports.getStoreProduct = async(req,res)=>{ 
    const product = await products.find({});
    res.send(product);
};