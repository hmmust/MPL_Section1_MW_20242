const product = require('../models/product');

const getProduct= (req,res)=>{
        res.render("product/addproduct",{title:'Add Product'});
 };
const getProducts= (req,res)=>{
        product.find().then((products)=>{
                res.render("product/viewproducts.ejs",{title:'View Products', 
                        prods: products});
        });

    };
const postProduct= (req,res)=>{
        p =  product({name:req.body.name,price:req.body.price,
                type:req.body.type});
        
        p.save();
        res.redirect("/shop/products");
        /*res.render("product/viewproduct",{title:'View Product',
                name:req.body.name,
                price:req.body.price,
                type:req.body.type
        });
        */
       };
const getProductsId= (req,res)=>{
        res.write(req.params.pid+"<br>");
        res.write(req.query.type+"<br>");
        res.end("Products");
        };
exports.getProduct=getProduct;
exports.getProducts=getProducts;
exports.postProduct=postProduct;
exports.getProductsId=getProductsId;