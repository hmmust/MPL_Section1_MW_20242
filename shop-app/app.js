const express=require('express');
const app=express();
app.set('view engine','ejs');
app.set('views','views');
const mongoose= require('mongoose');
mongoose.connect("mongodb://localhost:27017/shop-app").then((e)=>{
    console.log("connected to shop-app database... ");
});
const authMiddle = require("./middlewares/authMiddleware");
const connectFlash= require('connect-flash');

const bodyParser=require('body-parser');
const path = require("path");
const expSession= require("express-session");
app.use(expSession({secret:"hossam",resave:false, saveUninitialized:false}))
app.use(connectFlash());

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
const shopRouter = require('./routes/shop');
app.use(shopRouter);
const authRouter = require('./routes/auth');
app.use(authRouter);
const adminRoutes=require('./routes/admin');
app.use('/admin',authMiddle.isLoggedIn,adminRoutes);
const errorController=require('./controllers/errors');
app.use(errorController.get404);
app.listen(8080);