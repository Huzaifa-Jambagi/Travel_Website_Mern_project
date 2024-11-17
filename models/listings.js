const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./reviews.js");
const User = require("./user.js");
const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: {
        url: String,
        filename: String
    },
    price: {
        type: Number,
        min: 0,
    },
    location: String,
    country: String,
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review"
    }],
    owner: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
});

// Create the Listings model from the schema
const Listings = mongoose.model("Listings", listingSchema);

// Export the Listings model
module.exports = Listings;
