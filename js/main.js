import  React 			from 'react';
import  ResultPage 	from './components/ResultPage';



if(typeof(window) !== 'undefined'){
	React.render(
    <ResultPage />,
    document.getElementById('content')
	);
}
