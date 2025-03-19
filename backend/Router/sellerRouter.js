const express = require('express');
const sellerController = require('../controllers/sellerController'); 
const cookieParser = require('cookie-parser');


const router = express.Router();
router.use(cookieParser());
// console.log("here");
router.post('/signup',sellerController.signup); 
router.post('/login',sellerController.login); 
router.post('/test', sellerController.protect, sellerController.test);
 
module.exports = router;