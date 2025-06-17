const express = require("express");
const rateLimit = require("express-rate-limit");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const userRouter = require(`./Router/userRouter.js`);
const sellerRouter = require("./Router/sellerRouter.js");
const productRouter = require("./Router/productRouter.js");

const app = express();

// CORS config
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE,PATCH",
  credentials: true,
};
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
const limiter = rateLimit({
  max: 10000,
  windowMs: 60 * 60 * 1000,
  message: "Too many req from this IP, please try again in an hour",
});
app.use("/api/", limiter);

app.use("/api/user", userRouter);
app.use("/api/seller", sellerRouter);
app.use("/api/product", productRouter);

module.exports = app;
