exports.getIndex = (req,res)=>{
    res.write("<h1>Welcome</h1>");
    res.end("<h1>Main Page</h1>")
   };
exports.getContact = (req,res)=>{
    res.render("index");
    };
  