const product = require('../models/product');
exports.getAddProduct= (req,res,next)=> {
    res.render('admin/add-product',{PageTitle:'Shop Home'});
};
exports.postAddProduct= (req,res,next)=>{
    let n=req.body.name;
    let t=req.body.type;
    let p=req.body.price;
    let d=req.body.description;
    const newProduct = product({name:n, type:t,
         price:p, description:d});
         newProduct.save();
    res.render('admin/add-product',{PageTitle:'Shop Home'});
};
exports.getProducts = (req,res,next)=> {
    product.find().then((products)=>{
        res.render('admin/list-products',{PageTitle:'Shop Home',
            prods:products
        });
    });

};
exports.getEditProduct= (req,res,next)=> {};
exports.postEditProduct= (req,res,next)=>{};
exports.postDeleteProduct= (req,res,next)=>{};
