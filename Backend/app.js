const express = require("express");
const env = require("dotenv");

env.config();
const app = express();
const PORT = process.env.PORT;

app.listen(PORT, (req, res)=>{
    res.status(200).send(`Server started on ${PORT}`);
})