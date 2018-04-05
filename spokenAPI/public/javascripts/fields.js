function ToDateTime() {
    
    var m_this      = this;

    this.results    = [];

    this.reset    = function() {
        m_this.results = [];
    }

    this.fromUnix = function( item, err ) {

        var date = new Date(item.time),
        hours    = date.getHours(),
        minutes  = "0" + date.getMinutes(),
        seconds  = "0" + date.getSeconds(),
        formattedTime = date.getDate() + '/' + (date.getMonth() + 1) + ' - ' + date.getFullYear() + ', ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2); 
        m_this.results.push(formattedTime);
        return m_this;

    };

}

let toDateTime = new ToDateTime();

let users = [
    'Mattias_Events_11_1_2',
]

let fields = {
  
    user:          null,

    userField:     null,
    
    userValue:     users[0],

  
    timeField:     null,

    start:         null,

    until:         null,

    timespan:      3,
    
    fromValue:     null,
    
    untilValue:    Date.now(),
  

    topicField:    null,
    
    topicValue:    null,
  

    init: function() {
  
      fields.initFields();
      fields.initDefValues();
  
    },
  
    initFields: function() {

      this.userField  = document.getElementById('user_section').getElementsByClassName('field');
      this.timeField  = document.getElementById('time_section').getElementsByClassName('field');
      this.topicField = document.getElementById('topic_section').getElementsByClassName('field');
      
      this.user       = document.getElementById('user');
      this.start      = document.getElementById('start');
      this.until      = document.getElementById('until');
  
      if(this.userField)  this.initEventListeners(this.userField);
      if(this.timeField)  this.initEventListeners(this.timeField);
      if(this.topicField) this.initEventListeners(this.topicField);

    },
  
    initEventListeners( fields ) {
      console.log(fields);
      for(var i = 0; i < fields.length; fields[i++].onblur = this.onFieldBlur);
    },
  
    initDefValues: function() {
        
        this.user.value  = fields.userValue;
        let d = new Date(this.untilValue);

        if(document.getElementById('durationTime')) {
            document.getElementById('durationTime').value = this.timespan;
            this.until.value = d.getTime();
        }

        if(document.getElementById('startDate')) {
            this.fromValue = d.setMonth(d.getMonth() - this.timespan);
            this.start.value = this.fromValue;
            document.getElementById('startDate').valueAsNumber = this.start.value;
        }

    },

    onFieldBlur: function( e ) {

      switch(e.target.name) {
        case 'user_option': 
            fields.user.value = fields.userValue = users[e.target.value];
            break;
        case 'start_date': 
            fields.date = e.target.valueAsNumber;
            break;
        case 'duration_time': 
            fields.timespan = e.target.value;
            fields.date = fields.fromValue;
            break;
        case 'topic': fields.topicValue = e.target.value; break;
      }

      console.info('FieldData:', fields.user.value, fields.date, fields.start.value, fields.until.value);

    },

    set date( date ) {


        let d = new Date(date);
        fields.start.value = fields.fromValue  = d.getTime(); 
        fields.until.value = fields.untilValue = d.setMonth(d.getMonth() + fields.timespan);
        console.log('date',fields.untilValue);

    },

    get date() {
        toDateTime.reset();
        let f = toDateTime.fromUnix({time: fields.fromValue}).results[0];
        toDateTime.reset();
        let t = toDateTime.fromUnix({time: fields.untilValue}).results[0];
        return {
            from: f,
            to: t,
        }
    }
  
}

window.onload = fields.init;