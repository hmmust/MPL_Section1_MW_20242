const user = require('../models/user');

exports.getLogin = (req,res,next)=> {
    res.render('auth/login',{PageTitle:'Login'});
};
exports.getLogout = (req,res,next)=> {
};
exports.postLogin= (req,res,next)=> {
    uname = req.body.username;
    upass = req.body.password;
    user.find({username:uname,password:upass}).then((u)=>{
            if(u.length !=0 )
                {
                    req.session.isAuth= true;
                    req.session.isAdmin = u.isAdmin;
                    res.redirect("/admin/products");

                }
            else
                res.redirect("/login");
    });
};
