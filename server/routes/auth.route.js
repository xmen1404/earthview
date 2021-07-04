const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth.controller');
const verifyToken = require('../middleware/auth')
const  User = require('../models/user.model')
const jwt = require('jsonwebtoken')
router.get('/', (req,res) => {
    res.send("user route");
});

// @route GET api/auth
// @desc Check if user is logged in
// @access Public
router.get('/', verifyToken, async(req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password')
        if (!user) return res.status(400).json({success: false, message: 'User not found'})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message: 'Internal server error'})
    }
})

// @route POST api/auth/register
// @desc Register user
// @access public
router.post('/register', controller.register);
router.post('/login', controller.login);

module.exports = router;