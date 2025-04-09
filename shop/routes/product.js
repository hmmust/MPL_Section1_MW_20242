const express=require('express');
const router=express.Router();

const productController= require('../controllers/product');

router.get("/product",productController.getProduct);
router.post("/product",productController.postProduct);
router.get("/products",productController.getProducts);
router.get("/products/:pid",productController.getProductsId);

module.exports= router;
