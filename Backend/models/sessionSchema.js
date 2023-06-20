const mongoose = require("mongoose");
const usersCollection = require("./userSchema");

const sessionSchema = mongoose.Schema({
    isBooked : {
        type : String,
        required: true
    },
    startTime: {
        type : String,
        required: true
    },
    endTime: {
        type : String,
        required: true
    },
    dean: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "dean",
        required: true
    },
});


const sessionCollection = mongoose.model("sessions", sessionSchema);

module.exports = sessionCollection;