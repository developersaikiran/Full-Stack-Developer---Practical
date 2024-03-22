const clc = require("cli-color");
const mongoose = require("mongoose");
require('dotenv').config();

var MONGODB_URL = process.env["MONGODB_SERVER_URL_" + process.env.RUN_MODE];
console.log("Database Connection URL: ", clc.red.underline(MONGODB_URL));

mongoose.connect(MONGODB_URL).then(()=>{
    console.log("Connected to ", clc.cyan.underline(MONGODB_URL));
}).catch((err)=>{
    console.log("Database Connection Error", err.message);
})

const db = {
    users: require('./users'),
    buyers: require('./buyers'),
    sellers: require('./sellers'),
}

module.exports = { db }