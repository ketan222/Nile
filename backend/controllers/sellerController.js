const Seller = require('../Models/sellerModel.js')
const jwt = require('jsonwebtoken');
const {promisify} = require('util');


const sellerSigninToken = function(id){
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN});
}

exports.signup = async function(req, res, next){
    // console.log("her");
    const seller = await Seller.create({
        username : req.body.username,
        email : req.body.email,
        password : req.body.password,
        passwordConfirm : req.body.passwordConfirm,
        bankDetails : req.body.bankDetails,
        businessName : req.body.businessName,
    });
    // console.log(seller);

    const token = sellerSigninToken(seller._id);
    const options = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
        httpOnly: true,
    }
    res.cookie('seller-jwt', token, options);
    res.status(200).json({
        status: 'new Seller created',
        data:{
            seller,
        }
    })
}

exports.login = async function(req, res, next){
    const {email, password} = req.body;

    if(!email || !password) return res.status(400).json({status: 'Enter the email and password'});

    const seller = await Seller.findOne({email: email}).select("+password"); 

    if(!seller) return res.status(400).json({status: 'Enter the correct email and password'});
    // console.log(seller);
    // console.log(password + " " + seller.password);
    const ans = seller.chkPassword(password, seller.password);
    
     
    if(!ans) return res.status(400).json({status: 'Enter the correct email and password'});

    const token = await sellerSigninToken(seller._id);
    console.log(token);
    const options = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
        httpOnly: true,
    }
    console.log(token);
    res.cookie('seller-jwt', token, options);
    res.status(200).json({
        status: 'login successfull',
        data:{
            seller,
        }
    })
    next();
}

exports.protect = async function(req, res, next){
    let token;
    if(req.cookies['seller-jwt']) token = req.cookies['seller-jwt'];
    if(!token) return res.status(401).json({status: 'Fail',
        message: "You are not logged in! please login to account"
    })
    // console.log(token + " " + req.cookies['seller-jwt']);
    // console.log(req.cookies);
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    // console.log(decoded);
    const seller = await Seller.findOne({_id: decoded.id});
    // console.log(seller);
    if(!seller) return res.status(400).json({
        status: 'fail',
        message: 'No such account exists'
    })
    // console.log(seller);

    if (await seller.changedPasswordAfter(decoded.iat)) {
        return res.status(401).json({
            status: "fail",
            message: "User recently changed password! Please login again."
        });
    }

    // Grant access
    req.seller = seller;
    next();
}

exports.test = function(req, res, next){
    res.status(200).json({status: 'success'});
}