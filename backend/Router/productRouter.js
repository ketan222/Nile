const express = require("express");
const productController = require("../controllers/productController.js");
const sellerController = require("../controllers/sellerController.js");
const userController = require("../controllers/userController.js");
const cookieParser = require("cookie-parser");

// const cookieParser = require('cookie-parser');

const app = express.Router();

app.use(cookieParser());

app.post("/addProduct", sellerController.protect, productController.addProduct);
app.get("/getProducts", productController.getProducts);
app.get(
  "/getProductsOfSeller",
  sellerController.protect,
  productController.getProductsOfSeller
);
app.get("/getProduct/:id", productController.getProductById);
app.patch(
  "/addToCart/:id",
  userController.protect,
  productController.addToCart
);

app.get("/getAllReviews", productController.getAllReviews);

app.get("/getProductReviews/:id", productController.getProductReviews);

app.get("/getProductFiltered", productController.getProductFilter);

app.get(
  "/getMenFashion",
  productController.getMenFashionMiddleware,
  productController.getProductFilter
);
app.get(
  "/getWomenFashion",
  productController.getWomenFashionMiddleware,
  productController.getProductFilter
);
app.get(
  "/getSmartWatches",
  productController.getSmartWatchMiddleware,
  productController.getProductFilter
);
app.get(
  "/getTWS",
  productController.getTWSMiddleware,
  productController.getProductFilter
);
app.get(
  "/getFurniture",
  productController.getFurnitureMiddleware,
  productController.getProductFilter
);

app.get(
  "/getNewArrivals",
  productController.getNewArrivalsMiddleware,
  productController.getProductFilter
);

app.get(
  "/getTopDiscounts",
  productController.getTopDiscountsMiddleware,
  productController.getProductFilter
);

app.post(
  "/getSearchResult",
  productController.getSearchMiddleware,
  productController.getProductFilter
);

app.post(
  "/orderPlaced/:id",
  userController.protect,
  productController.orderPlaced
);

app.post("/addReview/:id", userController.protect, productController.addReview);

app.post(
  "/addToWishlist/:id",
  userController.protect,
  productController.addToWishlist
);
app.post(
  "/removeFromWishlist/:id",
  userController.protect,
  productController.removeFromWishlist
);
// app.patch(
//   "/buyProduct/:id",
//   userController.protect,
//   productController.buyProduct
// );

module.exports = app;
