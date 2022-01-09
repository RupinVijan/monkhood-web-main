const express = require('express');
const { createProduct } = require('../controllers/loginControllers');

const router = express.Router()

router.route('/product').post(createProduct);


module.exports=router