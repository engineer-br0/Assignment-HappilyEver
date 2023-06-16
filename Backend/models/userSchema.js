const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    id:{
        type: String,
        required : true
    },
    password: {
        type: String,
        required: true
    }
})

const usersCollection = mongoose.model("users", userSchema);
module.exports = usersCollection;