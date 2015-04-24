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
        <h1>Profile list:</h1>
        <div>{profileNodes}</div>
      </div>
    );
  }

};

export default ProfileList;
