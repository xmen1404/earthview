const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth.controller');

router.get('/', (req,res) => {
    res.send("user route");
});

// @route POST api/auth/register
// @desc Register user
// @access public
router.post('/register', controller.register);
router.post('/login', controller.login);

module.exports = router;