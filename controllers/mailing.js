const nodemailer = require('nodemailer')
const log = console.log
exports.contact = function(req, res){
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "monkhoodliving@gmail.com" , 
            pass: "mqhupaqdraifgflq" 
        }
    });
    
    let mailOptions = {
        from: 'dishasharma6969@gmail.com', 
        to: `support@monkhood.in , ${req.body.to}`, 
        subject: 'Contact us form response',
        html: ` <p>Name: ${req.body.name} <br> Email: ${req.body.to}<br>  Phone Number : ${req.body.no} <br> Message: ${req.body.message} </p> <br><br><h2>We will contact you as soon as possible! Thanks for your interest!</h2>`
    };
    
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            res.send({err})
            return log('Error occurs');
        }
        res.send({"status":"ok"})
        return log('Email sent!!!');
    });
   
}