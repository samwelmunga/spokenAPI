let fields = {
  
    userField:     null,
    
    userFieldSet:  false,
    
    userValue:     null,

  
    timeField:     null,
    
    timeFieldSet:  false,
    
    timeValue:     null,
  

    topicField:    null,
    
    topicFieldSet: false,
    
    fromValue:     null,
    
    untilValue:    3,
  

    init: function() {
  
      alert('init');
      fields.initFields();
      fields.initDefValues();
  
    },
  
    initFields: function() {
      this.userField  = document.getElementById('user_section').getElementsByClassName('field');
      this.timeField  = document.getElementById('time_section').getElementsByClassName('field');
      this.topicField = document.getElementById('topic_section').getElementsByClassName('field');
  
      if(this.userField) this.initEventListeners(this.userField);
  
      if(this.timeField) this.initEventListeners(this.timeField);
  
      if(this.topicField) this.initEventListeners(this.topicField);
    },
  
    initEventListeners( fields ) {
      console.log(fields);
      for(var i = 0; i < fields.length; fields[i++].onblur = this.onFieldBlur);
    },
  
    initDefValues: function() {
        if(document.getElementById('duration')) {
            document.getElementById('duration').value = this.untilValue;
        }
    },

    onFieldBlur: function( e ) {
      console.info('FieldData:', e.target, e.target.value);
      switch(e.target.name) {
        case 'user_option' || 'user_input': break;
        case 'user_option': break;
        case 'user_option': break;
      }
    }
  
}

window.onload = fields.init;