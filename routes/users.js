var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/getuser', function(req, res, next) {
  res.send('respond with a getuser');
});

module.exports = router;
