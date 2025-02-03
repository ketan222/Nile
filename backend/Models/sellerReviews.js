const mongoose = require("mongoose");
const Seller = require('./sellerModel');
const User = require('./userModel');
const sellerReviewSchema = mongoose.Schema({
    review: {
        type: String,
        required: [true, 'Review cannot be empty']
    },
    rating: {
        type: Number,
        min:1,
        max:5
    },
    createdAt: {
        type:Date,
        default: Date.now()
    },
    seller:
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Seller',
            required:[true, 'Review must belong to a seller.']
        }
    ,
    user:
        {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required:[true, 'Review must belong to a user']
        }
    
},
{
    toJSON:{virtuals: true},
    toObject: {virtuals:true}                 // show virtual fields
});

const SellerReviews = mongoose.model("SellerReviews", sellerReviewSchema);
module.exports = SellerReviews;