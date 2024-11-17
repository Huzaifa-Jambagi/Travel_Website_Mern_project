const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const wrapAsync = require("../util/wrapAsync.js");
const { saveredirectUrl } = require("../middleware.js");
const userController=require("../controller/user.js")

router.get("/signup",userController.getSignUp )

router.post("/signup", wrapAsync(userController.postSignUp))


router.get("/login", userController.getLogin)

router.post("/login",saveredirectUrl,
    passport.authenticate("local", { failureFlash: true, failureRedirect: "/login" }),
   userController.postLogin)

router.get("/logout",userController.getLogout)
module.exports = router;
