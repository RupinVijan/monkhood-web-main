const ownerSchema = require('../models/tenantform')
const nodemailer = require('nodemailer')

exports.createProduct = async(req,res,next)=>{
    try {
        const product= await ownerSchema.create(req.body)
        
const log = console.log
let transporter1 = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "monkhoodliving@gmail.com" , 
        pass: "eptrltvhvbwytrbp" 
    }
});

let mailOptions1 = {
    from: 'admin@monkhood.in', 
    to: `support@monkhood.in , ${req.body.email}`, 
    subject: 'Student form response',
    html: ` <h2>Dear ${req.body.name}</h2><p>thank you for your interest in MONKHOOD. We have rounded up all the need-to-knows about renting and listing. Our team will make the best choices based on your preferences. And will contact you soon.<br> Stay connected. </p>`
};

transporter1.sendMail(mailOptions1, (err, data) => {
    if (err) {
        res.send({err})
        return log('Error occurs');
    }
});
    res.status(201).json({
        success:true,
        product
    })
    } catch (error) {
        console.log(error)
        res.status(500).send({error})
    }
}
exports.getAllProducts = async(req,res)=>{
    try {
        const product = await ownerSchema.find();
    res.status(200).send({success:true,product})
    } catch (error) {
        console.log(error)
        res.status(500).send({error})
    }
}

exports.updateProduct = async(req,res,next)=>{
    try {
        let product = await ownerSchema.findById(req.params.id)
    if(!product){
        res.status(500).send({
            success:false,
            message:"product not Found"
        })}
    product =await ownerSchema.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(200).send({
        success:true,
        product
    }) 
    } catch (error) {
        console.log(error)
        res.status(500).send({error})
    }
}

exports.deleteProduct = async (req,res,next) =>{
    try {
        const product = await ownerSchema.findById(req.params.id);
    if(!product){
        res.status(500).send({
            success:false,
            message:"Product not found"
        })
    }
    await ownerSchema.findByIdAndDelete(req.params.id)
    res.status(201).send({
        success:true,
        message:"Product Deleted Successfully."
    })
    } catch (error) {
        console.log(error)
        res.status(500).send({error})
    }
    
}
exports.getProductById= async (req,res,next) =>{
    try {
        let product = await ownerSchema.findById(req.params.id)
        if(!product){
            res.status(500).send({
                success:false,
                message:"Product not found"
            })
    }
        res.status(200).send({
            success:true,
            product
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({error})
    }
}