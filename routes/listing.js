const express = require("express");
const router = express.Router();
const wrapAsync = require("../util/wrapAsync.js");
const ErrorHandler = require("../util/ErrorHandler.js");
const { listingSchema } = require("../Schema.js")
const Listing = require("../models/listings.js");
const { isLoggedIn, isValidObjectId } = require("../middleware.js")
const listingController=require("../controller/listings.js");
const multer=require("multer");
const {storage}= require("../cloudConfig.js");
const upload= multer({storage});

//validate Schema
const validateListing = (req, res, next) => {

    let { error } = listingSchema.validate(req.body.listing || req.body);  // Validate req.body.listing if available

    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ErrorHandler(400, errMsg);
    } else {
        next();
    }
};

//Index
//New Route 
router.route("/")
.get( wrapAsync(listingController.getIndex))
.post( isLoggedIn,  upload.single("image"),validateListing, wrapAsync(listingController.postListing))




//New Route
router.get("/add", isLoggedIn, wrapAsync(listingController.addListing))

router.route("/search")
.get(listingController.searchListings);
//Show routes
//edit route or  put route
//Delete route

router.route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put( isLoggedIn, upload.single("listing[image]"),validateListing, wrapAsync(listingController.putEditListing))
    .delete(isLoggedIn, wrapAsync(listingController.destroyListing));

//Edit 
router.get("/:id/edit", isLoggedIn, wrapAsync(listingController.getEditListing))


module.exports = router;