import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      <h2>Welcome, {currentUser ? currentUser.email : 'Guest'}</h2>
      {currentUser && (
        <div>
          <Link to={`/user/${currentUser.username}`}>Go to Profile</Link>
        </div>
      )}
    </div>
  );
};

export default Dashboard;