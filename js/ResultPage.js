import React from 'react';
import ProfileList from './ProfileList';
import AppStore from './AppStore'


// var data = [
//     {author: "Pete Hunt", text: "This is one comment"},
//     {author: "Jordan Walke", text: "This is another comment"}
// ];

class ResultPage extends React.Component
{

  constructor(props)
  {
        super(props);
        this.state = {results: AppStore.getResults()};
  }

  render()
  {
    console.log('render');
    var _state = {
      'results': AppStore.getResults(),
      'titlePage': "Result Page"
     };
    var results = this.state.results;
    return (
    	<div>
    		<h1>{this.state.titlePage} </h1>
      	<ProfileList  data={this.state.results}/>
      </div>
    );
  }

};

export default ResultPage;
