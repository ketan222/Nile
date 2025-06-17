const mongoose = require("mongoose");
const Reviews = require("./reviewsModel");
const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: [true, "Enter product's name"],
    },
    description: {
      type: String,
      required: [true, "Enter the description of Product"],
    },
    price: {
      type: Number,
      required: [true, "Enter the product's price"],
    },
    productImage: [
      {
        type: String,
        required: [true, "Enter the product's image"],
      },
    ],
    discount: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
    category: [
      {
        type: String,
        required: [true, "select the category of the object"],
      },
    ],
    brand: {
      type: String,
      required: [true, "Enter the product's brand"],
    },
    seller: {
      type: mongoose.Schema.ObjectId,
      required: true,
    },
    stock: {
      type: Number,
      default: 0,
    },
    rating: {
      type: mongoose.Schema.Types.Decimal128,
      default: 0,
    },
    numberOf5StarRatings: {
      type: Number,
      default: 0,
    },
    numberOf4StarRatings: {
      type: Number,
      default: 0,
    },
    numberOf3StarRatings: {
      type: Number,
      default: 0,
    },
    numberOf2StarRatings: {
      type: Number,
      default: 0,
    },
    numberOf1StarRatings: {
      type: Number,
      default: 0,
    },
    numberOfRatings: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Reviews",
      },
    ],
    arrivalDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }, // show virtual fields
  }
);

productSchema.pre("save", async function (next) {
  this.numberOfRatings =
    this.numberOf5StarRatings +
    this.numberOf4StarRatings +
    this.numberOf3StarRatings +
    this.numberOf2StarRatings +
    this.numberOf1StarRatings;

  if (this.numberOfRatings > 0) {
    const avgRating =
      (this.numberOf5StarRatings * 5 +
        this.numberOf4StarRatings * 4 +
        this.numberOf3StarRatings * 3 +
        this.numberOf2StarRatings * 2 +
        this.numberOf1StarRatings) /
      this.numberOfRatings;
    this.rating = mongoose.Types.Decimal128.fromString(avgRating.toFixed(1));
  } else {
    this.rating = mongoose.Types.Decimal128.fromString("0.0");
  }

  next();
});

const Products = mongoose.model("Products", productSchema);
module.exports = Products;
