const getProduct= (req,res)=>{
        res.render("addproduct",{title:'Add Product'});
 };
const getProducts= (req,res)=>{
    //res.render("index.ejs");
    res.end("Products");
    };
const postProduct= (req,res)=>{
        res.write("Data received!");
        res.write(req.body.name);
        res.write(req.body.type);
        res.end(req.body.price);
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