var React = require('react');
var ProfileList = require('./ProfileList');


var data = [
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Jordan Walke", text: "This is another comment"}
];

class ResultPage extends React.Component
{

  render()
  {

    return (
    	<div>
    		<h1>Results</h1>
      	<ProfileList data={data}/>
      </div>
    );
  }

};

export default ResultPage;
