
import  AppDispatcher 	from '../dispatcher/AppDispatcher';
import  AppConstants 	from '../constants/AppConstants';


var AppActions = {

  /**
   * @param  {array} results
   */
  receiveResults: function(results) {
    AppDispatcher.dispatch({
      actionType: AppConstants.RECEIVE_RESULTS,
      results: results
    });
  }



}

export default AppActions;
