
import  AppDispatcher 	from '../dispatcher/AppDispatcher';
import  AppConstants 	from '../constants/AppConstants';
import  GitHubFb 	from '../utils/GitHubFb';


var AppActions = {
  /**
   * @param  {array} results
   */
  receiveResults: (results) => {
    AppDispatcher.dispatch({
      actionType: AppConstants.RECEIVE_RESULTS,
      results: results
    });
  },

  getAllResults: () => {
    GitHubFb.getAllRepo()
      .then((json) =>{
        AppActions.receiveResults(json);
      });


  //
  //
  //   // AppDispatcher.dispatch({
  //   //   actionType: AppConstants.GET_ALL_RESULTS,
  //   //   results: results
  //   // });
  }

  // getAllResults :
  // GET_ALL_RESULTS




}

export default AppActions;
