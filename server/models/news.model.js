const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: "categories"
    },
    title:{
        type: String,
        required: true
    },
    background:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    date:{
        type: String, 
        required: true
    }
    // body:{
        
    //     type: String,
    //     required: true
    // },
    // end:{
    //     type: String,
    //     required: true
    // } 
})

module.exports = mongoose.model('news', newsSchema);