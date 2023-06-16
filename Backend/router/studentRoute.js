const express = require("express")
const usersCollection = require("../models/userSchema");
const uuid = require("uuid");

const studentRoute = express.Router();

studentRoute.post("/login", async (req, res)=>{
    const {id, password} = req.body;
    try{
    const user = await usersCollection.findOne({id, password});  
    if(!user){
        return res.status(404).send("User not found")
    }
    const token = uuid.v4();   // uuid generated token
    user.token = token;
    user.save();
    res.status(200).send({"token": token})
    }
    catch(err){
        res.status(400).send({"error": err});
    }
});

studentRoute.post("/signUp", async (req, res)=>{
    const {id, password} = req.body;
    try{
    const user = await new usersCollection({id, password});
    user.save();
    res.status(200).send("User created successfully!")
    }
    catch(err){
        res.status(400).send({"error": err});
    }
})

module.exports = studentRoute;