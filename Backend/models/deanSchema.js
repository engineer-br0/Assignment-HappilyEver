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
    },
    sessions:[{
        session_time:{
            type: String,
            required: true
        },
        student:{
            type: String,
            required: true
        }
    }
    ]
})

const deanCollection = mongoose.model("deans", deanSchema);
module.exports = deanCollection;