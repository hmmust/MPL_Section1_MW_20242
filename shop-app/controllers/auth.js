const user = require('../models/user');

exports.getLogin = (req,res,next)=> {
    message = req.flash('msg');
    res.render('auth/login',{
        PageTitle:'Login',
        isAuth:req.session.isAuth,
        message:message
    });
};
exports.getLogout = (req,res,next)=> {
    req.session.destroy();
    res.redirect("/login");
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
            {
                req.flash('msg','Invalid username or password!');
                res.redirect("/login");
            }
    });
};
