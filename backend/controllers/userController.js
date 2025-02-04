const User = require('../Models/userModel.js');
const jwt = require('jsonwebtoken');

const signToken = function(id){
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN});
}

exports.signup = async function(req, res, next){
    const newUser = await User.create({
        username: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
    });
    const token = signToken(newUser._id);
    const cookieOptions = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN),
        httpOnly: true,
    }
    res.cookie('jwt', token, cookieOptions);
    // console.log(req.body.name, req.body.email);
    // console.log("signup");
    res.status(200).json({
        status: 'success',
        // token,
        data:{
            newUser,
        }
    })
}
exports.login = async function(req, res, next){
    const {email, password} = req.body;
    if(!email || !password) res.status(400).json({status:'Enter email && password'});
    const user = await User.findOne({email: email}).select('+password');
    if(!user || !(await user.correctPassword(password, user.password))) res.status(401).json({status: "enter valid email and password"});
    // console.log(user.id);
    const id = user.id;
    const token = jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    })
    const cookieOptions = {
        expires: new Date(Date.now() + (process.env.JWT_COOKIE_EXPIRES_IN*1)),
        httpOnly: true,
    }
    // console.log(token);
    res.cookie('jwt', token, cookieOptions);
    res.status(200).json({
        status: 'login successfull',
        data:{
            user,      
        }      
    })
}