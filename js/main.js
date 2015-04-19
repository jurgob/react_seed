var React = require('react');
var ResultPage = require('./ResultPage');



if(typeof(window) !== 'undefined'){
	React.render(
    <ResultPage />,
    document.getElementById('content')
	);
}
