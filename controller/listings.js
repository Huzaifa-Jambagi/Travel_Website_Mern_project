const Listing = require("../models/listings.js");

//Index

module.exports.getIndex=async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}

//New Route  

module.exports.addListing=(req, res) => {
    res.render("listings/add.ejs")
}

module.exports.postListing=async (req, res) => {
    let url=req.file.path;
    let filename=req.file.filename;
    let { title, description, image, price, location, country } = req.body
    const newListing = new Listing({
        title,
        description,
        image,
        price,
        location,
        country
    });
    newListing.owner = req.user._id;
    newListing.image={url,filename};
    await newListing.save();
    console.log(newListing)
    req.flash("success", "your listing has been posted");
    res.redirect("/listings");
}

//Show route

module.exports.showListing=async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id).populate({
        path: "reviews",
        populate: {
            path: "author"
        }
    }).populate("owner");
    if (!listing) {
        req.flash("error", "the requested listing doesnt exist");
        res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
}

//search
module.exports.searchListings = async (req, res) => {
    try {
        const { query } = req.query; // Get the search term from the query string

        if (!query) {
            req.flash("error", "Please enter a search term.");
            return res.redirect("/listings");
        }

        // Search in title, location, or country fields using $or
        const listings = await Listing.find({
            $or: [
                { title: { $regex: query, $options: "i" } },      // Match title
                { location: { $regex: query, $options: "i" } },   // Match location
                { country: { $regex: query, $options: "i" } } ,    // Match country
            ]
        });

        // Render a view with the search results
        res.render("listings/searchResults.ejs", { listings, query });
    } catch (error) {
        console.error("Error during search:", error);
        req.flash("error", "An error occurred while searching for listings.");
        res.redirect("/listings");
    }
};
//Edit 
module.exports.getEditListing=async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id)
    res.render("listings/edit.ejs", { listing });
}

module.exports.putEditListing=async (req, res, next) => {
    let { id } = req.params;
    if (req.body.listing) {
        req.body = { ...req.body.listing };  // Flattening req.body.listing to req.body
    }
    let listing = await Listing.findByIdAndUpdate(id, req.body, { new: true });
    
    if(typeof req.file!=="undefined"){
    let url=req.file.path;
    let filename=req.file.filename;
    listing.image= { url, filename};
    await listing.save();
    }

    if (!listing) {
        return next(new ErrorHandler(400, "Listing not found"));
    }

    res.redirect(`/listings/${id}`);
}

//Delete route
module.exports.destroyListing=async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings")
}