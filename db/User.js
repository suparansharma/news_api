const mongoose = require ("mongoose");

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:Number,
    status:String
})


module.exports = mongoose.model("users",userSchema);