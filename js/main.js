import  React 			from 'react';
import  ResultPage 	from './ResultPage';



if(typeof(window) !== 'undefined'){
	React.render(
    <ResultPage />,
    document.getElementById('content')
	);
}
