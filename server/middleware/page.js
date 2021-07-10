const users = require('../models/user.model')

const authPage = (permission) => {
    return (req, res, next) => {
        const userRole = req.body.role
        if (permission.includes(userRole)){
            // return res.status(401).json("Success")
            next();
        } else{
            window.location.href = "/";
            return res.status(401).json({success: false, message: "you are not allowed to access this page"});
        }
    }
};

module.exports = { authPage }