import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Palette, Layers, Type, Paintbrush, Download } from 'lucide-react';
import './BrandStudio.css';

const ColorBox = ({ color }) => (
  <div className="color-box" style={{ backgroundColor: color }}>
    <span>{color}</span>
  </div>
);

const BrandStudio = () => {
  const [activeBrand, setActiveBrand] = useState({
    name: "AstraCore",
    primary: "#6366f1",
    secondary: "#a855f7",
    accent: "#ec4899",
    font: "Space Grotesk",
    vibe: "Technical & Forward"
  });

  return (
    <div className="brand-container">
      <div className="page-header">
        <div>
          <h1 className="gradient-text">Brand Studio</h1>
          <p className="subtitle">Visual identity kits for the next generation of founders.</p>
        </div>
        <button className="btn-primary">
          <Download size={18} />
          Export Media Kit
        </button>
      </div>

      <div className="brand-layout">
        <div className="brand-preview glass-card">
          <div className="logo-preview">
            <div className="logo-symbol" style={{ background: `linear-gradient(135deg, ${activeBrand.primary}, ${activeBrand.secondary})` }}>
              {activeBrand.name.charAt(0)}
            </div>
            <h2 style={{ fontFamily: activeBrand.font }}>{activeBrand.name}</h2>
          </div>
          
          <div className="preview-sections">
            <div className="preview-card dark">
              <p>The future of startup building is here.</p>
            </div>
            <div className="preview-card light" style={{ backgroundColor: activeBrand.primary }}>
              <p>Elevate your vision.</p>
            </div>
          </div>
        </div>

        <div className="brand-config">
          <div className="config-section glass-card">
            <div className="section-header">
              <Palette size={20} />
              <h3>Color Palette</h3>
            </div>
            <div className="color-grid">
              <ColorBox color={activeBrand.primary} />
              <ColorBox color={activeBrand.secondary} />
              <ColorBox color={activeBrand.accent} />
            </div>
            <button className="text-btn">Regenerate Colors</button>
          </div>

          <div className="config-section glass-card">
            <div className="section-header">
              <Type size={20} />
              <h3>Typography</h3>
            </div>
            <div className="font-item">
              <p className="font-name">{activeBrand.font}</p>
              <p className="font-sample">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm</p>
            </div>
            <button className="text-btn">Change Font Pairing</button>
          </div>

          <div className="config-section glass-card">
            <div className="section-header">
              <Layers size={20} />
              <h3>Brand Persona</h3>
            </div>
            <div className="persona-badges">
              <span className="badge-outline">Innovative</span>
              <span className="badge-outline">Reliable</span>
              <span className="badge-outline">Sleek</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandStudio;
