const express = require('express');
const router = express.Router();

const controller = require("../controllers/category.controller");
const verifyToken = require('../middleware/auth');

// @route POST api/categories
// @desc Create a category
// @access private - admin
router.post('/', verifyToken, controller.createCategory);

// @route GET api/categories
// @desc get all categories
// @access pravate - admin
// router.get('/', verifyToken, controller.getCategory);
router.get('/', controller.getCategory);

// @route DELETE api/categories
// #desc delete category
// @access private - login xong mới thấy
router.delete('/:id', verifyToken, controller.deleteCategory);

module.exports = router;