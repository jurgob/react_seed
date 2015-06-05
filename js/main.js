import  React 			from 'react';
import AppActions 	from './actions/AppActions';
import routes from './routes';

var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

AppActions.getAllResults();

if(typeof(window) !== 'undefined'){
	Router.run(routes, function (Handler) {
	  React.render(<Handler/>, document.getElementById('content'));
	});
}
