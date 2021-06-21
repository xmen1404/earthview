const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) =>{
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1]; // lấy thằng token, thằng đầu tiên là chữ Bearer

    if(!token){
        return res.status(401).json({"success": false, "message": "Access token not found"});
    }

    try{
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        
        req.userId = decoded.userId // gán thêm userId vào request

        next();

    }catch(err){
        console.log(err);
        return res.status(403).json({"success": false, "message": "Invalid token"});
    }
}

module.exports = verifyToken;