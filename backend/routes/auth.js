const express = require('express')
const bcrypt = require('bcryptjs');
const User = require('../models/User')
const fetchuser = require('../middleware/fetchuser')
const router = express.Router()
const { body, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');

const JWT_SECRET = 'MynameisCh#and'

// ROUTE-1 Create a User using : POST "/api/auth/createuser" . No login required

router.post('/createuser', [

    body('name', 'Enter a valid name').isLength({min:3}),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({min:5}),

],async(req, res)=>{

    // If there are errors, return Bad request and errors

    const errors = validationResult(req);
    if(!errors.isEmpty()){
       return res.status(400).json({errors: errors.array()});
    }

    // Check whether the user with this email exists already 

    try {

    let user = await User.findOne({email: req.body.email});

    if(user){
        return res.status(400).json({error: "Sorry a user with this email already exists"});
    }
    
    // Hashing the password with salt

    const salt = await bcrypt.genSalt(10);
    secPass = await bcrypt.hash(req.body.password, salt);

    // create a new user

    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
    });

    // sending data with auth token 

    const data = {
        user : {
          id : user.id
        }
    }

    const authtoken = jwt.sign(data, JWT_SECRET)

    res.json({authtoken}); 

    } catch (error) {
       console.log(error.message)
       res.status(500).send("Internal server error occured")  
    }

})



// ROUTE-2 Authenticate a User using : POST "/api/auth/login" . Login required


router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password can not be empty').exists(),

],async(req, res)=>{

    // If there are errors, return Bad request and errors

    const errors = validationResult(req);

    if(!errors.isEmpty()){
       return res.status(400).json({errors: errors.array()});
    }

    // Check whether the user with this email exists already 

    const {email, password} = req.body;

    try {

    let user = await User.findOne({email});

    if(!user){
        return res.status(400).json({error: "Please try to login with correct credentials."});
    }
    
    // comparing with password

    const passCompare = await bcrypt.compare(password, user.password);
   
    if(!passCompare){
        return res.status(400).json({error: "Please try to login with correct credentials."});
    }

    // sending data with auth token 
    
    const data = {
        user : {
          id : user.id
        }
    }

    const authtoken = jwt.sign(data, JWT_SECRET)

    res.json({authtoken}); 

    } catch (error) {
       console.log(error.message)
       res.status(500).send("Internal server error occured")  
    }

})


// ROUTE-3 Get loggedin user details using : POST "/api/auth/getuser" . Login required

router.post('/getuser', fetchuser,async(req, res)=>{

try {

    const userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user)
    
} catch (error) {
    console.log(error.message)
    res.status(500).send("Internal server error occured")  
}
})

module.exports = router;