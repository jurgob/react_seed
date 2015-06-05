import  React 			from 'react';
var Router = require('react-router');
var {RouteHandler } = Router;
import  NavMenu 			from './NavMenu';




class App extends React.Component{
  render() {
		return (
			<div className="App">
				<NavMenu />
        <div className="AppMain">
          <RouteHandler/>
        </div>
      </div>);
  }
};

export default App;
