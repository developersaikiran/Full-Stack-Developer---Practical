const express = require("express");
const cors = require("cors");
const path = require('path');
const rateLimit = require('express-rate-limit');

require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json({ limit: '500000mb', extended: true }));
app.use(express.urlencoded({ limit: '500000mb', extended: true }));
app.use('/public', express.static(path.join(__dirname, '../public')));

// Apply rate limiting middleware to all routes
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 10 minutes
    max: 100, // 100 requests per window
});
app.use(limiter);

app.use("/api", require("./routes"))

module.exports = app;