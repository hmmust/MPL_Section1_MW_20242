const {validationResult} = require("express-validator");
exports.validate_product=(req,res,next)=>{
const errors = validationResult(req);
if(errors.isEmpty())
    next();
else{
    old_data = {
        name:req.body.name,
        price:req.body.price,
        description:req.body.description,
        type:req.body.type
    }
    error_messages =[]
    for (let e of errors.errors)
        error_messages.push(e.msg);
    //console.log(error_messages,old_data);

    req.flash('add-errors',{old_data:old_data,
        error_messages:error_messages
    });
    res.redirect("/admin/add-product")
}



};

