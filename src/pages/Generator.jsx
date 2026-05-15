import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Brain, Code, Target, DollarSign, ArrowRight, Loader2 } from 'lucide-react';
import './Generator.jsx'; // This will be the CSS path but let's use separate CSS file
import './Generator.css';

const StepCard = ({ icon: Icon, title, value, onChange, placeholder, type = "text" }) => (
  <div className="input-step">
    <div className="step-label">
      <Icon size={18} color="var(--acc-primary)" />
      <span>{title}</span>
    </div>
    <input 
      type={type}
      className="input-field" 
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

const Generator = () => {
  const [loading, setLoading] = useState(false);
  const [niche, setNiche] = useState('');
  const [skills, setSkills] = useState('');
  const [budget, setBudget] = useState('');
  const [result, setResult] = useState(null);

  const handleGenerate = () => {
    if (!niche) return;
    setLoading(true);
    // Simulate AI delay
    setTimeout(() => {
      setResult({
        name: `${niche.charAt(0).toUpperCase() + niche.slice(1)}Forge`,
        slogan: `Elevating ${niche} to its peak potential.`,
        idea: `A decentralized marketplace for ${niche} professionals using custom smart contracts to ensure quality and payment delivery.`,
        audience: `Freelancers in ${niche}, small businesses needing ${skills}, and enterprise clients.`,
        monetization: `Commission fee of 2.5% per successful transaction.`,
        strategy: `LinkedIn outreach and content marketing focused on ${skills}.`
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="generator-container">
      <div className="page-header-simple">
        <h1 className="gradient-text">AI Startup Forge</h1>
        <p>Define your constraints, and let our AI forge your next empire.</p>
      </div>

      <div className="generator-layout">
        <div className="input-panel glass-card">
          <h3>Project Definition</h3>
          <div className="steps-container">
            <StepCard 
              icon={Brain} 
              title="Industry / Niche" 
              placeholder="e.g. Fintech, Edtech, Agritech" 
              value={niche}
              onChange={setNiche}
            />
            <StepCard 
              icon={Code} 
              title="Core Skills" 
              placeholder="e.g. React, Python, UI Design" 
              value={skills}
              onChange={setSkills}
            />
            <StepCard 
              icon={DollarSign} 
              title="Launch Budget" 
              placeholder="e.g. $500, $10,000" 
              value={budget}
              onChange={setBudget}
            />
          </div>
          <button 
            className="btn-primary generate-btn" 
            onClick={handleGenerate}
            disabled={loading || !niche}
          >
            {loading ? <Loader2 size={20} className="spin" /> : <Sparkles size={20} />}
            {loading ? "Forging..." : "Generate Concept"}
          </button>
        </div>

        <div className="result-panel">
          <AnimatePresence mode="wait">
            {!result && !loading && (
              <motion.div 
                key="empty"
                className="empty-state glass-card"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="pulse-icon">
                  <Zap size={40} color="var(--acc-primary)" />
                </div>
                <h3>Awaiting Input</h3>
                <p>Fill out the project definition to unlock AI insights.</p>
              </motion.div>
            )}

            {loading && (
              <motion.div 
                key="loading"
                className="loading-state glass-card"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="skeleton-line" style={{ width: '60%' }}></div>
                <div className="skeleton-line" style={{ width: '40%' }}></div>
                <div className="skeleton-line" style={{ width: '80%' }}></div>
                <p>Synthesizing market data...</p>
              </motion.div>
            )}

            {result && !loading && (
              <motion.div 
                key="result"
                className="result-card glass-card"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <div className="result-header">
                  <div className="badge">AI Generated</div>
                  <h2>{result.name}</h2>
                  <p className="slogan">"{result.slogan}"</p>
                </div>

                <div className="result-grid">
                  <div className="result-section">
                    <div className="label">The Core Idea</div>
                    <p>{result.idea}</p>
                  </div>
                  <div className="result-section">
                    <div className="label">Target Audience</div>
                    <p>{result.audience}</p>
                  </div>
                  <div className="result-section">
                    <div className="label">Monetization</div>
                    <p>{result.monetization}</p>
                  </div>
                  <div className="result-section">
                    <div className="label">Growth Strategy</div>
                    <p>{result.strategy}</p>
                  </div>
                </div>

                <div className="result-footer">
                  <button className="btn-secondary">Save Strategy</button>
                  <button className="btn-primary">
                    Build Brand Kit
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Generator;
