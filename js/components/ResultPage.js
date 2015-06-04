import React from 'react';
import ProjectList from './ProjectList';
import AppStore from '../stores/AppStore'

var getStateFromStores = function() {
    console.log('getStateFromStores')
    return {
      'results': AppStore.getResults()
    };
};


class ResultPage extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {results: AppStore.getResults()};
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AppStore.addChangeListener(this._onChange);
  }

  render()
  {
    var _state = {
      'results': [],
      'titlePage': "Result Page"
     };
    var results = this.state.results;

    // project.key = idx;
    return (
    	<div>
    		<h1>{this.state.titlePage} </h1>
      	<ProjectList  projects={this.state.results}/>
      </div>
    );
  }

  _onChange() {
    this.setState(getStateFromStores());
  }


};

export default ResultPage;
