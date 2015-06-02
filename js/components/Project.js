import React from 'react';
import StyleSheet from 'react-style';
import  ProfileStyle from './css/Profile.css';


class Project extends React.Component
{

  constructor(props)
  {
    super(props);
  }

  render()
  {
    console.log('Project this.props', this.props)
    var project = this.props.project;
    return (
      <div  styles={[ProfileStyle.comment]}  >
        <h1>{project.name}</h1>
        <h2  styles={[ProfileStyle.commentAuthor]}  >
             {project.description}
        </h2>
      </div>
    );
  }

};

export default Project;
