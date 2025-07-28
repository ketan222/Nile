const express = require("express");
const userController = require("../controllers/userController.js");
const accountRouter = require("./accountRouter.js");
const cookieParser = require("cookie-parser");
const productController = require("../controllers/productController.js");

// const cookieParser = require('cookie-parser');

const router = express.Router();

router.use(cookieParser());
// router.use(cookieParser());

router.get("/getUser", userController.protect, userController.myAccount);
router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.use("/myAccount", userController.protect, accountRouter);
router.get("/myCart", userController.protect, productController.myCart);
router.patch(
  "/CartProductChgQuantity/:id",
  userController.protect,
  productController.CartProductChgQuantity
);
router.get("/myOrders", userController.protect, productController.myOrders);
// router.get('/myAccount', userController.protect, userController.myAccount);
// router.use(function(req, res, next){
//     // console.log("here");
//     // console.log(req.cookies);
//     next();
// })

module.exports = router;
