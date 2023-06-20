const express = require("express")
const usersCollection = require("../models/userSchema");
const uuid = require("uuid");
const deanCollection = require("../models/deanSchema");

const deanRoute = express.Router();

deanRoute.post("/login", async (req, res)=>{
    const {id, password} = req.body;
    try{
    const user = await deanCollection.findOne({id, password});  
    console.log(user);
    if(!user){
        return res.status(404).send("dean not found")
    }
    const token = uuid.v4();   // uuid generated token
    user.token = token;   
    user.save();
    res.status(200).send({"token": token, profile: user})
    }
    catch(err){
        res.status(400).send({"error": err});
    }
});

deanRoute.post("/signUp", async (req, res)=>{
    const {name, password} = req.body;
    try{
    const user = await new deanCollection({id: name, name, password});
    user.save();
    res.status(200).send("dean created successfully!")
    }
    catch(err){
        console.log(err);
        res.status(400).send({"error": err});
    }
})

module.exports = deanRoute;