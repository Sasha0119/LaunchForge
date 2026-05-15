import React from 'react';
import { Search, Bell, User } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-branding">
        <h1>Overview</h1>
        <p>Manage your active startup sprints</p>
      </div>

      <div className="nav-actions">
        <div className="status-indicator">
          <div className="status-dot"></div>
          AI System Ready
        </div>
        <div className="user-avatar"></div>
      </div>
    </header>
  );
};

export default Navbar;
