import AppDispatcher from '../dispatcher/AppDispatcher';
import EventEmitter from 'events';

import AppConstants from '../constants/AppConstants';
import assign from 'object-assign';


var data = [];

var CHANGE_EVENT = 'change';




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
    case AppConstants.RECEIVE_RESULTS:
      console.log('STORE trigger get results');
      data = action.results
      AppStore.emitChange();
      break;



   	default:
      // no op
  }

});


module.exports = AppStore;
