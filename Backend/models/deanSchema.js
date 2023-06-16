const mongoose = require("mongoose")

const deanSchema = mongoose.Schema({
    id:{
        type: String,
        required : true
    },
    password: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required : true
    }
})

const deanCollection = mongoose.model("dean", deanSchema);
module.exports = deanCollection;