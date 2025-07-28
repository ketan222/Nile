const mongoose = require("mongoose");
const validator = require("validator");

const order = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Enter the name of recipient"],
    },
    phoneNo: {
      type: String,
      required: [true, "Enter the phone number of recipient"],
    },
    product: {
      type: mongoose.Schema.ObjectId,
      required: [true, "Order must have a product"],
      ref: "Products",
    },
    quantity: {
      type: Number,
      required: [true, "Enter the quantity for the product"],
      min: [1, "Quantity cannot be less than 1"],
    },
    orderDate: {
      type: Date,
      default: Date.now,
    },
    returnApplied: {
      type: Boolean,
      default: false,
    },
    returnStatus: {
      type: String,
      enum: ["Not Applied", "Returned"],

      default: "Not Applied",
    },
    returnDate: {
      type: Date,
    },
    returnReason: {
      type: String,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "Users",
      required: [true, "Order must belong to a user"],
    },
    priceAtPurchase: {
      type: Number,
      // required: true,
      required: [true, "Price at purchase is required"],
    },
    orderStatus: {
      type: String,
      enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
      default: "Pending",
    },
    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid", "Failed"],
      default: "Pending",
    },
    paymentMethod: {
      type: String,
      enum: ["COD", "Credit Card", "UPI", "Net Banking"],
    },
    shippingAddress: {
      street: String,
      city: String,
      state: String,
      postalCode: String,
      country: String,
      apt: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }, // show virtual fields
  }
);

const Orders = mongoose.model("Orders", order);
module.exports = Orders;
