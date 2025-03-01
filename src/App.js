import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <nav style={styles.navbar}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/explore" style={styles.link}>Explore</Link>
        <Link to="/profile" style={styles.link}>Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

const styles = {
  navbar: {
    padding: '1rem',
    display: 'flex',
    gap: '1rem',
    backgroundColor: '#333',
    color: 'white'
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
};

export default App;
