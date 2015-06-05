import  React 			from 'react';
var Router = require('react-router');
var { Link } = Router;


class NavMenu extends React.Component{
	render(){
		return (
      <nav>
        <ul>
          <li><Link to='home' >Results</Link></li>
          <li><Link to='about' >About</Link></li>
        </ul>
      </nav>
    )
	}

}

export default NavMenu;
