const express = require("express");
const env = require("dotenv");
const studentRoute = require("./router/studentRoute");
const sessionRoute = require("./router/sessionRoute");
const deanRoute = require("./router/deanRouter");
require("./database/connect")

env.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT;

//router
app.use("/student", studentRoute);
app.use("/sessions", sessionRoute);
app.use("/dean", deanRoute)

app.listen(PORT, ()=>{
    console.log(`Server started on ${PORT}`);
})