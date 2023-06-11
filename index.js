const express = require('express');
const cors = require("cors");
require('./db/config');
const User = require("./db/User");
const Category = require("./db/category")

const app = express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("hello");
})
app.listen(5000);
app.post("/register", async (req, res) => {
    // res.send("api calling");
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password
    res.send(result);
})


app.post("/login", async (req, res) => {
    if (req.body.password && req.body.email) {
        
        let user = await User.findOne(req.body).select("-password");
        if (user) {
    
            res.send(user);
        }
        else {
            res.send({ result: "No user Found" })
        }
    }

    else {
        res.send({ result: "No user Found" })
    }
})

app.get("/user",async(req,res)=>{
    let users = await User.find();
    if (users.length > 0) {
        res.send(users)
    }else{
        res.send({result:"No User Found"})
    }
})

app.delete("/user/:id",async(req,res)=>{
    const result = await User.deleteOne({_id:req.params.id});
    res.send(result);
})




app.post("/category",async(req,res)=>{
    let category = new Category(req.body);
    let result = await category.save();
    res.send(result);
})

app.get("/category",async(req,res)=>{
    let users = await Category.find();
    if (users.length > 0) {
        res.send(users)
    }else{
        res.send({result:"No User Found"})
    }
})

app.delete("/category/:id",async(req,res)=>{
    const result = await Category.deleteOne({_id:req.params.id});
    res.send(result);
})

app.get("/category/:id",async(req,res)=>{
    const result = await Category.findOne({_id:req.params.id});
    if (result) {
        
        res.send(result);
    }else{
        res.send({result:"No User Found"})
    }
})

app.put("/category/:id",async(req,res)=>{
    const result = await Category.updateOne({_id:req.params.id},{$set:req.body});
    res.send(result);
})






