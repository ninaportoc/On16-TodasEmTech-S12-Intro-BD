const express = require ("express");
const index = require ("./routes/index.js"); 
const series = require ("./routes/series.js");
const mongoose = require ("./config/dbConnect.js");
require('dotenv').config()

const app = express();

app.use(express.json());
mongoose.connect()

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*") 
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use("/", index);
app.use("/series", series);

module.exports = app;