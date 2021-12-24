const express = require('express')
const {contact} = require('../controllers/mailing')

const router = express.Router();


router.route('/product/sendmail').post(contact)


module.exports=router