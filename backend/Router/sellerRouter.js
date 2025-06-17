const express = require("express");
const sellerController = require("../controllers/sellerController");
const cookieParser = require("cookie-parser");

const router = express.Router();
router.use(cookieParser());
// console.log("here");
router.post("/signup", sellerController.signup);
router.post("/login", sellerController.login);
router.get("/myAccount", sellerController.protect, sellerController.myAccount);
router.post(
  "/updateEmail",
  sellerController.protect,
  sellerController.editEmail
);
router.post(
  "/updateSellerName",
  sellerController.protect,
  sellerController.editSellerName
);
router.post(
  "/updateAccountHolderName",
  sellerController.protect,
  sellerController.editAccountHolderName
);
router.post(
  "/updateAccountNumber",
  sellerController.protect,
  sellerController.editAccountNumber
);
router.post(
  "/updateIfscCode",
  sellerController.protect,
  sellerController.editIFSCCode
);
router.post(
  "/updatePassword",
  sellerController.protect,
  sellerController.updatePassword
);
// router.post("/test", sellerController.protect, sellerController.test);

module.exports = router;
