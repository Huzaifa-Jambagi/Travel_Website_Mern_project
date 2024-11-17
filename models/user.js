const { required } = require("joi");
const mongoose=require("mongoose");
const passportLocalMongoose=require("passport-local-mongoose");

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    }
})

userSchema.plugin(passportLocalMongoose);

module.exports=mongoose.model("User",userSchema);