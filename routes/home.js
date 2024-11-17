const express=require("express");
const router=express.Router();

//home
router.get("/",(req,res)=>{
    res.send("home page");
})

module.exports=router