const {body} = require("express-validator");
exports.productValidationRules = {
    add:[
        body("name").trim()
        .isLength({min:5,max:100})
        .withMessage("Name should be 5 letters and maximum 100."),
        body("price").trim().isFloat({min:1,max:1000})
        .withMessage("Price should be more than 1 JOD and less than 1000")
    ]
}