var express    = require('express');
var router     = express.Router();
var text       = require('../custom_modules/Text');

/* GET home page. */
router.get('/', function(req, res, next) {

  let fields = {
  
    userField:    null,
    userFieldSet: false,
  
    timeField:    null,
    timeFieldSet: false,
  
    topicField:    null,
    topicFieldSet: false,
  
    init: function() {
  
      alert('init');
      this.initFields();
  
    },
  
    initFields: function() {
      // this.userField  = document.getElementById('user_section').getElementsByClassName('field');
      // this.timeField  = document.getElementById('time_section').getElementsByClassName('field');
      // this.topicField = document.getElementById('topic_section').getElementsByClassName('field');
  
      // if(this.userField) this.initEventListeners(this.userField);
  
      // if(this.timeField) this.initEventListeners(this.timeField);
  
      // if(this.topicField) this.initEventListeners(this.topicField);
    },
  
    initEventListeners( fields ) {
      console.log(fields);
      for(var i = 0; i < fields.length; fields[i++].onblur = this.onFieldSet);
    },
  
    onFieldSet: function( e ) {
      console.info('FieldData:', e.target, e.target.value);
    }
  
  }

  res.render('index', { title: text.title });

  console.log('inner');
});

module.exports = router;
console.log('outer');