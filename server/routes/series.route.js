const express = require('express');
const router = express.Router();

const controller = require("../controllers/series.controller");
const verifyToken = require('../middleware/auth');

// @route POST api/categories
// @desc Create a category
// @access private - admin
router.post('/', verifyToken, controller.createSeries);

// @route GET api/categories
// @desc get all categories
// @access pravate - admin
// router.get('/', verifyToken, controller.getSeries);
router.get('/', controller.getSeries);

// @route DELETE api/categories
// #desc delete category
// @access private - login xong mới thấy
router.delete('/:id', verifyToken, controller.deleteSeries);

module.exports = router;