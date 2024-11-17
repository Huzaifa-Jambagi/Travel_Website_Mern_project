const mongoose = require("mongoose");
const Listings = require("../models/listings.js");
const initData = require("./data.js");

main()
    .then(() => {
        console.log("Connected to db successfully");
       initDB(); // Call the initDB function after successful connection
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/cozyplace");
}

let initDB = async () => {
    await Listings.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:"6730f14c92596b31eb3fdab1"}));
    await Listings.insertMany(initData.data);
    console.log("Data was initialized");
}




