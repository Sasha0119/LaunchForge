import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Sparkles, Palette, Presentation, Settings, Zap, Rocket } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-box">LF</div>
        <span>LaunchForge</span>
      </div>
      
      <nav className="sidebar-nav">
        <NavLink to="/dashboard" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/generator" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <Sparkles size={20} />
          <span>AI Generator</span>
        </NavLink>
        <NavLink to="/brand-studio" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <Palette size={20} />
          <span>Brand Studio</span>
        </NavLink>
        <NavLink to="/pitch-deck" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <Presentation size={20} />
          <span>Pitch Deck</span>
        </NavLink>
        <NavLink to="/settings" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <Settings size={20} />
          <span>Settings</span>
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <div className="pro-card">
          <p className="pro-label">Pro Plan</p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Unlimited AI generations enabled.</p>
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
