import React from 'react';

const Profile = () => {
  return (
    <div style={styles.container}>
      <h1>Your Profile</h1>
      <p>Manage your content and supporters here.</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '5rem'
  }
};

export default Profile;
