const Seller = require("../Models/sellerModel.js");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const sellerSigninToken = function (id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.myAccount = async function (req, res, next) {
  try {
    const seller = await Seller.findById(req.seller._id);
    if (!seller) {
      throw new Error("No such account exists");
    }
    res.status(200).json({
      status: "success",
      data: {
        seller,
      },
    });
  } catch (err) {
    // console.log(err);
    res.status(500).json({ status: "fail", message: "Internal server error" });
  }
};

exports.signup = async function (req, res, next) {
  // console.log("her");
  const seller = await Seller.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    bankDetails: req.body.bankDetails,
    businessName: req.body.businessName,
  });
  // console.log(seller);

  const token = sellerSigninToken(seller._id);
  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  res.cookie("seller-jwt", token, options);
  res.status(200).json({
    status: "new Seller created",
    token,
    data: {
      seller,
    },
  });
};

exports.login = async function (req, res, next) {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ status: "Enter the email and password" });

  const seller = await Seller.findOne({ email: email }).select("+password");

  if (!seller)
    return res
      .status(400)
      .json({ status: "Enter the correct email and password" });
  // console.log(seller);
  // console.log(password + " " + seller.password);
  const ans = seller.chkPassword(password, seller.password);

  if (!ans)
    return res
      .status(400)
      .json({ status: "Enter the correct email and password" });

  const token = await sellerSigninToken(seller._id);
  // console.log(token);
  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  //   console.log(token);
  res.cookie("seller-jwt", token, options);
  res.status(200).json({
    status: "login successfull",
    token,
    data: {
      seller,
    },
  });
  next();
};

exports.protect = async function (req, res, next) {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies["seller-jwt"]) {
    // Access token from cookies
    token = req.cookies["seller-jwt"];
  }
  // console.log(token + " " + req.cookies['seller-jwt']);
  // console.log(req.cookies);
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  // console.log(decoded);
  const seller = await Seller.findOne({ _id: decoded.id });
  // console.log(seller);
  if (!seller)
    return res.status(400).json({
      status: "fail",
      message: "No such account exists",
    });
  // console.log(seller);

  if (await seller.changedPasswordAfter(decoded.iat)) {
    return res.status(401).json({
      status: "fail",
      message: "User recently changed password! Please login again.",
    });
  }

  // Grant access
  req.seller = seller;
  next();
};

exports.editEmail = async function (req, res, next) {
  try {
    const newEmail = req.body.email;
    if (!newEmail)
      return res
        .status(400)
        .json({ status: "fail", message: "Enter the new email" });
    const seller = await Seller.findByIdAndUpdate(
      req.seller._id,
      { email: newEmail },
      {
        new: true,
        runValidators: true,
      }
    );
    if (!seller)
      return res
        .status(400)
        .json({ status: "fail", message: "No such account exists" });
    const token = sellerSigninToken(seller._id);
    const options = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
    // console.log(token);
    res.cookie("seller-jwt", token, options);
    res.status(200).json({
      status: "Update successfull",
      data: {
        seller,
      },
    });
  } catch (err) {
    // console.log(err);
    res.status(500).json({ status: "fail", message: "Internal server error" });
  }
};

exports.editSellerName = async function (req, res, next) {
  try {
    const newSellerName = req.body.sellerName;
    if (!newSellerName)
      return res
        .status(400)
        .json({ status: "fail", message: "Enter the new email" });
    const seller = await Seller.findByIdAndUpdate(
      req.seller._id,
      { businessName: newSellerName },
      {
        new: true,
        runValidators: true,
      }
    );
    // console.log(newSellerName);
    if (!seller)
      return res
        .status(400)
        .json({ status: "fail", message: "No such account exists" });
    const token = sellerSigninToken(seller._id);
    const options = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
    // console.log(token);
    res.cookie("seller-jwt", token, options);
    res.status(200).json({
      status: "Update successfull",
      data: {
        seller,
      },
    });
  } catch (err) {
    // console.log(err);
    res.status(500).json({ status: "fail", message: "Internal server error" });
  }
};

exports.editAccountHolderName = async function (req, res, next) {
  try {
    const newAccountHolderName = req.body.accountHolderName;
    if (!newAccountHolderName)
      return res
        .status(400)
        .json({ status: "fail", message: "Enter the new email" });
    const seller = await Seller.findByIdAndUpdate(
      req.seller._id,
      { $set: { "bankDetails.accountHolderName": newAccountHolderName } }, // ✅ Correct
      {
        new: true,
        runValidators: true,
      }
    );

    // console.log(newAccountHolderName);
    if (!seller)
      return res
        .status(400)
        .json({ status: "fail", message: "No such account exists" });
    const token = sellerSigninToken(seller._id);
    const options = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
    console.log(token);
    res.cookie("seller-jwt", token, options);
    res.status(200).json({
      status: "Update successfull",
      data: {
        seller,
      },
    });
  } catch (err) {
    // console.log(err);
    res.status(500).json({ status: "fail", message: "Internal server error" });
  }
};

exports.editAccountNumber = async function (req, res, next) {
  try {
    const newAccountNumber = req.body.accountNumber;
    if (!newAccountNumber)
      return res
        .status(400)
        .json({ status: "fail", message: "Enter the new email" });
    const seller = await Seller.findByIdAndUpdate(
      req.seller._id,
      { $set: { "bankDetails.accountNumber": newAccountNumber } },
      {
        new: true,
        runValidators: true,
      }
    );
    // console.log(newAccountNumber);
    if (!seller)
      return res
        .status(400)
        .json({ status: "fail", message: "No such account exists" });
    const token = sellerSigninToken(seller._id);
    const options = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
    console.log(token);
    res.cookie("seller-jwt", token, options);
    res.status(200).json({
      status: "Update successfull",
      data: {
        seller,
      },
    });
  } catch (err) {
    // console.log(err);
    res.status(500).json({ status: "fail", message: "Internal server error" });
  }
};

exports.editIFSCCode = async function (req, res, next) {
  try {
    const newIFSCcode = req.body.ifscCode;
    if (!newIFSCcode)
      return res
        .status(400)
        .json({ status: "fail", message: "Enter the new email" });
    const seller = await Seller.findByIdAndUpdate(
      req.seller._id,
      { $set: { "bankDetails.ifscCode": newIFSCcode } },
      {
        new: true,
        runValidators: true,
      }
    );
    // console.log(newIFSCcode);
    if (!seller)
      return res
        .status(400)
        .json({ status: "fail", message: "No such account exists" });
    const token = sellerSigninToken(seller._id);
    const options = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
    console.log(token);
    res.cookie("seller-jwt", token, options);
    res.status(200).json({
      status: "Update successfull",
      data: {
        seller,
      },
    });
  } catch (err) {
    // console.log(err);
    res.status(500).json({ status: "fail", message: "Internal server error" });
  }
};

exports.updatePassword = async function (req, res, next) {
  try {
    const newPassword = req.body.newPassword;
    if (!newPassword)
      return res
        .status(400)
        .json({ status: "fail", message: "Enter the new email" });
    const seller = await Seller.findById(req.seller._id);

    if (!seller)
      return res
        .status(400)
        .json({ status: "fail", message: "No such account exists" });
    seller.password = newPassword;
    // console.log(newPassword);
    await seller.save();
    // console.log(newPassword);
    const token = sellerSigninToken(seller._id);
    const options = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
    // console.log(token);
    res.cookie("seller-jwt", token, options);
    res.status(200).json({
      status: "Update successfull",
      data: {
        seller,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "fail", message: "Internal server error" });
  }
};

exports.test = function (req, res, next) {
  res.status(200).json({ status: "success" });
};
