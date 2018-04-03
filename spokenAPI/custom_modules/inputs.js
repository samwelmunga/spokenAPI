let Inputs = {

    _user:  null,
    
    _topic: null,

    _from:  null,

    _until: null,

    get user() {
        return this._user;
    },

    set user( u ) {
        this._user = u;
    },

    get topic() {
        return this._topic;
    },

    set topic( t ) {
        this._topic = t;
    },

    get from() {
        return this._from;
    },

    set from( f ) {
        this._from = f;
    },

    get until() {
        return this._until;
    },

    set until( u ) {
        this._until = u;
    }

};

module.exports = Inputs;