var express    = require('express');
var router     = express.Router();
var text       = require('../custom_modules/Text');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: text.title });

  console.log('inner');
});

module.exports = router;
console.log('outer');