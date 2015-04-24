var AppDispatcher = require('./AppDispatcher');
var EventEmitter = require('events').EventEmitter;

var AppConstants = require('./AppConstants');
var assign = require('object-assign');


var data = [
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Jordan Walke", text: "This is another comment"}
];



var AppStore = assign({},EventEmitter.prototype, {


	getResults: function(){
		return data;
	},

	emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

AppDispatcher.register(function(action) {
	switch(action.actionType) {
    case AppConstants.GET_RESULTS:

      AppStore.emitChange();

      break;

   	default:
      // no op
  }

});


module.exports = AppStore;
