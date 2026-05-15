import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Rocket, Sparkles, Target, Zap, ArrowRight, Shield } from 'lucide-react';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <nav className="home-nav">
        <div className="logo">
          <Rocket size={28} color="var(--acc-primary)" />
          <span>LaunchForge</span>
        </div>
        <div className="auth-btns">
          <button className="text-btn">Sign In</button>
          <button className="btn-primary" onClick={() => navigate('/dashboard')}>Get Started</button>
        </div>
      </nav>

      <section className="hero">
        <motion.div 
          className="hero-badge"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Sparkles size={14} />
          Now with GPT-4 Turbo Simulations
        </motion.div>
        
        <motion.h1 
          className="hero-title"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Forge your startup empire <br />
          <span className="gradient-text">from thin air.</span>
        </motion.h1>

        <motion.p 
          className="hero-subtitle"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          The ultimate AI-powered environment for modern founders. <br />
          Generate ideas, brand identities, and pitch decks in seconds.
        </motion.p>

        <motion.div 
          className="cta-group"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <button className="btn-primary lg" onClick={() => navigate('/generator')}>
            Launch Your First Idea
            <ArrowRight size={20} />
          </button>
          <button className="btn-outline lg">View Demo</button>
        </motion.div>
      </section>

      <section className="features-section">
        <div className="section-header">
            <h2>The LaunchForge Toolkit</h2>
            <p>Everything you need to go from zero to one.</p>
        </div>
        <div className="features-grid">
            <div className="feature-card glass-card">
                <Target size={32} color="var(--acc-primary)" />
                <h3>Market Validation</h3>
                <p>Verify your niche with real-world simulated data and audience persona mapping.</p>
            </div>
            <div className="feature-card glass-card">
                <Zap size={32} color="var(--acc-secondary)" />
                <h3>Ultra-Fast Branding</h3>
                <p>Generate color palettes, logos, and font pairings that resonate with your mission.</p>
            </div>
            <div className="feature-card glass-card">
                <Shield size={32} color="#10b981" />
                <h3>Investor Readiness</h3>
                <p>Auto-generate pitch deck outlines that follow Y-Combinator winning structures.</p>
            </div>
        </div>
      </section>

      <footer className="home-footer">
        <p>© 2026 LaunchForge AI. Built for the dreamers.</p>
      </footer>
    </div>
  );
};

export default Home;
