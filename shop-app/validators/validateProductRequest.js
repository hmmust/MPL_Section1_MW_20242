const {validationResult} = require("express-validator");
exports.validate_product=(req,res,next)=>{
const errors = validationResult(req);
console.log(errors.isEmpty());
next();
};

