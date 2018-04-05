function ToDateTime() {
    
    var m_this      = this;

    this.results    = [];

    this.data       = []

    this.reset    = function() {
        m_this.results = [];
        m_this.data    = [];
    }

    this.fromUnix = function( item, err ) {

        var date = new Date(item.time),
        hours    = date.getHours(),
        minutes  = "0" + date.getMinutes(),
        seconds  = "0" + date.getSeconds(),
        formattedTime = date.getDate() + '/' + (date.getMonth() + 1) + ' - ' + date.getFullYear() + ', ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2); 
        m_this.results.push(formattedTime);
        m_this.data.push(item);

    };

}

module.exports = new ToDateTime();