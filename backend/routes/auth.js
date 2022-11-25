const express = require('express')
const User = require('../models/User')
const router = express.Router()

// Create a User using : POST "/api/auth/" . Doesn't required Auth

router.post('/', (req, res)=>{
    res.send(req.body)
    const user = User(req.body);
    user.save();
})

router.get('/loadusers', async(req, res)=>{
    try {
        const userdata = await User.find();
        res.send(userdata);
    } catch (error) {
        res.send(error);
    }
})


module.exports = router;