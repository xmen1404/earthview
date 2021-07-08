require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');

const connectDB = require('./database/db');
const {authPage} = require('./middleware/page')
connectDB();

const userRoute = require('./routes/auth.route');
const postRoute = require('./routes/post.route');
const categoryRoute = require('./routes/category.route');
const newsRoute = require('./routes/news.route');

app.use(express.json()); // đọc được bất cứ thứ gì gửi trong body (trong req body)
app.use(cors());


app.get('/', (req, res)=>{
    res.send("hello world");
});

app.use('/admin', authPage('Admin'), (req,res) => {

});

app.use('/post', authPage(['Admin', 'Contributor']), (req,res) => {

});


app.use('/api/auth', userRoute);

app.use('/api/posts', postRoute);

app.use('/api/categories', categoryRoute);

app.use('/api/news', newsRoute);


app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
});