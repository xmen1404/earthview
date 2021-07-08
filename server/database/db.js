const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_USERNAME}.lfqtu.mongodb.net/earthview?retryWrites=true&w=majority`, {
        //await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_USERNAME}.77jlr.mongodb.net/earthview?retryWrites=true&w=majority`, {

        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
        });

        console.log("MongoDB connected");
    }
    catch(error){
        console.log(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;