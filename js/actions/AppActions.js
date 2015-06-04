
import  AppDispatcher 	from '../dispatcher/AppDispatcher';
import  AppConstants 	from '../constants/AppConstants';


var AppActions = {

  /**
   * @param  {array} results
   */
  receiveResults: (results) => {
    AppDispatcher.dispatch({
      actionType: AppConstants.RECEIVE_RESULTS,
      results: results
    });
  }

  // getAllResults :
  // GET_ALL_RESULTS




}

export default AppActions;
