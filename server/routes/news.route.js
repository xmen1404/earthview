const express = require('express');
const router = express.Router();

const verifyToken = require("../middleware/auth");
const controller = require("../controllers/news.controller");

// @route POST api/news
// @desc create news
// @access private - admin
router.post('/', verifyToken, controller.createNews);

// @route GET api/news
// @desc get news list
// @access private - admin
router.get('/', verifyToken, controller.getNews);

// @route GET api/news/id
// #desc get news by id
// @access private - login xong mới thấy
router.get('/:id', verifyToken, controller.getNewsById);

module.exports = router;
