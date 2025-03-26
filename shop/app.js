//middleware MVC folders app.js routing
const express=require('express');
const indexRouter = require("./routes/index");
let name = "";
const app=express();
app.set("view engine","ejs");
app.set("views","views");
const testMiddleware = (req,res,next) => {
  name = "Hossam";
  next();
};

app.use(testMiddleware);
//app.use(indexRouter);

app.listen(8080);

// open the browser and write URL http://localhost:8080/
