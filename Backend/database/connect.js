const mongoose = require("mongoose");
const env = require("dotenv");
env.config()

const mongoURI = process.env.mongoURI;
mongoose.connect(mongoURI, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(()=>{
    console.log("Mongo connected");
})
.catch((err)=>{
    console.log("mongo connection error", err);
});
