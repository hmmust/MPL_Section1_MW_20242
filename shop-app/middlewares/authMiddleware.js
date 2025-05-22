exports.isLoggedIn= (req,res,next)=>{
    if(req.session.isAuth)
        next();
    else{
        req.flash('msg','Invalid Access, You have to Login!');
        res.redirect("/login");
    }
};
exports.isAdmin = (req,res,next)=>{
    if(req.session.isAdmin)
        next();
    else{
        req.flash('msg','Invalid Access, login as Admin!');
        res.redirect("/login");
    }
};