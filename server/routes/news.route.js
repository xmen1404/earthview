const express = require('express');
const router = express.Router();
// const multiparty = require('connect-multiparty');
const {authPage} = require("../middleware/page");

const verifyToken = require("../middleware/auth");
const upload = require("../upload/upload");
const controller = require("../controllers/news.controller");

// @route POST api/news
// @desc create news
// @access private - admin
router.post('/', verifyToken, controller.createNews);
// router.post('/', verifyToken, authPage(['Admin', 'Contributor']), controller.createNews);

// @route GET api/news
// @desc get news list
// @access private - admin
// router.get('/', verifyToken, controller.getNews);
router.get('/', controller.getNews);

// @route GET api/news/id
// #desc get news by id
// @access private - login xong mới thấy
// router.get('/:id', verifyToken, controller.getNewsById);
router.get('/:id', controller.getNewsById);

// @route PUT api/news
// #desc update news
// @access private - login xong mới thấy
router.put('/:id', verifyToken, controller.updateNews);


// @route DELETE api/news/id
// #desc delete news
// @access private - login xong mới thấy
router.delete('/:id', verifyToken, controller.deleteNews);


module.exports = router;
