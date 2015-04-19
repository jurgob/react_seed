import React from 'react';
import Profile from './Profile';



class ProfileList extends React.Component
{

  render() {
    var profileNodes = this.props.data.map((profile) => {
      return (
        <Profile author={profile.author}>
          {profile.text}
        </Profile>
      );
    });

    return (
      <div className="profileList">
        {profileNodes}
      </div>
    );
  }

};

export default ProfileList;
