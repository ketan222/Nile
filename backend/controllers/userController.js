const User = require('../Models/userModel.js');
const jwt = require('jsonwebtoken');
// const cookieParser = require('cookie-parser');
const {promisify} = require('util');
const crypto = require('crypto');
const sendEmail = require('../utils/email.js');



const signToken = function(id){
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN});
}

exports.myAccount = async function(req, res, next){
    res.status(200).json({
        status: "success",
    })
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
        expires: new Date(Date.now() + (parseInt(process.env.JWT_COOKIE_EXPIRES_IN, 10) * 24 * 60 * 60 * 1000)), // Ensure it's a valid number
        httpOnly: true,
    }
    
    res.cookie('user-jwt', token, cookieOptions);
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
    if(!email || !password) return res.status(400).json({status:'Enter email && password'});
    const user = await User.findOne({email: email}).select('+password');
    if(!user || !(await user.correctPassword(password, user.password)))return  res.status(401).json({status: "enter valid email and password"});
    // console.log(user.id);
    const id = user.id;
    const token = jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    })
    const cookieOptions = {
        expires: new Date(Date.now() + ((process.env.JWT_COOKIE_EXPIRES_IN*1) *  24 * 60 * 60 * 1000)),
        httpOnly: true,
    }
    // console.log(req.cookies.jwt);
    res.cookie('user-jwt', token, cookieOptions);
    // console.log(req.headers.authorization);
    // console.log(res.rawHeade);
    // console.log(token); 
    res.status(200).json({
        status: 'login successfull',
        data:{
            user,      
        }       
    })
}
exports.protect = async (req, res, next) => {
    let token;

    // 1. Get JWT token from Authorization header OR cookies
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies['user-jwt']) {  // Access token from cookies
        token = req.cookies['user-jwt'];
    }
    // console.log(req.cookies);

    if (!token) {
        return res.status(401).json({
            status: "fail",
            message: "You are not logged in! Please login to access this route."
        });
    }

    // 2. Validate JWT token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // 3. Check if user exists
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
        return res.status(401).json({ status: "fail", message: "User no longer exists!" });
    }

    // 4. Check if user changed password after JWT was issued
    if (await currentUser.changedPasswordAfter(decoded.iat)) {
        return res.status(401).json({
            status: "fail",
            message: "User recently changed password! Please login again."
        });
    }

    // Grant access
    req.user = currentUser;
    next();
};

exports.forgot = async(req, res, next) =>{
    const user =await User.findOne({email: req.body.email});
    if(user == null)return res.status(400).json({status: 'please enter valid email address'})
        // console.log(req.user.email);
    const resetToken = user.createPasswordResetToken();
    await user.save({validateBeforeSave : false});
    console.log(resetToken);
    // console.log(user);
    const resetURL = `http://127.0.0.1:8000/api/user/myAccount/resetPassword/${resetToken}`;
    const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIF you didn't forget your password, please ignore this email`;

    try{
        await sendEmail({
            email: user.email,
            subject: "Password Reset",
            message,
        })
        res.status(400).json({
            status: 'success'
        })
    }
    catch(err){
        user.passwordResetToken=undefined;
        user.passwordResetExpires = undefined;
        console.log(err);
        res.status(400).json({
            status:"Can't send the email to your email"
        })
    }

    
}
exports.reset = async(req, res, next) =>{

    const hashedToken = crypto.createHash('sha256')
            .update(req.params.token)
            .digest('hex');
    const user = await User.findOne({passwordResetToken: hashedToken});
    if(user == null)return res.status(404).json({status: 'Link expired'});

    if (req.body.password !== req.body.passwordConfirm) {
        return res.status(400).json({ status: 'Passwords do not match' });
    }
    
    if (user) {
        user.password = req.body.password;
        user.passwordConfirm = req.body.passwordConfirm;
        user.passwordResetToken = undefined;
        user.passwordResetExpires= undefined;
        await user.save();
        const token = signToken(user._id);
        const options = {
            expires: new Date(Date.now() + (parseInt(process.env.JWT_COOKIE_EXPIRES_IN, 10) * 24 * 60 * 60 * 1000)), // Ensure it's a valid number
            httpOnly: true,
        }
        
        res.cookie('user-jwt', token, options); 
    }


    res.status(200).json({ 
        status: 'success' 
    })
} 