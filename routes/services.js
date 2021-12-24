const express = require('express')
const {getAllProducts,createProduct,updateProduct,deleteProduct,getProductById} = require('../controllers/services')

const router = express.Router();

router.route('/product').get(getAllProducts);

router.route('/product/create').post(createProduct)

router.route('/product/:id').put(updateProduct).delete(deleteProduct).get(getProductById)

module.exports=router