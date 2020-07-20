var express=require('express')
var path = require('path');

var app=express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/',function (req,res) {
    res.sendFile(__dirname+'/index.html');
})

app.get('/home',function (req,res) {
res.sendFile(__dirname+'/index.html');
})


app.get('/profile/:name',function (req,res) {


    res.render('profile.ejs');
})
app.listen(4000)