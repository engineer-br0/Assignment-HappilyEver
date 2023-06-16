const express = require("express");
const mongoose = require("mongoose")
const sessionCollection = require("../models/sessionSchema");
const deanCollection = require("../models/deanSchema");
const usersCollection = require("../models/userSchema");
const sessionRoute = express.Router();

sessionRoute.post("/create", async (req, res)=>{
    
    try{
    const {startDate, endDate} = req.body;
    const end = new Date(endDate)
    console.log(endDate);
    const dean = await mongoose.connection.collection("dean").findOne({});
    if(dean) console.log(dean._id);
    for(let date = new Date(startDate); date<= end; date.setDate(date.getDate()+1)){
        
        let day = date.getDay();
        let endTime = new Date(date);
        endTime.setHours(11,0,0);
        
        if(day === 4 || day === 5){
            
            date.setHours(10, 0, 0);
            let session = new sessionCollection({
                isBooked : false,
                startTime: date,
                endTime,
                dean: dean._id   //// id
            });
            console.log(session);
            session.save();
        }
        if(day === 5) date.setDate(date.getDate() + 5)  // to add 6 days
       }
       res.status(200).send(`session created from ${startDate} to ${endDate}`);
    }
    catch(err){
        console.log(err);
        res.status(400).send(err);
    }
});

sessionRoute.get("/", async (req, res)=>{
    try{
        const sessions = await sessionCollection.find({isBooked: false});
        sessions.map((item, index)=>{
            console.log(item.startTime);
        })
        
    }
    catch(err){
        res.status(400).send(err);
    }
});

sessionRoute.post("/booking", async (req, res) =>{
    try{
        const date = req.body.date;
        const slot = new Date(date);
        slot.setHours(10,0,0);
        let session = await sessionCollection.findOne({startTime: slot});
        console.log(session);
        session.isBooked = true;
        session.save();
        res.json("Booking done");
    }
    catch(err){
        res.send(err);
    }
})

module.exports = sessionRoute;