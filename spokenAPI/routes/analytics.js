var express    = require('express');
var router     = express.Router();
var mongo      = require('mongodb').MongoClient;
var assert     = require('assert');
var toDateTime = require('../custom_modules/ToDateTime');
var text       = require('../custom_modules/Text');
var url        = 'mongodb://localhost:27017';

/* GET users listing. */
router.post('/', function(req, res, next) {
  // res.send('respond with a resource');
  console.log('body::',req.body);
  mongo.connect(url, function(err, database) {
    
    toDateTime.reset();

    assert.equal(null, err);
    const db = database.db('spokenDB');
    var items = db.collection('Mattias_Events_11_1_2').find( { $and: [ {"properties.Duration": { $gt: 500 }}, {"properties.Duration": { $lt: 1000 } }] } );

    dataList = [];
    
    items.forEach(toDateTime.fromUnix, renderPage);

  });

  function renderPage() { res.render('analytics', { title: text.title, dataList: toDateTime.results }); }

});

module.exports = router;
