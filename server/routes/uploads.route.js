const express = require('express');
const router = express.Router();

const controller = require('../controllers/uploads.controller');
const upload = require("../upload/upload");
const verifyToken = require('../middleware/auth');

// @route POST api/uploads
// #desc upload image
// @access private - login xong mới thấy
router.post('/', upload.any(), controller.uploadImage);

module.exports = router;