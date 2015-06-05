import  React 			from 'react';
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler } = Router;

import  App 	from './components/App';
import  ResultPage 	from './components/ResultPage';
import  AboutPage 	from './components/AboutPage';


var routes = (
  <Route handler={App}>
    <DefaultRoute handler={ResultPage}/>
    <Route  name="home" path="/" handler={ResultPage}/>
    <Route  name="about" path="about" handler={AboutPage}/>
  </Route>
);

export default routes;
