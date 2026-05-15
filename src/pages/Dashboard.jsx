import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Users, 
  Briefcase, 
  BarChart3, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { mockChartData, mockStartupIdeas } from '../data/mockData';
import './Dashboard.css';

const StatCard = ({ title, value, icon: Icon, color, trend }) => (
  <motion.div 
    className="glass-card stat-card"
    whileHover={{ y: -5 }}
  >
    <div className="stat-header">
      <div className="stat-icon" style={{ backgroundColor: `${color}20`, color }}>
        <Icon size={20} />
      </div>
      <span className="trend" style={{ color: trend > 0 ? 'var(--success)' : 'var(--danger)' }}>
        {trend > 0 ? '+' : ''}{trend}%
      </span>
    </div>
    <div className="stat-body">
      <h3>{value}</h3>
      <p>{title}</p>
    </div>
  </motion.div>
);

const Dashboard = () => {
  return (
    <div className="dashboard-content">
      <div className="stats-grid">
        <div className="stat-card">
          <p>Startup Readiness Score</p>
          <div className="stat-body">
            <h3>92%</h3>
            <span className="trend" style={{ color: 'var(--success)' }}>+4.2%</span>
          </div>
        </div>
        <div className="stat-card">
          <p>Market TAM Estimate</p>
          <div className="stat-body">
            <h3>$1.2B</h3>
            <span className="trend" style={{ color: 'var(--acc-primary)' }}>SaaS Sector</span>
          </div>
        </div>
        <div className="stat-card">
          <p>Generations This Week</p>
          <div className="stat-body">
            <h3>24</h3>
            <span className="trend">/ 50 limit</span>
          </div>
        </div>
      </div>

      <div className="dashboard-layout">
        <div className="active-project-hero">
           <div className="badge">Active Project</div>
           <h2 className="gradient-text">AuraSync AI</h2>
           <p className="description">
              A revolutionary workspace optimization tool that uses circadian rhythm sensors to adjust light, sound, and focus intervals automatically.
           </p>
           <div className="hero-actions">
              <button className="btn-primary">Generate Pitch Deck</button>
              <button className="btn-secondary">View Model</button>
           </div>
        </div>

        <div className="side-panel">
          <div className="side-card">
            <h3>Brand Identity</h3>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: '#0F172A', border: '1px solid var(--glass-border)' }}></div>
              <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: '#3B82F6', border: '1px solid var(--glass-border)' }}></div>
              <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: '#94A3B8', border: '1px solid var(--glass-border)' }}></div>
              <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: '#F8FAFC', border: '1px solid var(--glass-border)' }}></div>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>Personality: <span style={{ color: 'white' }}>Minimalist, High-Tech</span></p>
          </div>

          <div className="side-card">
            <h3>Revenue Strategy</h3>
            <div className="strategy-list">
              <div className="strategy-item">
                <span>Subscription</span>
                <span>$24/mo</span>
              </div>
              <div className="strategy-item">
                <span>Enterprise</span>
                <span>Custom</span>
              </div>
              <div className="strategy-item">
                <span>Target Cap</span>
                <span style={{ color: 'var(--success)', fontStyle: 'italic' }}>$50M+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
