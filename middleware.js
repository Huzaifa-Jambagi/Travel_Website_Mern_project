const express=require("express");
const { session } = require("passport");
const Listing = require("./models/listings");
const mongoose = require("mongoose");

 
module.exports.isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.flash("error","You need to log in first");
        req.session.redirectUrl=req.originalUrl;
        return res.redirect("/login");    }
next();  
}

module.exports.saveredirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.url = req.session.redirectUrl;  // Set the URL in res.locals
        delete req.session.redirectUrl;  // Clear the session after redirect is saved
    } else {
        res.locals.url = '/listings';  // Default to listings if no redirect URL is stored
    }
    next();
};

module.exports.isOwner= async(req,res,next)=>{
    let {id}=req.params;
    let listing= await Listing.findById(id);
    if(!listing.owner.equals(res.locals.user._id)){
        req.flash("error","You're not the owner of the listing")
        return res.redirect(`/listings/${id}`);
    }
    next();
}


module.exports.isReviewAuthor= async(req,res,next)=>{
    let {id,reviewId}=req.params;
    let review= await review.findById(reviewId);
    if(!review.author.equals(res.locals.user._id)){
        req.flash("error","You did not create the review")
        return res.redirect(`/listings/${id}`);
    }
    next();
}


module.exports.isValidObjectId = (req, res, next) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return next(new ErrorHandler(400, "Invalid Listing ID"));
    }
    next();
};

