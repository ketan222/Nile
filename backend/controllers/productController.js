const Product = require("../Models/productModel.js");
const User = require("../Models/userModel.js");
const Reviews = require("../Models/reviewsModel.js");
const Orders = require("../Models/orderModel.js");

exports.addProduct = async function (req, res) {
  try {
    const {
      productName,
      brandName,
      productPrice,
      productCategory,
      productDescription,
      productImage,
      productSpecification,
      discount,
    } = req.body;
    const sellerId = req.seller._id;

    const updatedCategory = productCategory.map((category) =>
      category.toLowerCase()
    );

    const product = new Product({
      productName: productName.toLowerCase(),
      brand: brandName.toLowerCase(),
      price: productPrice,
      stock: 0,
      category: updatedCategory,
      description: productDescription,
      productImage,
      productSpecification,
      discount,
      seller: sellerId,
    });

    await product.save();
    res.status(201).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getProductsOfSeller = async function (req, res) {
  try {
    const sellerId = req.seller._id;
    const products = await Product.find({ seller: sellerId });
    res.status(200).json({
      status: "success",
      data: {
        products,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getProducts = async function (req, res) {
  console.log("hello");
  try {
    const products = await Product.find({});
    if (!products) {
      return res.status(404).json({ message: "No products found" });
    }
    res.status(200).json({ status: "success", data: products });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getProductById = async function (req, res) {
  try {
    const productId = req.params.id;
    console.log(productId + "+++++");
    const product = await Product.findById(productId).populate({
      path: "reviews",
      populate: {
        path: "user",
        // select: "name email",
      },
    });
    if (!product) {
      throw new Error("Product not found with this id");
    }
    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// const Product = require("../models/Product"); // Make sure you import this if not already

exports.addToCart = async function (req, res) {
  try {
    const productId = req.params.id;
    const quantity = req.body.quantity || 1;
    const userId = req.user._id;

    if (!userId || !productId) {
      return res.status(400).json({ message: "Invalid user or product" });
    }

    const [user, product] = await Promise.all([
      User.findById(userId),
      Product.findById(productId),
    ]);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const existingProduct = user.cart.find(
      (item) => item.product.toString() === productId
    );

    if (existingProduct) {
      const newQuantity = existingProduct.quantity + quantity;

      if (newQuantity > product.stock) {
        return res.status(400).json({
          message: `Cannot add more than available stock (${product.stock})`,
          cart: user.cart,
        });
      }

      existingProduct.quantity = newQuantity;
    } else {
      if (quantity > product.stock) {
        return res.status(400).json({
          message: `Cannot add more than available stock (${product.stock})`,
          cart: user.cart,
        });
      }

      user.cart.push({ product: productId, quantity });
    }

    await user.save();

    res.status(200).json({ message: "Product added to cart", cart: user.cart });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getProductReviews = async function (req, res) {
  try {
    // console.log("yes");
    const productId = req.params.id;
    // console.log(productId);
    const reviews = await Reviews.find({ product: productId }).populate(
      "user",
      "name email"
    );
    res.status(200).json({
      status: "success",
      data: {
        reviews,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getProductFilter = async function (req, res) {
  try {
    // console.log("here1");
    const queryObj = { ...req.query };

    // Filtering
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((el) => delete queryObj[el]);
    // console.log(queryObj);

    let queryStr = JSON.stringify(queryObj);
    // console.log(queryStr, "queryStr");
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    // console.log(queryStr, "queryStr");
    // console.log(req.query);
    const parsedQuery = JSON.parse(queryStr);

    // Handle category array (turn it into a $in query)
    if (Array.isArray(parsedQuery.category)) {
      parsedQuery.category = { $in: parsedQuery.category };
    }

    let query = Product.find(parsedQuery);

    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-arrivalDate");
    }
    const product = await query;
    res.status(200).json({
      status: "success",
      data: {
        products: product,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getMenFashionMiddleware = async function (req, res, next) {
  req.query.category = ["men's clothing", "men", "men's fashion"];
  next();
};
exports.getWomenFashionMiddleware = async function (req, res, next) {
  req.query.category = ["women's clothing", "women", "women's fashion"];
  next();
};
exports.getSmartWatchMiddleware = async function (req, res, next) {
  req.query.category = [
    "fitness watch",
    "smartwatches",
    "fitness tracker",
    "smart band",
  ];
  next();
};
exports.getTWSMiddleware = async function (req, res, next) {
  req.query.category = [
    "tws",
    "earphones",
    "ear buds",
    "earphones",
    "headphones",
    "wireless earphones",
    "wireless headphones",
  ];
  next();
};
exports.getFurnitureMiddleware = async function (req, res, next) {
  req.query.category = [
    "furniture",
    "sofa",
    "table",
    "chair",
    "bed",
    "dining table",
    "wardrobe",
    "shelf",
  ];
  next();
};

exports.getSearchMiddleware = async function (req, res, next) {
  // console.log("here1");
  const search = req.body.search?.trim();

  if (search) {
    req.query.$or = [
      { productName: { $regex: search, $options: "i" } },
      { brand: { $regex: search, $options: "i" } },
      { category: { $regex: search, $options: "i" } },
    ];
  }
  // console.log("here2");

  // console.log("Query:", req.query);
  next();
};

exports.getNewArrivalsMiddleware = async function (req, res, next) {
  req.query.sort = "-arrivalDate";
  next();
};
exports.getTopDiscountsMiddleware = async function (req, res, next) {
  req.query.sort = "-discount";
  next();
};

exports.getMenFashion = async function (req, res) {
  try {
    const products = await Product.find(
      { category: "men" },
      { category: "men's clothing" },
      { category: "men's fashion" }
    );
    if (!products) {
      throw new Error("No products found in this category");
    }
    res.status(200).json({
      status: "success",
      data: {
        products,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getWomenFashion = async function (req, res) {
  try {
    const products = await Product.find(
      { category: "women" },
      { category: "women's clothing" },
      { category: "women's fashion" }
    );
    if (!products) {
      throw new Error("No products found in this category");
    }
    res.status(200).json({
      status: "success",
      data: {
        products,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.orderPlaced = async function (req, res) {
  try {
    const user = await User.findById(req.user._id);
    const product = await Product.findById(req.params.id);
    // console.log(req.params, "id");
    if (!user || !product) {
      throw new Error("User or product not found");
    }
    const name = req.body.name || user.name;
    const phoneNo = req.body.phoneNo || user.phoneNo;

    if (product.stock < req.body.quantity)
      throw new Error("Insufficient stock for the product");
    console.log("here");
    const order = {
      name: name,
      phoneNo: phoneNo,
      user: user._id,
      product: product._id,
      orderDate: Date.now(),
      quantity: req.body.quantity,
      priceAtPurchase: product.price,
      paymentStatus: req.body.paymentStatus,
      paymentMethod: req.body.paymentMethod,
      shippingAddress: req.body.shippingAddress,
    };
    const a = await Orders.create(order);
    user.orderHistory.push(a._id);
    await user.save();
    product.stock -= req.body.quantity;
    await product.save();
    console.log("orderPlaced called");

    res.status(200).json({
      status: "success",
      data: {
        order,
      },
    });
  } catch (err) {
    // console.log(err);
    res.status(500).json({ message: err.message || "Internal server error" });
  }
};

exports.addReview = async function (req, res) {
  try {
    const productId = req.params.id;
    const userId = req.user._id;
    const { rating, review } = req.body;

    const r = { user: userId, rating, review, product: productId };

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const realReview = await Reviews.create(r);
    product.reviews.push(realReview._id);
    product.numberOfRatings += 1;
    if (rating === 5) product.numberOf5StarRatings += 1;
    if (rating === 4) product.numberOf4StarRatings += 1;
    if (rating === 3) product.numberOf3StarRatings += 1;
    if (rating === 2) product.numberOf2StarRatings += 1;
    if (rating === 1) product.numberOf1StarRatings += 1;

    user.reviews.push(realReview._id);
    await product.save();
    await user.save();
    res.status(200).json({
      status: "success",
      data: {
        review: realReview,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.addToWishlist = async function (req, res) {
  console.log("hello add");
  try {
    const userId = req.user._id;
    const productId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    user.wishList.push(productId);
    const newUser = await user.save();
    res.status(200).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Couldn't add to wishlist" });
  }
};

exports.removeFromWishlist = async function (req, res) {
  try {
    console.log("hello remmove");
    const userId = req.user._id;
    const productId = req.params.id;

    // Await the findById call
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    const index = user.wishList.indexOf(productId);
    if (index > -1) {
      user.wishList.splice(index, 1);
    } else {
      throw new Error("Product not found in wishlist");
    }

    const newUser = await user.save();

    res.status(200).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Couldn't remove from wishlist" });
  }
};

exports.getAllReviews = async function (req, res) {
  try {
    const reviews = await Reviews.find({}).populate({
      path: "user",
      select: "username",
    });
    if (!reviews) {
      return res.status(404).json({ message: "No reviews found" });
    }
    res.status(200).json({
      status: "success",
      data: {
        reviews,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.myCart = async (req, res, next) => {
  try {
    // console.log("here");

    const currUser = await User.findById(req.user._id).populate("cart.product");
    if (!currUser) throw new Error("User not found");
    // console.log(currUser.cart[0], "cart");
    res.status(200).json({
      status: "success",
      cart: currUser.cart,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.CartProductChgQuantity = async (req, res) => {
  try {
    const cartItemId = req.params.id;
    const { quantity } = req.body;

    const user = await User.findById(req.user._id).populate("cart.product");

    const cartItem = user.cart.find(
      (item) => item._id.toString() === cartItemId
    );

    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    const availableStock = cartItem.product.stock;

    // If trying to increase beyond stock
    if (quantity > 0 && cartItem.quantity + quantity > availableStock) {
      return res.status(400).json({
        message: `Cannot add more than available stock (${availableStock})`,
        cart: user.cart,
      });
    }

    // Apply the quantity change
    cartItem.quantity += quantity;

    // If quantity is 0 or less, remove the item
    if (cartItem.quantity <= 0) {
      user.cart = user.cart.filter(
        (item) => item._id.toString() !== cartItemId
      );
    }

    await user.save();

    res.status(200).json({
      status: "success",
      message: "Cart item quantity updated",
      cart: user.cart,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.myOrders = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate({
      path: "orderHistory",
      populate: { path: "product" },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // console.log(user.orderHistory, "orderHistory");
    res.status(200).json({
      status: "success",
      data: {
        orders: user.orderHistory,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};
