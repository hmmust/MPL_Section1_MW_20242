const getProduct= (req,res)=>{
    res.write("<html><body><form action='' method='post'>");
    res.write("Name: <input type='text' name='name'><br>");
    res.write("Type: <input type='text' name='type'><br>");
    res.write("Price: <input type='number' name='price'><br>");
    res.end("<input type='submit' value='Save'></form></body></html>");
   };
const getProducts= (req,res)=>{
    //res.render("index.ejs");
    res.end("Products");
    };
const postProduct= (req,res)=>{
        res.end("Data received!");
       };
exports.getProduct=getProduct;
exports.getProducts=getProducts;
exports.postProduct=postProduct;