import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    console.log('Logging out...');
    navigate('/'); 
  };

  return (
    <div className='main'>
    <div className="dashboard">
      
      <nav>
        <ul className="menu">
          <a href="/home"><li>Home</li></a>
          <a href="/profile"><li>Profile</li></a>
          <a href="/settings"><li>Settings</li></a>
          <a href="/messages"><li>Messages</li></a>
          <a href="/notifications"><li>Notifications</li></a>
          <li onClick={handleLogout} className="logout">
            Logout
          </li>
        </ul>
      </nav>
      <div  className="content">
        <h1>Welcome to Dashboard</h1>
        <p>This is the dashboard page.</p>
        
      </div>
    </div></div>
  );
}

export default Dashboard;
