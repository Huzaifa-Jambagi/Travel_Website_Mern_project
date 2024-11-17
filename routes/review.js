const express = require("express");
const router = express.Router({mergeParams:true});
const Review = require("../models/reviews.js");
const Listing = require("../models/listings.js");
const wrapAsync = require("../util/wrapAsync.js");
const { reviewSchema } = require("../Schema.js")
const ErrorHandler = require("../util/ErrorHandler.js");
const { isLoggedIn, isReviewAuthor } = require("../middleware.js");
const reviewController=require("../controller/reviews.js")

const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ErrorHandler(400, errMsg);
    } else {
        next();
    }
}
//Review in show.ejs
//post review
router.post("/",isLoggedIn ,validateReview, wrapAsync(reviewController.postReview))

//delete review
router.delete("/:reviewId", isLoggedIn ,wrapAsync(reviewController.destroyReview))

module.exports = router;