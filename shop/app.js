const express=require('express');
const app=express();
const productRouter=require("./routes/product");
const errorRouter=require("./routes/errors");

app.set("view engine","ejs");
app.set("views","views");
app.use(productRouter);
app.use(errorRouter);

app.listen(8080);
// open the browser and write URL http://localhost:8080/

// npx nodemon app.js
// node app.js