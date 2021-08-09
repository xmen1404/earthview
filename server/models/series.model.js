const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const seriesSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
    },
    image:{
        type: String
    }
});

module.exports = mongoose.model('series', seriesSchema);