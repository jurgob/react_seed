import React from 'react';
import Project from './Project';



class ProjectList extends React.Component
{

  render()
  {
    var profileNodes = this.props.projects.map(
      (project, idx) =>{
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

}



export default ProjectList;
