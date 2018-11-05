const express = require('express');
const xtpl = require('xtpl');
const fs=require("fs");
const app = express();

app.use(express.static("./public-static"));

app.set('views','./public-static/public');
app.set('view engine','html');
app.engine('html',xtpl.renderFile);

app.get('/index',(req,res)=>{
res.render('index', {});
});


app.get('/more',(req,res)=>{
res.render('more', {
	title: '更多'
   });
});

app.get('/simpletro',(req,res)=>{
res.render('simpletro', {
	title: '简介'
  });
});

app.get('/register',(req,res)=>{
res.render('register', {
    title: '注册'
   });
});

app.get('/login',(req,res)=>{
    res.render('login',{
    	title: '登录'
    });
});

app.use('/user',require('./user').router);
app.listen(5454)
