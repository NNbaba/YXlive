var express = require('express');
var mysql = require("mysql");
var config = require("../min/connction");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/first', function(req, res, next) {
  res.json({name:'aaa',pwd:'123'});
});


router.get('/getauth', function(req, res, next) {
	// let id = req.query.id;
	// let str = "rtmp://yingxiutv.com";
	// let url = "/OAProjectLive/"+id;
	// const md5 = require("nodejs-md5");
	// let timt = Number.parseInt((new Date().getTime())/1000);
	// let time = timt + 1800;

	// md5.string(url+"-"+time+"-0-0-m4V7UdnmvZ",function(err,data){
	// 	let md5Str = data;
	// 	console.log("md5-----"+md5Str);
	// 	console.log("时间戳"+timt);
	// 	console.log("30分钟后时间戳"+time);
	// 	let arr = md5Str.split("=");

	// 	let sstr = str+url+"-"+time+"-0-0-"+arr[1].trim();

	// 	res.send({url:sstr});
	// });




});

router.get('/ali',function (req, res, next){
	con = mysql.createConnection(config);

	console.log(req.query);
	console.log(req.body);
	con.end();

})

module.exports = router;