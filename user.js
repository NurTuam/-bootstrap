const express = require('express');
const bodyParser = require('body-parser');
let router = express.Router();
let model = require('./db');

let userInfo = model.getModel('userInfo');

router.post('/register',bodyParser(),(req,res)=>{
	let {username,password} = req.body;
	userInfo.find({username},(err,data)=>{
		console.log(data.length);
		if(err){
			console.log(err);
			res.json({code:2,msg:'后台出错了'});
			return;
		}
		else if(data.length){
//			alert('用户名已存在,请更改');
			res.json({code:0,msg:'用户名已存在'});
			return;
		}
		else{
			//存入数据库
			userInfo.create({username,password});
			userInfo.find({},(err,data)=>{
				if(err){
					console.log(err);
					res.redirect('/register');
				}
				console.log(data);
				res.redirect('/login');
			});	
			res.json({code:1});
		}
    });
});

router.post('/login',bodyParser(),(req,res)=>{
    let {username,password }= req.body;
    userInfo.find({username,password},(err,data)=>{
        if(err){
            console.log(err);
            res.json({code:0,msg:"后台出错了"});
            return;
        }
        else if(!data.length){
            res.json({code:0,msg:"用户名或者密码错误"});
            return;
        }
        else{
        	//存入本地存储
			userInfo.create({username,password});
			userInfo.find({},(err,data)=>{
				if(err){
					console.log(err);
				}
				if(data){
					req.localStorage.username=username;
					console.log(data);
					return res.redirect('/index');
				}else{
					return res.redirect('/login');
				}		
			});	
			res.json({code:1});
        }

    });
});


module.exports={
	router
}
