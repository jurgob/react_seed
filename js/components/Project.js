import React from 'react';
import StyleSheet from 'react-style';
import  ProjectStyle from './css/Project.css';


class Project extends React.Component
{

  constructor(props)
  {
    super(props);
  }

  render()
  {
    var project = this.props.project;
    return (
      <div  styles={[ProjectStyle.comment]}  >
        <h1>{project.name}</h1>
        <h2  styles={[ProjectStyle.commentAuthor]}  >
             {project.description}
        </h2>
      </div>
    );
  }
};

export default Project;
