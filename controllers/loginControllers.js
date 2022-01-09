
exports.createProduct = (req,res,next)=>{
   try {
       if(req.body.email==="me@admin.com"){
           if(req.body.password==="adminisme"){
            res.cookie('name', 'admin9599').redirect('/dashBoardHome')
           }
           else{
            res.redirect('/login')
           }
       }
       else if(req.body.email==="emp@monkhood.in"){
        if(req.body.password==="adminisme"){
            res.cookie('name', 'employee9599').redirect('/dashBoardHome')
           }
           else{
            res.redirect('/login')
           }
       }
       else{
           res.redirect('/login')
       }
    //    res.status(200).send({"email":req.body.email})
   } catch (error) {
       console.log(error)
       res.status(501).send({error})
   }
    };
