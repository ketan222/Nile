const mongoose = require('mongoose');
const validator = require('validator');
const Products = require('./productModel');
const bcrypt = require('bcrypt');
const SellerReviews = require('./sellerReviews');

const sellerSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, 'Enter the userName'],
        trim: true,
        maxlength: 20,
    },
    email:{
        type: String,
        required:[true, 'Enter the email'],
        validate: [validator.isEmail, 'Enter the correct email format'],
        unique: [true, 'account already exists'],
        isLowercase: true,
    },
    password:{
        type:String,
        required:[true, 'Enter the password'],
        minlength: 8,
        select: false,
    },
    passwordConfirm:{
        type:String,
        required:[true, 'Enter the confirm password'],
        validate:{
            validator: function(val){
                if(this.password === val){
                    return true;
                }
            },
            message:'Both password are different'
        }
    },
    bankDetails:{
        accountHolderName: { type: String, required: true },
        accountNumber: { type: String, required: true },
        ifscCode: { type: String, required: true },
        bankName: { type: String, required: true },
    },
    businessName:{
        type:String,
        required:[true, 'Enter the business name'],
    },
    orders: [{
        product: {
            type: mongoose.Schema.ObjectId,
            ref: Products,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            min: [1, 'Quantity must be at least 1'],
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    }],
    rating:[{
        type: mongoose.Schema.ObjectId,
        ref: Products,
    }],
    reviews:[{
        type: mongoose.Schema.ObjectId,
        ref: SellerReviews,
    }],
    createdAt:{
        type: Date,
        default: Date.now(),
    },
    active:{
        type:Boolean,
        default: true,
        select: false,
    }
},
{
    toJSON:{virtuals: true},
    toObject: {virtuals:true}                 // show virtual fields
}
);

sellerSchema.pre('save', async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
})


const Seller = mongoose.model('Seller', sellerSchema);
module.exports = Seller;