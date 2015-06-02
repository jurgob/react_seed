import React from 'react';
import Project from './Project';



var ProjectList = React.createClass({
  render: function() {
    var profileNodes = this.props.projects.map(
      (project, idx) =>{
        console.log('project ',project);
        var prj = project;
        return (
          <Project key={project.id}   project={project} />
        );
      }
    );

    return (
      <div className="profileList">
        <h1>Profile list:</h1>
        <div>{profileNodes}</div>
      </div>
    );
  }

});



export default ProjectList;
