var express    = require('express');
var router     = express.Router();
var mongo      = require('mongodb').MongoClient;
var mongoUtil  = require('mongodb');
var assert     = require('assert');
var toDateTime = require('../custom_modules/ToDateTime');
var text       = require('../custom_modules/Text');
var url        = 'mongodb://localhost:27017';

/* GET users listing. */
router.post('/', function(req, res, next) {
  // res.send('respond with a resource');
  mongo.connect(url, function(err, database) {
    
    toDateTime.reset();

    assert.equal(null, err);
    const db = database.db('spokenDB');
    var items = db.collection(req.body.user).find( { $and: [ { "time": { $gt: parseInt(req.body.start), $lt: parseInt(req.body.until) } }, { "properties.Event Details": { $exists: 1 } }] } ).sort({time: 1});

    console.log(items.toArray());
    items.forEach(toDateTime.fromUnix, renderPage);

  });

  function renderPage() { console.log('items::',toDateTime.data[0]); res.render('analytics', { title: text.title, dataList: toDateTime.results, items: toDateTime.data }); }

});

module.exports = router;
