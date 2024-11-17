if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Review = require("./models/reviews.js");
const methodOverride = require("method-override");
const engine = require("ejs-mate");
const ErrorHandler = require("./util/ErrorHandler.js");
const listingRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const home = require("./routes/home.js");
const MongoStore=require("connect-mongo");
const session = require("express-session")
const flash=require("connect-flash");
const passport=require("passport");
const User=require("./models/user.js");
const LocalStrategy=require("passport-local");


//port
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

const dbUrl=process.env.ATLASDB_URL;

const store=MongoStore.create({
    mongoUrl:dbUrl,
    crypto:{
        secret:process.env.SECRET,
    },
  touchAfter:24*3600,
})

// session object
const sessionOptions={
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie:{
      maxAge:7*24*60*60*1000,
      httpOnly: true,
    }
}

main()
    .then(() => {
        console.log("Connected to db successfully");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(dbUrl);
}
//engine
app.engine("ejs", engine);

//set
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Middlewares
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "/public")));

app.use(methodOverride("_method"));

app.use(session(sessionOptions));

app.use(flash());

// app.use((req, res, next) => {
//     console.log(`Received request for ${req.url}`);
//     next();
// });


//Authentication middlewares
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");  
    res.locals.user=req.user;
    next();
});
//Routes
app.use("/", home);
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewsRouter)
app.use("/",userRouter)
//Error handling middleware

app.all("*", (req, res, next) => {
    next(new ErrorHandler(404, "Page Not Found"));
})
// Error handling middleware

app.use((err, req, res, next) => {
    // Log the error details to the console
    console.error("Error details:", err);

    let { statusCode = 500, message = "Some Error Occurred" } = err;
    res.status(statusCode).render("error.ejs", { message });
});
