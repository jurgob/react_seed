var AppDispatcher = require('./AppDispatcher');
var AppConstants = require('./AppConstants');

var AppActions = {

  /**
   * @param  {array} results
   */
  getResults: function(results) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.GET_RESULTS,
      results: results
    });
  }

}

export default AppActions;

