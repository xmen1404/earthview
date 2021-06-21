const userModel = require('../models/user.model');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');

module.exports.register = async(req,res) =>{
    const {username, password} = req.body;

    // simple validation
    if(!username || !password){
        return res
                .status(400)
                .json({success: false, message: "missing username and/or password"});
    }

    try{
        // check user - xem có user trong database chưa
        const user = await userModel.findOne({username: username});

        if(user){
            return res.status(400).json({success: false, message: "username exists"})
        }

        // all good => hash password
        const hashedPassword = await argon2.hash(password);
        const newUser = new userModel({
            username: username,
            password: hashedPassword
        });

        await newUser.save();

        // return token dùng jwt
        const accessToken = jwt.sign(
            {userId: newUser._id}, 
            process.env.ACCESS_TOKEN_SECRET
        )
        
        return res.json({success: true, message: "register done", accessToken});
    } catch(err){
        // in ra lỗi nếu server có vấn đề
        console.log(err);
        res.status(500).json({"success": false, "message": "Internal server error"});
    }
}

module.exports.login = async (req, res) => {
    // login cũng là hàm bất đồng bộ, vì trong này có communication với db
    const {username, password} = req.body;

    // simple validation
    if(!username || !password){
        return res
                .status(400)
                .json({success: false, message: "missing username and/or password"});
    }

    // check xem username có trong db không
    try{
        const user = await userModel.findOne({username:username});
        if(!user){
            return res.status(400).json({"success": false, "message": "Incorrect username or password"});
        }

        const passwordValid = await argon2.verify(user.password, password);
        
        if(!passwordValid){
            return res.status(400).json({"success": false, "message": "Incorrect username or password"});
        }

        // all good
        // return token dùng jwt
        const accessToken = jwt.sign(
            {userId: user._id}, 
            process.env.ACCESS_TOKEN_SECRET
        )
        
        return res.json({success: true, message: "login successfully", accessToken});


    }catch(err){
        // in ra lỗi nếu server có vấn đề
        console.log(err);
        res.status(500).json({"success": false, "message": "Internal server error"});
    }
}