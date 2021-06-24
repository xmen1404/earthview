require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 5000;

const connectDB = require('./database/db');
connectDB();

const userRoute = require('./routes/auth.route');
const postRoute = require('./routes/post.route');
const categoryRoute = require('./routes/category.route');

app.use(express.json()); // đọc được bất cứ thứ gì gửi trong body (trong req body)

app.get('/', (req, res)=>{
    res.send("hello world");
});

app.use('/api/auth', userRoute);

app.use('/api/posts', postRoute);

app.use('/api/categories', categoryRoute);


app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
});