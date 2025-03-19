const express = require("express");
const rateLimit = require('express-rate-limit');
const userRouter = require(`./Router/userRouter.js`);
const sellerRouter = require('./Router/sellerRouter.js');

// Limit req from same IP=-[['/]]
const limiter = rateLimit({
    max: 100,                          // 100 req from same IP
    windowMs: 60 * 60 * 1000,           // in an hour
    message: "Too many req from this IP, please try again in an hour"
})


const app = express();
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/seller', sellerRouter);
app.use('/api/',limiter);


module.exports = app;