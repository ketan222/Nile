const mongoose = require('mongoose');
const Reviews = require('./reviewsModel');
const productSchema = new mongoose.Schema({
    productName: {
        type:String,
        required: [true, "Enter product's name"],
    },
    description: {
        type:String,
        required: [true, 'Enter the description of Product']
    },
    price:{
        type: Number, 
        required: [true, "Enter the product's price"]
    },
    discount:{
        type: Number,
        default: 0,
        min:0,
        max: 100,
    },
    category:{
        type: String,
        required: [true, "select the category of the object"],
    },
    brand:{
        type:String,
        required: [true, "Enter the product's brand"],
    },
    seller:{
        type: mongoose.Schema.ObjectId,
        required:true,
    },
    stock:{
        type: Number,
        default: 0,
    },
    rating:{
        type:mongoose.Schema.Types.Decimal128,
        default: 0,
    },
    numberOfRatings:{
        type: Number,
        default:0,
    },
    reviews:[{
        type: mongoose.Schema.ObjectId,
        ref: 'Reviews',
    }]
},
{
    toJSON:{virtuals: true},
    toObject: {virtuals:true}                 // show virtual fields
}
);



const Products = mongoose.model( 'Products',productSchema)
module.exports = Products;