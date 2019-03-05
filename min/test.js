var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  console.log("1111111111111");
  next();
});

module.exports = router;