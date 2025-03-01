import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to the Creator Platform</h1>
      <p>Discover and support your favorite creators.</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '5rem'
  }
};

export default Home;
