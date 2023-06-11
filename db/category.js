const mongoose = require ("mongoose");

const categorySchema = new mongoose.Schema({
    name:String,
    status:String

})


module.exports = mongoose.model("categories",categorySchema);