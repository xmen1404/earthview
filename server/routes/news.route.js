const express = require('express');
const router = express.Router();

const verifyToken = require("../middleware/auth");
const controller = require("../controllers/news.controller");

// @route POST api/news
// @desc create news
// @access private - admin
router.post('/', verifyToken, controller.createNews);


module.exports = router;
