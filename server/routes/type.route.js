const express = require('express');
const router = express.Router();

const controller = require("../controllers/type.controller");
const verifyToken = require('../middleware/auth');

// @route POST api/categories
// @desc Create a category
// @access private - admin
router.post('/', verifyToken, controller.createType);

// @route GET api/categories
// @desc get all categories
// @access pravate - admin
// router.get('/', verifyToken, controller.getType);
router.get('/', controller.getType);

// @route DELETE api/categories
// #desc delete category
// @access private - login xong mới thấy
router.delete('/:id', verifyToken, controller.deleteType);

module.exports = router;