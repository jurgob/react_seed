import  React 			from 'react';
import  ResultPage 	from './components/ResultPage';
import AppActions 	from './actions/AppActions';


AppActions.getAllResults();

if(typeof(window) !== 'undefined'){
	React.render(
    <ResultPage />,
    document.getElementById('content')
	);
}
