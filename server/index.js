require('dotenv').config();
const express = require('express');
const multer = require('multer');

const app = express();
const PORT = 5000;

const cors = require('cors');
const morgan = require('morgan');

const connectDB = require('./database/db');
connectDB();

const userRoute = require('./routes/auth.route');
const postRoute = require('./routes/post.route');
const categoryRoute = require('./routes/category.route');
const newsRoute = require('./routes/news.route');
const uploadsRoute = require('./routes/uploads.route');
const typeRoute = require('./routes/type.route');

//CREATE EXPRESS APP
app.use(express.json()); // đọc được bất cứ thứ gì gửi trong body (trong req body)
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("uploads"));

app.get('/', (req, res)=>{
    res.send("hello world");
});

app.use('/api/auth', userRoute);

app.use('/api/posts', postRoute);

app.use('/api/categories', categoryRoute);

app.use('/api/types', typeRoute);

app.use('/api/news', newsRoute);

app.use('/api/uploads', uploadsRoute);

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
});