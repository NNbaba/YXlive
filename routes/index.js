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



router.get('/ali',function (req, res, next){
	con = mysql.createConnection(config);
	console.log(con);
})

module.exports = router;