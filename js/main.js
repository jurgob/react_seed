import  React 			from 'react';
import  ResultPage 	from './components/ResultPage';
import  AboutPage 	from './components/AboutPage';
import AppActions 	from './actions/AppActions';
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;



AppActions.getAllResults();


var NavMenu = React.createClass({
	render: function(){
		return (<nav></nav>


		)
	}

});



var App = React.createClass({

  render: function () {
    return (
      <div className="App">
        <div className="AppMain">
          <RouteHandler/>
        </div>
      </div>
    );
  }
});


var routes = (
  <Route handler={App}>
    <DefaultRoute handler={ResultPage}/>
		<Route  name="about" path="about" handler={AboutPage}/>
  </Route>
);



if(typeof(window) !== 'undefined'){
	Router.run(routes, function (Handler) {
	  React.render(<Handler/>, document.getElementById('content'));
	});


	// React.render(
  //   <ResultPage />,
  //   document.getElementById('content')
	// );
}
