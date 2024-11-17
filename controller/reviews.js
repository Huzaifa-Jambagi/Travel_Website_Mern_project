const Review = require("../models/reviews.js");
const Listing = require("../models/listings.js");

//Review in show.ejs
//post review
module.exports.postReview=async (req, res) => {
    let { rating, comment } = req.body;
    let { id } = req.params

    let listing = await Listing.findById(id);

    const newReview = new Review({
        review: comment,
        rating: rating
    });
    newReview.author=req.user._id;
    await newReview.save();
    console.log(newReview)
    await listing.reviews.push(newReview);
    await listing.save();
    res.redirect(`/listings/${id}`);
}

//delete review

module.exports.destroyReview=async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`);
}