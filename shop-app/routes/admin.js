const express = require('express');
const productValidator = require('../validators/productValidator')
.productValidationRules;
const validateRequest = require('../validators/validateProductRequest');

const authMiddle = require('../middlewares/authMiddleware');
const router = express.Router();
const adminController = require("../controllers/admin");
router.get('/add-product',adminController.getAddProduct);
router.get('/products',adminController.getProducts);
router.get('/edit-product/:ProductId',adminController.getEditProduct);
router.post('/edit-product',productValidator.add,validateRequest.validate_product,adminController.postEditProduct);
router.post('/add-product',productValidator.add,validateRequest.validate_product,adminController.postAddProduct);
router.post('/delete-product',authMiddle.isAdmin,adminController.postDeleteProduct);
module.exports = router;