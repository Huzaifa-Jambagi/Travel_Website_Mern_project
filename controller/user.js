const User = require("../models/user.js");

module.exports.postSignUp=async (req, res) => {
    let { email, username, age, password ,name } = req.body;
    let newUser = new User({ email, age, username, name });
    await User.register(newUser, password);
    req.flash("success", "Welcome to CozyPlace");
    res.redirect("/login");
}

module.exports.getSignUp=(req, res) => {
    res.render("users/signup.ejs");
}

module.exports.getLogin=(req, res) => {
    res.render("users/login.ejs");
}

module.exports.postLogin= async (req, res) => {
    req.flash("success", "Logged in succesfully to CozyPlace")
    console.log(res.locals.url)
    res.redirect( res.locals.url)
}

module.exports.getLogout=(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            next(err);
        }
        req.flash("success","You have been successfully logged out!")
        res.redirect("/listings");
    })
}