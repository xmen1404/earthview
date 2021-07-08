const users = require('../models/user.model')

const authPage = (permission) => {
    return (req, res, next) => {
        const userRole = req.body.role
        if (permission.includes(userRole)){
            return res.status(401).json("Success")
        } else{
            return res.status(401).json("Failed")
        }
    }
};

module.exports = { authPage }