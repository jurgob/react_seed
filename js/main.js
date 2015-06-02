import  React 			from 'react';
import  ResultPage 	from './components/ResultPage';
import  GitHubFb 	from './utils/GitHubFb';


GitHubFb.getAllRepo();

if(typeof(window) !== 'undefined'){
	React.render(
    <ResultPage />,
    document.getElementById('content')
	);
}

