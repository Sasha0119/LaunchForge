import React from 'react';
import { User, Bell, Shield, Wallet, Monitor, Moon } from 'lucide-react';
import './Settings.css';

const SettingsOption = ({ icon: Icon, title, desc, action }) => (
  <div className="settings-item">
    <div className="item-left">
      <div className="item-icon">
        <Icon size={20} />
      </div>
      <div className="item-text">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
    <button className="item-action">{action}</button>
  </div>
);

const Settings = () => {
  return (
    <div className="settings-container">
      <div className="page-header">
        <div>
          <h1 className="gradient-text">Account Settings</h1>
          <p className="subtitle">Manage your Forge profile and preferences.</p>
        </div>
      </div>

      <div className="settings-grid">
        <div className="settings-section glass-card">
          <div className="section-title">
            <User size={18} />
            <h3>Personal Information</h3>
          </div>
          <div className="settings-list">
            <SettingsOption title="Full Name" desc="Alex Rivera" action="Edit" icon={User} />
            <SettingsOption title="Email Address" desc="alex@launchforge.ai" action="Change" icon={Bell} />
            <SettingsOption title="Account Password" desc="Last changed 3 months ago" action="Reset" icon={Shield} />
          </div>
        </div>

        <div className="settings-section glass-card">
          <div className="section-title">
            <Wallet size={18} />
            <h3>Subscription & Billing</h3>
          </div>
          <div className="sub-status">
            <div className="status-info">
              <span className="status-badge">Pro Active</span>
              <p>Next billing date: <strong>June 15, 2026</strong></p>
            </div>
            <button className="btn-outline">Manage Billing</button>
          </div>
        </div>

        <div className="settings-section glass-card">
            <div className="section-title">
                <Monitor size={18} />
                <h3>Preferences</h3>
            </div>
            <div className="settings-list">
                <div className="settings-item">
                    <div className="item-left">
                        <div className="item-icon"><Moon size={20} /></div>
                        <div className="item-text">
                            <h4>Dark Mode</h4>
                            <p>Enabled by default for high-performance builders.</p>
                        </div>
                    </div>
                    <div className="toggle-switch active"></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
