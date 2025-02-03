const User = require('../Models/userModel.js');


exports.signup = async function(req, res, next){
    const newUser = await User.create({
        username: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
    });
    // console.log(req.body.name, req.body.email);
    // console.log("signup");
    res.status(200).json({
        status: 'success',
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
    res.status(200).json({
        status: 'login successfull',
        data:{
            user,      
        }      
    })
}