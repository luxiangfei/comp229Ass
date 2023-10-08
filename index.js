let express = require('express');
let app = express();
const path = require('path');


app.set('view engine','ejs');

app.use(express.static('public'));


app.get('/', (req,res)=>{
    res.render('Assignment1/pages/home');
});



app.get('/about', (req,res)=>{
    res.render('Assignment1/pages/about');
});

app.get('/product', (req,res)=>{
    res.render('Assignment1/pages/product');
});

app.get('/service', (req,res)=>{
    res.render('Assignment1/pages/service');
});

app.get('/contact', (req,res)=>{
    res.render('Assignment1/pages/contact');
});




app.listen(4000);