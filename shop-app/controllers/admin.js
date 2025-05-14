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
exports.getEditProduct= (req,res,next)=> {
    id = req.params.ProductId; 
    product.findById(id).then((p)=>{
        res.render('admin/edit-product',{PageTitle:'Shop Home',
            product:p
        });

    });
};
exports.postEditProduct= (req,res,next)=>{
    id = req.body.id;
    name = req.body.name;
    price= req.body.price;
    type= req.body.type;
    description= req.body.description;
    product.findById(id).then((p)=>{
        p.name= name;
        p.type= type;
        p.description= description;
        p.price= price;
        p.save().then(()=>{
            res.redirect("/admin/products");
        });
        
    });
};
exports.postDeleteProduct= (req,res,next)=>{
    id = req.body.id;
    product.findByIdAndDelete(id).then((p)=>{
        res.redirect("/admin/products");
    });
};
